import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, LogOut, LayoutDashboard } from "lucide-react";
import { HakiWordmark } from "./haki-logo";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const links = [
  { to: "/", label: "Home" },
  { to: "/find-lawyer", label: "Find Lawyer" },
  { to: "/rights", label: "Know Your Rights" },
  { to: "/ai", label: "Haki AI" },
  { to: "/resources", label: "Resources" },
  { to: "/emergency", label: "Emergency" },
  { to: "/about", label: "About" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setUserEmail(data.session?.user.email ?? null));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setUserEmail(session?.user.email ?? null);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 glass-panel">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center">
          <HakiWordmark />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:bg-accent/60"
              activeProps={{ className: "text-primary bg-accent/60" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          {userEmail ? (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/dashboard"><LayoutDashboard className="h-4 w-4 mr-1.5" />Dashboard</Link>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={async () => {
                  await supabase.auth.signOut();
                  navigate({ to: "/" });
                }}
              >
                <LogOut className="h-4 w-4 mr-1.5" />Sign out
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/auth">Log in</Link>
              </Button>
              <Button size="sm" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/auth" search={{ mode: "signup" }}>Sign up</Link>
              </Button>
            </>
          )}
        </div>

        <button
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-accent"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur px-4 py-4 space-y-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-accent"
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            {userEmail ? (
              <>
                <Button variant="outline" asChild><Link to="/dashboard" onClick={() => setOpen(false)}>Dashboard</Link></Button>
                <Button variant="ghost" onClick={async () => { await supabase.auth.signOut(); setOpen(false); navigate({ to: "/" }); }}>Sign out</Button>
              </>
            ) : (
              <>
                <Button variant="outline" asChild><Link to="/auth" onClick={() => setOpen(false)}>Log in</Link></Button>
                <Button asChild><Link to="/auth" search={{ mode: "signup" }} onClick={() => setOpen(false)}>Sign up</Link></Button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
