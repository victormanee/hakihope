import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Heart, ShieldCheck, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — HakiHope" },
      { name: "description", content: "Our mission is to make justice accessible to every Kenyan — regardless of income, county, or background." },
      { property: "og:title", content: "About HakiHope" },
      { property: "og:description", content: "Making justice accessible to everyone." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <section className="border-b bg-muted/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 text-center">
          <div className="text-sm font-semibold text-hope uppercase tracking-wider">Our mission</div>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">Justice should never depend on income.</h1>
          <p className="mt-6 text-muted-foreground text-lg">
            HakiHope was built to close the justice gap in Kenya. Too many people never know their rights or meet a lawyer.
            We combine AI, verified advocates, and plain-language law so anyone — anywhere — can act with confidence.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-16 grid gap-6 sm:grid-cols-3 flex-1">
        {[
          { icon: Heart, title: "Human-centered", desc: "We start with the person, not the paperwork." },
          { icon: ShieldCheck, title: "Trust by default", desc: "Every advocate is verified. Every conversation is private." },
          { icon: Sparkles, title: "Hope through tech", desc: "AI turns complex law into next steps, in minutes." },
        ].map((v) => (
          <div key={v.title} className="rounded-2xl border bg-card p-6 text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold mb-3">
              <v.icon className="h-5 w-5" />
            </div>
            <h3 className="font-semibold">{v.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
          </div>
        ))}
      </section>
      <SiteFooter />
    </div>
  );
}
