import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useServerFn } from "@tanstack/react-start";
import { listThreads, createThread } from "@/lib/chat.functions";
import { SiteNav } from "@/components/site-nav";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/ai")({
  head: () => ({
    meta: [
      { title: "Haki AI — Your Legal Assistant | HakiHope" },
      { name: "description", content: "Ask Haki AI anything about Kenyan law. Get clear, plain-language answers instantly." },
      { property: "og:title", content: "Haki AI — Your Legal Assistant" },
      { property: "og:description", content: "Chat with an AI trained on Kenyan law." },
    ],
  }),
  component: AiEntry,
});

function AiEntry() {
  const navigate = useNavigate();
  const list = useServerFn(listThreads);
  const create = useServerFn(createThread);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        navigate({ to: "/auth", search: { redirect: "/ai" } as never });
        return;
      }
      const threads = await list();
      if (cancelled) return;
      if (threads.length > 0) {
        navigate({ to: "/ai/$threadId", params: { threadId: threads[0].id } });
      } else {
        const t = await create({ data: {} });
        navigate({ to: "/ai/$threadId", params: { threadId: t.id } });
      }
    })().catch(() => {
      navigate({ to: "/auth", search: { redirect: "/ai" } as never });
    });
    return () => { cancelled = true; };
  }, [navigate, list, create]);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <div className="flex-1 flex items-center justify-center text-muted-foreground">
        <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 animate-pulse text-gold" /> Preparing Haki AI…</div>
      </div>
    </div>
  );
}
