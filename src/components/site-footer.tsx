import { Link } from "@tanstack/react-router";
import { HakiWordmark } from "./haki-logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-muted/40 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1 space-y-3">
          <HakiWordmark />
          <p className="text-sm text-muted-foreground max-w-xs">
            Justice within reach. Verified lawyers, AI guidance, and legal knowledge for every Kenyan.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground mb-3">Product</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/find-lawyer" className="hover:text-primary">Find a Lawyer</Link></li>
            <li><Link to="/ai" className="hover:text-primary">Haki AI</Link></li>
            <li><Link to="/rights" className="hover:text-primary">Know Your Rights</Link></li>
            <li><Link to="/emergency" className="hover:text-primary">Emergency Help</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground mb-3">Company</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/resources" className="hover:text-primary">Resources</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground mb-3">Legal</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} HakiHope. Justice Within Reach.</div>
          <div>Made with hope for Kenya.</div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-5 text-center text-xs text-muted-foreground">
          Created by Victor Manee
        </div>
      </div>
    </footer>
  );
}
