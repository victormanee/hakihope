import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { BookOpen, Download, GraduationCap, Video } from "lucide-react";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — HakiHope" },
      { name: "description", content: "Guides, templates, videos, and downloadable resources to help you navigate Kenyan law." },
      { property: "og:title", content: "Resources — HakiHope" },
      { property: "og:description", content: "Free legal templates, guides, and civic education." },
    ],
  }),
  component: ResourcesPage,
});

const items = [
  { icon: Download, title: "Demand Letter Templates", desc: "Free templates for employment, land, and consumer disputes." },
  { icon: BookOpen, title: "Court Preparation Checklists", desc: "What to bring, what to say, and how to conduct yourself." },
  { icon: Video, title: "Explainer Videos", desc: "Short videos on your rights, in English and Kiswahili." },
  { icon: GraduationCap, title: "Legal Aid Directory", desc: "Verified NGOs and organizations offering free legal help." },
];

function ResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <section className="border-b bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
          <div className="text-sm font-semibold text-hope uppercase tracking-wider">Resources</div>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Everything you need, free</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">Templates, guides, videos, and a curated directory of legal aid partners across Kenya.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-14 flex-1 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((i) => (
          <Link to="/ai" key={i.title} className="rounded-2xl border bg-card p-6 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <i.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">{i.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{i.desc}</p>
          </Link>
        ))}
      </section>
      <SiteFooter />
    </div>
  );
}
