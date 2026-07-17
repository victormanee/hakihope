import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { FileText, MessageSquare, Search, Sparkles } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — HakiHope" },
      { name: "description", content: "Your cases, conversations, and documents on HakiHope." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) navigate({ to: "/auth", search: { redirect: "/dashboard" } as never });
      else setEmail(data.session.user.email ?? null);
    });
  }, [navigate]);

  if (!email) return null;

  const tiles = [
    { icon: MessageSquare, title: "Continue with Haki AI", desc: "Pick up a conversation or start a new one.", to: "/ai", cta: "Open Haki AI" },
    { icon: Search, title: "Find a Lawyer", desc: "Browse verified advocates by county and area.", to: "/find-lawyer", cta: "Browse lawyers" },
    { icon: FileText, title: "Know Your Rights", desc: "Search Kenyan law by topic, in plain language.", to: "/rights", cta: "Learn" },
  ] as const;

  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 flex-1 w-full">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Sparkles className="h-4 w-4 text-gold" /> Welcome back
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">{email}</h1>
        <p className="mt-2 text-muted-foreground">Where would you like to go next?</p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((t) => (
            <div key={t.title} className="rounded-2xl border bg-card p-6 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <t.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
              <Button asChild className="mt-5 w-full bg-primary hover:bg-primary/90">
                <Link to={t.to}>{t.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
