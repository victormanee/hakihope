import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import type { UIMessage } from "ai";

export const listThreads = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("chat_threads")
      .select("id, title, updated_at")
      .order("updated_at", { ascending: false });
    if (error) throw new Error(error.message);
    return data ?? [];
  });

export const createThread = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: { title?: string }) => input ?? {})
  .handler(async ({ data, context }) => {
    const { data: row, error } = await context.supabase
      .from("chat_threads")
      .insert({ user_id: context.userId, title: data.title ?? "New conversation" })
      .select("id, title, updated_at")
      .single();
    if (error) throw new Error(error.message);
    return row;
  });

export const deleteThread = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: { id: string }) => input)
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase.from("chat_threads").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Json = any;

export const getThreadMessages = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: { threadId: string }) => input)
  .handler(async ({ data, context }): Promise<Json[]> => {
    const { data: rows, error } = await context.supabase
      .from("chat_messages")
      .select("message")
      .eq("thread_id", data.threadId)
      .order("created_at", { ascending: true });
    if (error) throw new Error(error.message);
    return (rows ?? []).map((r) => r.message as Json);
  });

export const saveMessages = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: { threadId: string; messages: UIMessage[] }) => input)
  .handler(async ({ data, context }) => {
    // Replace all messages for the thread (simple, safe for small threads)
    await context.supabase.from("chat_messages").delete().eq("thread_id", data.threadId);
    if (data.messages.length > 0) {
      const rows = data.messages.map((m) => ({
        thread_id: data.threadId,
        user_id: context.userId,
        role: m.role,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        message: m as any,
      }));
      const { error } = await context.supabase.from("chat_messages").insert(rows);
      if (error) throw new Error(error.message);
    }

    // Auto-title from first user message
    const firstUser = data.messages.find((m) => m.role === "user");
    const text = firstUser?.parts.map((p) => (p.type === "text" ? p.text : "")).join(" ").trim();
    const title = text ? text.slice(0, 60) : "New conversation";
    await context.supabase.from("chat_threads").update({ title, updated_at: new Date().toISOString() }).eq("id", data.threadId);

    return { ok: true };
  });
