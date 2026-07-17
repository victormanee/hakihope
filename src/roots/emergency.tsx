import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Phone, Siren, ShieldAlert, HeartHandshake, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/emergency")({
  head: () => ({
    meta: [
      { title: "Emergency Legal Help — HakiHope" },
      { name: "description", content: "Immediate legal help for wrongful arrest, domestic violence, harassment, and human rights emergencies in Kenya." },
      { property: "og:title", content: "Emergency Legal Help — HakiHope" },
      { property: "og:description", content: "Free, immediate help when it matters most." },
    ],
  }),
  component: EmergencyPage,
});

const hotlines = [
  { name: "Police (National)", number: "999 / 112", tag: "General emergencies" },
  { name: "GBV Hotline (HAK)", number: "1195", tag: "Gender-based violence" },
  { name: "Childline Kenya", number: "116", tag: "Child protection" },
  { name: "KNCHR", number: "+254 20 3969000", tag: "Human rights abuses" },
  { name: "IPOA", number: "+254 20 4906000", tag: "Police misconduct" },
  { name: "Kituo cha Sheria", number: "+254 20 3874191", tag: "Free legal aid" },
];

const emergencies = [
  { icon: ShieldAlert, title: "Wrongful Arrest", desc: "You have the right to remain silent, to a lawyer, and to be told the charge within 24 hours." },
  { icon: Siren, title: "Police Harassment", desc: "Record badge numbers, ask for identification, and report to IPOA." },
  { icon: HeartHandshake, title: "Domestic Violence", desc: "Call 1195, seek safe shelter, and apply for a protection order." },
  { icon: HeartHandshake, title: "Gender Violence", desc: "You can get a P3 form free of charge at any police station or public hospital." },
  { icon: ShieldAlert, title: "Child Protection", desc: "Call 116. Reporting is anonymous and free." },
  { icon: Siren, title: "Human Rights Abuse", desc: "Document evidence and contact KNCHR immediately." },
];

function EmergencyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />

      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-destructive/15 via-background to-background" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-destructive/10 text-destructive px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            <Siren className="h-3.5 w-3.5" /> Emergency legal help
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">Help is one tap away</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">If you or someone you know is in danger, use these verified hotlines and follow the guidance below. In life-threatening emergencies, call 999 or 112 first.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button size="lg" className="bg-destructive hover:bg-destructive/90" asChild>
              <a href="tel:999"><Phone className="h-4 w-4 mr-2" />Call 999</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:1195"><Phone className="h-4 w-4 mr-2" />GBV Hotline (1195)</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <h2 className="text-2xl font-bold">Verified hotlines</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hotlines.map((h) => (
            <a key={h.name} href={`tel:${h.number.replace(/\s|\//g, "")}`} className="group rounded-2xl border bg-card p-5 hover:shadow-elegant hover:-translate-y-0.5 transition-all">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">{h.tag}</div>
                  <div className="font-semibold mt-1">{h.name}</div>
                  <div className="text-lg font-bold text-primary mt-1">{h.number}</div>
                </div>
                <Phone className="h-5 w-5 text-muted-foreground group-hover:text-gold transition-colors" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 flex-1">
        <h2 className="text-2xl font-bold">If this is happening to you</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {emergencies.map((e) => (
            <div key={e.title} className="rounded-2xl border bg-card p-6 shadow-soft">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <e.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{e.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border bg-muted/40 p-6 flex items-center gap-3 text-sm text-muted-foreground">
          <MapPin className="h-5 w-5" /> Enable location on your device to see nearest legal aid centers and police stations (coming soon).
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
