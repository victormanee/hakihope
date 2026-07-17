import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — HakiHope" },
      { name: "description", content: "Reach the HakiHope team for support, partnerships, or media inquiries." },
      { property: "og:title", content: "Contact HakiHope" },
      { property: "og:description", content: "We'd love to hear from you." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [busy, setBusy] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 grid lg:grid-cols-2 gap-12 flex-1">
        <div>
          <div className="text-sm font-semibold text-hope uppercase tracking-wider">Contact</div>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">We'd love to hear from you</h1>
          <p className="mt-3 text-muted-foreground">For legal support, use Find a Lawyer or Haki AI. For partnerships, media, and general inquiries — reach us here.</p>
          <div className="mt-8 space-y-4 text-sm">
            <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" /> hello@hakihope.org</div>
            <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary" /> +254 700 000 000</div>
            <div className="flex items-center gap-3"><MessageSquare className="h-4 w-4 text-primary" /> Live chat available in-app</div>
          </div>
        </div>
        <form
          className="rounded-2xl border bg-card p-6 shadow-soft space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setBusy(true);
            setTimeout(() => { toast.success("Message received. We'll be in touch soon."); setBusy(false); (e.target as HTMLFormElement).reset(); }, 800);
          }}
        >
          <div className="space-y-2"><Label htmlFor="name">Name</Label><Input id="name" required maxLength={100} /></div>
          <div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" type="email" required maxLength={255} /></div>
          <div className="space-y-2"><Label htmlFor="msg">Message</Label><Textarea id="msg" rows={5} required maxLength={2000} /></div>
          <Button type="submit" disabled={busy} className="w-full bg-primary hover:bg-primary/90">{busy ? "Sending…" : "Send message"}</Button>
        </form>
      </section>
      <SiteFooter />
    </div>
  );
}
