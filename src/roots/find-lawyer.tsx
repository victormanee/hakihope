import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { MapPin, Star, ShieldCheck, Video, Search, Filter, Heart } from "lucide-react";

export const Route = createFileRoute("/find-lawyer")({
  head: () => ({
    meta: [
      { title: "Find a Lawyer — HakiHope" },
      { name: "description", content: "Browse Law Society verified advocates across Kenya by county, practice area, and budget." },
      { property: "og:title", content: "Find a Lawyer — HakiHope" },
      { property: "og:description", content: "Verified Kenyan advocates you can trust." },
    ],
  }),
  component: FindLawyer,
});

type Lawyer = {
  id: string;
  full_name: string;
  slug: string;
  firm: string | null;
  county: string;
  practice_areas: string[];
  languages: string[];
  years_experience: number;
  consultation_fee_kes: number;
  rating: number;
  reviews_count: number;
  bio: string | null;
  offers_video: boolean;
  offers_pro_bono: boolean;
  verified: boolean;
};

function FindLawyer() {
  const [q, setQ] = useState("");
  const [county, setCounty] = useState<string>("");
  const [area, setArea] = useState<string>("");

  const { data: lawyers = [], isLoading } = useQuery({
    queryKey: ["lawyers"],
    queryFn: async () => {
      const { data, error } = await supabase.from("lawyers").select("*").order("rating", { ascending: false });
      if (error) throw error;
      return data as Lawyer[];
    },
  });

  const counties = useMemo(() => Array.from(new Set(lawyers.map((l) => l.county))).sort(), [lawyers]);
  const areas = useMemo(() => Array.from(new Set(lawyers.flatMap((l) => l.practice_areas))).sort(), [lawyers]);

  const filtered = lawyers.filter((l) => {
    const matchesQ = !q || l.full_name.toLowerCase().includes(q.toLowerCase()) || l.firm?.toLowerCase().includes(q.toLowerCase());
    const matchesC = !county || l.county === county;
    const matchesA = !area || l.practice_areas.includes(area);
    return matchesQ && matchesC && matchesA;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <section className="border-b bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:py-16">
          <div className="text-sm font-semibold text-hope uppercase tracking-wider">Find a Lawyer</div>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Verified advocates, ready to help</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">Every advocate is verified against the Law Society of Kenya. Filter by county, practice area, and language.</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-[1fr_200px_200px_auto]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search by name or firm" value={q} onChange={(e) => setQ(e.target.value)} className="pl-9 h-11" />
            </div>
            <select value={county} onChange={(e) => setCounty(e.target.value)} className="h-11 rounded-md border border-input bg-background px-3 text-sm">
              <option value="">All counties</option>
              {counties.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <select value={area} onChange={(e) => setArea(e.target.value)} className="h-11 rounded-md border border-input bg-background px-3 text-sm">
              <option value="">All practice areas</option>
              {areas.map((a) => <option key={a} value={a}>{a}</option>)}
            </select>
            <Button variant="outline" className="h-11" onClick={() => { setQ(""); setCounty(""); setArea(""); }}>
              <Filter className="h-4 w-4 mr-2" />Reset
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 flex-1 w-full">
        {isLoading ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-2xl border bg-card p-6 h-64 animate-pulse" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-24 text-muted-foreground">No lawyers match your filters yet.</div>
        ) : (
          <>
            <div className="mb-6 text-sm text-muted-foreground">{filtered.length} verified advocate{filtered.length === 1 ? "" : "s"}</div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((l) => (
                <div key={l.id} className="group rounded-2xl border border-border/70 bg-card p-6 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground flex items-center justify-center font-semibold">
                        {l.full_name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                      </div>
                      <div>
                        <div className="font-semibold leading-tight">{l.full_name}</div>
                        <div className="text-xs text-muted-foreground">{l.firm}</div>
                      </div>
                    </div>
                    {l.verified && (
                      <span title="Law Society verified" className="inline-flex items-center gap-1 text-xs text-hope">
                        <ShieldCheck className="h-4 w-4" />
                      </span>
                    )}
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" /> {l.county}
                    <span className="mx-1">·</span>
                    <Star className="h-4 w-4 text-gold fill-gold" /> {l.rating.toFixed(1)}
                    <span className="text-xs">({l.reviews_count})</span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {l.practice_areas.slice(0, 3).map((a) => (
                      <span key={a} className="text-xs rounded-full bg-accent px-2.5 py-0.5 text-accent-foreground">{a}</span>
                    ))}
                  </div>

                  <p className="mt-4 text-sm text-muted-foreground line-clamp-2">{l.bio}</p>

                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-muted-foreground">Consultation</div>
                      <div className="font-semibold">
                        {l.offers_pro_bono && l.consultation_fee_kes === 0 ? "Pro bono" : `KES ${l.consultation_fee_kes.toLocaleString()}`}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {l.offers_video && <span title="Video consultation" className="text-muted-foreground"><Video className="h-4 w-4" /></span>}
                      {l.offers_pro_bono && <span title="Pro bono friendly" className="text-hope"><Heart className="h-4 w-4" /></span>}
                    </div>
                  </div>

                  <Button asChild className="mt-5 w-full bg-primary hover:bg-primary/90">
                    <Link to="/auth">Book consultation</Link>
                  </Button>
                </div>
              ))}
            </div>
          </>
        )}
      </section>

      <SiteFooter />
    </div>
  );
}
