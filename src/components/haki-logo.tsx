import logoUrl from "@/assets/logo.png";

export function HakiLogo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <img
      src={logoUrl}
      alt="HakiHope logo"
      className={className}
      width={512}
      height={512}
      loading="eager"
    />
  );
}

export function HakiWordmark({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <HakiLogo className="h-8 w-8" />
      <span className="font-semibold tracking-tight text-lg">
        <span className="text-primary">Haki</span>
        <span className="text-gold">Hope</span>
      </span>
    </div>
  );
}
