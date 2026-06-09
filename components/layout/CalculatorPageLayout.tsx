import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { RelatedCalculators } from "@/components/ui/RelatedCalculators";
import { FAQSection } from "@/components/ui/FAQSection";
import { Calculator, FAQItem } from "@/types";
import { categoryLabels, categoryHrefs } from "@/lib/utils";

interface CalculatorPageLayoutProps {
  calculator: Calculator;
  relatedCalculators: Calculator[];
  intro: React.ReactNode;
  formula: React.ReactNode;
  howItWorks: React.ReactNode;
  examples: React.ReactNode;
  faq: FAQItem[];
  calculatorWidget: React.ReactNode;
}

export function CalculatorPageLayout({
  calculator,
  relatedCalculators,
  intro,
  formula,
  howItWorks,
  examples,
  faq,
  calculatorWidget,
}: CalculatorPageLayoutProps) {
  const catLabel = categoryLabels[calculator.category] || calculator.category;
  const catHref = categoryHrefs[calculator.category] || "/";

  return (
    <div className="container-xl py-10">
      <Breadcrumb
        items={[
          { label: catLabel, href: catHref },
          { label: calculator.name, href: `/${calculator.category}/${calculator.slug}` },
        ]}
      />

      {/* Hero */}
      <div className="mt-8 mb-12 max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">{calculator.icon}</span>
          <h1 className="text-3xl md:text-4xl font-display font-semibold text-surface-900">
            {calculator.name}
          </h1>
        </div>
        <p className="text-lg text-surface-500">{calculator.description}</p>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Widget — sticky on desktop */}
        <div className="lg:col-span-2 order-first lg:order-last">
          <div className="sticky top-24">
            <div className="card p-6">
              <h2 className="font-display font-semibold text-surface-900 mb-6 text-lg">
                {calculator.name}
              </h2>
              {calculatorWidget}
            </div>

            {calculator.formula && (
              <div className="mt-4 p-4 rounded-xl bg-surface-50 border border-surface-200">
                <p className="text-xs text-surface-500 uppercase tracking-wider font-medium mb-2">Formule</p>
                <code className="text-sm font-mono text-brand-700">{calculator.formula}</code>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <section className="mb-10">
            <h2 className="text-2xl font-display font-semibold text-surface-900 mb-4">Introduction</h2>
            <div className="prose-fr">{intro}</div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-display font-semibold text-surface-900 mb-4">La formule</h2>
            <div className="prose-fr">{formula}</div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-display font-semibold text-surface-900 mb-4">Comment ça marche ?</h2>
            <div className="prose-fr">{howItWorks}</div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-display font-semibold text-surface-900 mb-4">Exemples pratiques</h2>
            <div className="prose-fr">{examples}</div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-display font-semibold text-surface-900 mb-6">Questions fréquentes</h2>
            <FAQSection items={faq} />
          </section>

          <RelatedCalculators calculators={relatedCalculators} />
        </div>
      </div>
    </div>
  );
}
