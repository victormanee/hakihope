import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { useServerFn } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";
import { listThreads, createThread, deleteThread, getThreadMessages, saveMessages } from "@/lib/chat.functions";
import { HakiWordmark } from "@/components/haki-logo";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, MessageSquare, Sparkles, Send, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/ai/$threadId")({
  head: () => ({
    meta: [
      { title: "Haki AI Chat — HakiHope" },
      { name: "description", content: "Chat with Haki AI about Kenyan law." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AiChat,
});

type Thread = { id: string; title: string; updated_at: string };

const SUGGESTIONS = [
  "I was fired without notice — what are my rights?",
  "How do I register a small business in Kenya?",
  "My landlord won't return my deposit. What can I do?",
  "What should I do if I'm arrested?",
];

function AiChat() {
  const { threadId } = Route.useParams();
  const navigate = useNavigate();
  const [threads, setThreads] = useState<Thread[]>([]);
  const [initialMessages, setInitialMessages] = useState<UIMessage[] | null>(null);
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [input, setInput] = useState("");

  const list = useServerFn(listThreads);
  const create = useServerFn(createThread);
  const del = useServerFn(deleteThread);
  const getMsgs = useServerFn(getThreadMessages);
  const save = useServerFn(saveMessages);
  const saveRef = useRef(save);
  saveRef.current = save;

  // Auth + load threads
  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        setAuthed(false);
        navigate({ to: "/auth", search: { redirect: `/ai/${threadId}` } as never });
        return;
      }
      setAuthed(true);
      const t = await list();
      setThreads(t as Thread[]);
    })();
  }, [threadId, navigate, list]);

  // Load messages for this thread
  useEffect(() => {
    if (!authed) return;
    setInitialMessages(null);
    (async () => {
      const msgs = await getMsgs({ data: { threadId } });
      setInitialMessages((msgs as UIMessage[]) ?? []);
    })();
  }, [threadId, authed, getMsgs]);

  if (!authed || !initialMessages) {
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        <Sparkles className="h-4 w-4 mr-2 animate-pulse text-gold" /> Loading Haki AI…
      </div>
    );
  }

  return (
    <AiChatInner
      threadId={threadId}
      threads={threads}
      setThreads={setThreads}
      initialMessages={initialMessages}
      input={input}
      setInput={setInput}
      onNew={async () => {
        const t = await create({ data: {} });
        setThreads((prev) => [t as Thread, ...prev]);
        navigate({ to: "/ai/$threadId", params: { threadId: t.id } });
      }}
      onDelete={async (id) => {
        await del({ data: { id } });
        const remaining = threads.filter((x) => x.id !== id);
        setThreads(remaining);
        if (id === threadId) {
          if (remaining[0]) navigate({ to: "/ai/$threadId", params: { threadId: remaining[0].id } });
          else navigate({ to: "/ai" });
        }
      }}
      saveRef={saveRef}
    />
  );
}

function AiChatInner({
  threadId,
  threads,
  setThreads,
  initialMessages,
  input,
  setInput,
  onNew,
  onDelete,
  saveRef,
}: {
  threadId: string;
  threads: Thread[];
  setThreads: (t: Thread[] | ((prev: Thread[]) => Thread[])) => void;
  initialMessages: UIMessage[];
  input: string;
  setInput: (v: string) => void;
  onNew: () => Promise<void>;
  onDelete: (id: string) => Promise<void>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  saveRef: React.MutableRefObject<(args: any) => Promise<unknown>>;
}) {
  const { messages, sendMessage, status } = useChat({
    id: threadId,
    messages: initialMessages,
    transport: new DefaultChatTransport({ api: "/api/chat" }),
    onError: (err) => toast.error(err.message || "Something went wrong"),
    onFinish: ({ messages: final }) => {
      saveRef.current({ data: { threadId, messages: final as UIMessage[] } })
        .then(() => {
          const firstUser = (final as UIMessage[]).find((m) => m.role === "user");
          const text = firstUser?.parts.map((p) => (p.type === "text" ? p.text : "")).join(" ").trim();
          const title = text ? text.slice(0, 60) : "New conversation";
          setThreads((prev) => prev.map((t) => (t.id === threadId ? { ...t, title, updated_at: new Date().toISOString() } : t)));
        })
        .catch(() => {});
    },
  });

  const inputRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => { inputRef.current?.focus(); }, [threadId, status]);

  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  const isBusy = status === "submitted" || status === "streaming";

  const submit = () => {
    const text = input.trim();
    if (!text || isBusy) return;
    setInput("");
    sendMessage({ text });
  };

  return (
    <div className="h-screen flex bg-background">
      {/* Sidebar */}
      <aside className="hidden md:flex w-72 flex-col border-r bg-muted/30">
        <div className="p-4 border-b flex items-center justify-between">
          <Link to="/" className="flex items-center"><HakiWordmark /></Link>
        </div>
        <div className="p-3">
          <Button onClick={onNew} className="w-full bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4 mr-2" /> New conversation
          </Button>
        </div>
        <div className="flex-1 overflow-y-auto px-2 pb-4 space-y-1">
          {threads.map((t) => (
            <div key={t.id} className={cn(
              "group flex items-center gap-2 rounded-lg px-2 py-2 text-sm hover:bg-accent/70 transition-colors",
              t.id === threadId && "bg-accent text-accent-foreground"
            )}>
              <Link to="/ai/$threadId" params={{ threadId: t.id }} className="flex-1 flex items-center gap-2 min-w-0">
                <MessageSquare className="h-4 w-4 shrink-0 opacity-60" />
                <span className="truncate">{t.title}</span>
              </Link>
              <button onClick={() => onDelete(t.id)} className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive" aria-label="Delete">
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>
        <div className="p-3 border-t">
          <Link to="/" className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1">
            <ArrowLeft className="h-3 w-3" /> Back to HakiHope
          </Link>
        </div>
      </aside>

      {/* Chat */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="border-b px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full gradient-hero flex items-center justify-center text-primary-foreground">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <div className="font-semibold">Haki AI</div>
              <div className="text-xs text-muted-foreground">Your Kenyan legal assistant</div>
            </div>
          </div>
          <Button asChild variant="outline" size="sm">
            <Link to="/find-lawyer">Talk to a lawyer</Link>
          </Button>
        </header>

        <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 md:px-8 py-6">
          <div className="mx-auto max-w-3xl space-y-6">
            {messages.length === 0 && (
              <div className="text-center py-16">
                <div className="mx-auto h-16 w-16 rounded-2xl gradient-hero flex items-center justify-center text-primary-foreground mb-6">
                  <Sparkles className="h-7 w-7" />
                </div>
                <h1 className="text-2xl font-bold">How can I help with your legal question?</h1>
                <p className="mt-2 text-muted-foreground">Describe your situation in your own words. I'll explain the law and next steps.</p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2 max-w-xl mx-auto">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => sendMessage({ text: s })}
                      className="text-left rounded-xl border bg-card p-4 text-sm hover:border-primary/40 hover:shadow-soft transition-all"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m) => {
              const text = m.parts.map((p) => (p.type === "text" ? p.text : "")).join("");
              if (m.role === "user") {
                return (
                  <div key={m.id} className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl bg-primary text-primary-foreground px-4 py-3 text-sm shadow-soft">
                      {text}
                    </div>
                  </div>
                );
              }
              return (
                <div key={m.id} className="flex gap-3">
                  <div className="h-8 w-8 shrink-0 rounded-full gradient-hero flex items-center justify-center text-primary-foreground">
                    <Sparkles className="h-3.5 w-3.5" />
                  </div>
                  <div className="prose prose-sm dark:prose-invert max-w-none flex-1 pt-1">
                    <ReactMarkdown>{text}</ReactMarkdown>
                  </div>
                </div>
              );
            })}

            {status === "submitted" && (
              <div className="flex gap-3">
                <div className="h-8 w-8 shrink-0 rounded-full gradient-hero flex items-center justify-center text-primary-foreground">
                  <Sparkles className="h-3.5 w-3.5" />
                </div>
                <div className="text-sm text-muted-foreground pt-2 animate-pulse">Haki AI is thinking…</div>
              </div>
            )}
          </div>
        </div>

        <div className="border-t bg-background/80 backdrop-blur p-4">
          <div className="mx-auto max-w-3xl">
            <div className="relative flex items-end gap-2 rounded-2xl border bg-card p-2 shadow-soft focus-within:border-primary/50 transition-colors">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); submit(); }
                }}
                rows={1}
                placeholder="Ask about your rights, a legal situation, or Kenyan law…"
                className="flex-1 resize-none bg-transparent px-3 py-2 text-sm outline-none max-h-40"
                disabled={isBusy}
              />
              <Button size="icon" onClick={submit} disabled={!input.trim() || isBusy} className="bg-primary hover:bg-primary/90 shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="mt-2 text-center text-xs text-muted-foreground">
              Haki AI provides general legal information. For advice on your specific situation, consult a lawyer.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
