import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import {
  Scale, Sparkles, ShieldCheck, MessageSquareHeart, FolderLock,
  BookOpen, Siren, MapPin, ArrowRight, CheckCircle2, CalendarClock, Users,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Landing,
});

const stats = [
  { value: "20,000+", label: "Citizens helped" },
  { value: "3,000+", label: "Verified lawyers" },
  { value: "47", label: "Counties covered" },
  { value: "96%", label: "Client satisfaction" },
];

const features = [
  { icon: Sparkles, title: "Haki AI Assistant", desc: "Describe your issue in plain English or Kiswahili. Get instant guidance on your rights, evidence, and next steps." },
  { icon: Scale, title: "Smart Lawyer Matching", desc: "A 60-second questionnaire finds the right verified advocate by county, budget, urgency, and language." },
  { icon: BookOpen, title: "Know Your Rights", desc: "A searchable library that turns Kenyan law into clear, actionable advice." },
  { icon: FolderLock, title: "Secure Document Vault", desc: "Encrypted uploads for evidence, contracts, IDs, and case files. Only you and your lawyer see them." },
  { icon: CalendarClock, title: "Consultation Booking", desc: "Book physical, phone, or video consultations with real-time availability." },
  { icon: Siren, title: "Emergency Legal Help", desc: "One tap connects you to legal aid, hotlines, and trusted contacts when it matters most." },
  { icon: ShieldCheck, title: "Law Society Verified", desc: "Every advocate on HakiHope is vetted against the Law Society of Kenya register." },
  { icon: MessageSquareHeart, title: "Human-Centered", desc: "No jargon. No bias. Just clarity and hope through the process." },
];

const categories = [
  "Employment", "Land", "Family", "Criminal", "Human Rights",
  "Business", "Consumer", "Police Procedures", "Cybercrime", "Traffic", "Constitution",
];

function Landing() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 gradient-hero opacity-95" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,white_0%,transparent_60%)] opacity-20" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-primary-foreground animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              AI-powered legal guidance for every Kenyan
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Justice Should Never<br />Depend on Your Income.
            </h1>
            <p className="mt-6 text-lg text-white/85 max-w-xl">
              Access verified lawyers, understand your rights, receive AI-powered
              guidance, and find hope through justice — all in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 shadow-glow">
                <Link to="/find-lawyer">
                  Find a Lawyer <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 text-primary-foreground border-white/30 hover:bg-white/20 backdrop-blur">
                <Link to="/ai">
                  <Sparkles className="mr-2 h-4 w-4" /> Talk to Haki AI
                </Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/75">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> Law Society verified</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> Free AI guidance</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> English & Kiswahili</div>
            </div>
          </div>

          <div className="relative animate-fade-up">
            <div className="absolute -inset-8 bg-gold/20 blur-3xl rounded-full animate-float-slow" />
            <img
              src={heroImg}
              alt="Diverse Kenyans standing together beneath a glowing scale of justice"
              width={1600}
              height={1200}
              className="relative rounded-3xl shadow-elegant border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/60 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">{s.value}</div>
              <div className="mt-1 text-xs md:text-sm text-muted-foreground uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:py-28">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold text-hope uppercase tracking-wider">Everything you need</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">A complete justice platform, built for Kenya</h2>
          <p className="mt-4 text-muted-foreground">
            From your first question to your day in court — HakiHope is with you.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border/70 bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant hover:border-primary/30"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-gold/15 group-hover:text-gold transition-colors">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-20">
        <div className="rounded-3xl border border-border/70 bg-gradient-to-br from-card to-muted/40 p-8 sm:p-12">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold text-hope uppercase tracking-wider">Know your rights</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">Legal knowledge, in plain language</h2>
            <p className="mt-3 text-muted-foreground">
              Browse Kenyan law by area. Each topic explains what the law says, what to
              do, and when to call a lawyer.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <Link
                key={c}
                to="/rights"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground/80 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                {c}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl gradient-hero p-10 sm:p-16 text-primary-foreground shadow-elegant">
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-gold/30 blur-3xl animate-float-slow" />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Ready to take the first step?</h2>
            <p className="mt-4 text-white/85">
              Talk to Haki AI now — free, private, and available in English and Kiswahili.
              Or browse verified advocates in your county.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90">
                <Link to="/ai"><Sparkles className="mr-2 h-4 w-4" />Start with Haki AI</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 text-primary-foreground border-white/30 hover:bg-white/20 backdrop-blur">
                <Link to="/find-lawyer"><MapPin className="mr-2 h-4 w-4" />Browse lawyers</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-white/75">
              <div className="flex items-center gap-2"><Users className="h-4 w-4" /> Trusted by 20,000+ Kenyans</div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
