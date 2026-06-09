import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-brand-500/20 to-violet-500/20 blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-gradient-to-tr from-emerald-500/15 to-brand-500/15 blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-xl relative py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
            20 calculateurs gratuits disponibles
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-semibold text-surface-900 leading-tight mb-6 text-balance">
            Les meilleurs{" "}
            <span className="gradient-text">calculateurs gratuits</span>{" "}
            en ligne
          </h1>

          <p className="text-lg md:text-xl text-surface-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Finance, santé, mathématiques : CalculateurPro met à votre disposition
            des outils de calcul précis, gratuits et sans inscription.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/finance" className="btn-primary text-base px-8 py-4">
              Explorer les calculateurs
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/sante/calculateur-imc" className="btn-secondary text-base px-8 py-4">
              Calculer mon IMC
            </Link>
          </div>

          {/* Quick chips */}
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { label: "💳 Prêt immobilier", href: "/finance/calculateur-hypothecaire" },
              { label: "⚖️ IMC", href: "/sante/calculateur-imc" },
              { label: "🧾 TVA", href: "/finance/calculateur-tva" },
              { label: "% Pourcentage", href: "/maths/calculateur-pourcentage" },
              { label: "🔥 Calories", href: "/sante/calculateur-calories" },
              { label: "📈 Intérêts composés", href: "/finance/calculateur-interets-composes" },
            ].map((chip) => (
              <Link
                key={chip.href}
                href={chip.href}
                className="px-3 py-1.5 rounded-full text-sm bg-white border border-surface-200 text-surface-600 hover:border-brand-300 hover:text-brand-600 hover:bg-brand-50 transition-all duration-200"
              >
                {chip.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
