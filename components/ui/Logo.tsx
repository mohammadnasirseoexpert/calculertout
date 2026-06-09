interface LogoProps {
  variant?: "dark" | "light";
}

export function Logo({ variant = "dark" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-surface-900";

  return (
    <div className="flex items-center gap-2.5">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <rect width="32" height="32" rx="8" fill="url(#logo-gradient)" />
        <rect x="6" y="6" width="8" height="8" rx="2" fill="white" fillOpacity="0.9" />
        <rect x="18" y="6" width="8" height="8" rx="2" fill="white" fillOpacity="0.6" />
        <rect x="6" y="18" width="8" height="8" rx="2" fill="white" fillOpacity="0.6" />
        <rect x="18" y="18" width="8" height="8" rx="2" fill="white" fillOpacity="0.9" />
        <defs>
          <linearGradient id="logo-gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366f1" />
            <stop offset="1" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
      </svg>
      <span className={`font-display font-semibold text-lg ${textColor}`}>
        Calculateur<span className="text-brand-500">Pro</span>
      </span>
    </div>
  );
}
