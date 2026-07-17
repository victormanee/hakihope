import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/rights")({
  head: () => ({
    meta: [
      { title: "Know Your Rights — HakiHope" },
      { name: "description", content: "Kenyan law in plain language: your rights, what to do, and when to call a lawyer." },
      { property: "og:title", content: "Know Your Rights — HakiHope" },
      { property: "og:description", content: "A searchable legal rights library, written for real people." },
    ],
  }),
  component: RightsPage,
});

const topics = [
  { slug: "employment", title: "Employment Rights", desc: "Fair dismissal, notice, wages, harassment, and safe working conditions.", law: "Employment Act, 2007" },
  { slug: "land", title: "Land & Property", desc: "Ownership, succession, boundary disputes, title deeds, and evictions.", law: "Land Act, 2012" },
  { slug: "family", title: "Family Law", desc: "Marriage, divorce, custody, maintenance, and children's rights.", law: "Marriage Act, 2014" },
  { slug: "criminal", title: "Criminal Justice", desc: "Arrest procedures, bail, self-representation, and the right to counsel.", law: "Criminal Procedure Code" },
  { slug: "consumer", title: "Consumer Rights", desc: "Refunds, faulty goods, misleading ads, and unfair contract terms.", law: "Consumer Protection Act, 2012" },
  { slug: "human-rights", title: "Human Rights", desc: "Freedom, dignity, equality, and protection from discrimination.", law: "Constitution of Kenya, 2010" },
  { slug: "business", title: "Business & Contracts", desc: "Registering, contracts, tax basics, and dispute resolution.", law: "Companies Act, 2015" },
  { slug: "police", title: "Police Procedures", desc: "Your rights when stopped, questioned, searched, or arrested.", law: "National Police Service Act" },
  { slug: "constitution", title: "The Constitution", desc: "Bill of Rights, devolution, and citizens' civic powers.", law: "Constitution of Kenya, 2010" },
  { slug: "cybercrime", title: "Cybercrime", desc: "Online fraud, hacking, cyberbullying, and digital privacy.", law: "Computer Misuse & Cybercrimes Act, 2018" },
  { slug: "traffic", title: "Traffic & Road Safety", desc: "Licensing, fines, accidents, and insurance claims.", law: "Traffic Act (Cap 403)" },
  { slug: "gbv", title: "Gender-Based Violence", desc: "Reporting, protection orders, and survivor support.", law: "Protection Against Domestic Violence Act, 2015" },
];

function RightsPage() {
  const [q, setQ] = useState("");
  const filtered = topics.filter((t) => !q || t.title.toLowerCase().includes(q.toLowerCase()) || t.desc.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />

      <section className="border-b bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:py-16">
          <div className="text-sm font-semibold text-hope uppercase tracking-wider">Know Your Rights</div>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Kenyan law, in plain language</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">Search topics, read what the law says, and learn exactly what to do next.</p>
          <div className="relative mt-8 max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search rights, laws, and topics" value={q} onChange={(e) => setQ(e.target.value)} className="pl-9 h-12" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 flex-1 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((t) => (
          <article key={t.slug} className="group rounded-2xl border border-border/70 bg-card p-6 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-gold/15 group-hover:text-gold transition-colors">
              <BookOpen className="h-5 w-5" />
            </div>
            <h2 className="mt-4 font-semibold text-lg">{t.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
            <div className="mt-4 text-xs uppercase tracking-wide text-muted-foreground">Governing law</div>
            <div className="text-sm font-medium">{t.law}</div>
            <Link to="/ai" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:text-gold">
              Ask Haki AI <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-24">
        <div className="rounded-3xl gradient-hero p-10 sm:p-14 text-primary-foreground">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold">Not sure which law applies to you?</h2>
            <p className="mt-3 text-white/85">Describe your situation to Haki AI — you'll get a plain-English explanation and next steps in seconds.</p>
            <Button asChild size="lg" className="mt-6 bg-gold text-gold-foreground hover:bg-gold/90">
              <Link to="/ai"><Sparkles className="mr-2 h-4 w-4" />Ask Haki AI</Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
