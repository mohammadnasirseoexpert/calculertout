import { Metadata } from "next";
import { getCalculatorsByCategory } from "@/data/calculators";
import { CalculatorCard } from "@/components/ui/CalculatorCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Calculateurs Mathématiques Gratuits — Pourcentage, Fraction | CalculateurPro",
  description:
    "6 calculateurs mathématiques gratuits : pourcentage, moyenne, fraction, règle de trois, conversion d'unités, équation. Calculs instantanés en français.",
  keywords:
    "calculateur pourcentage, calculateur fraction, calculateur moyenne, règle de trois, conversion unités",
};

export default function MathsPage() {
  const calcs = getCalculatorsByCategory("maths");

  return (
    <div className="container-xl py-12">
      <Breadcrumb items={[{ label: "Mathématiques", href: "/maths" }]} />

      <div className="mt-8 mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center text-3xl">
            📐
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-surface-900">
              Calculateurs Mathématiques
            </h1>
            <p className="text-surface-500 mt-1">{calcs.length} calculateurs disponibles</p>
          </div>
        </div>
        <p className="text-surface-600 max-w-2xl leading-relaxed">
          Des outils mathématiques simples et rapides pour les calculs du quotidien : pourcentages,
          fractions, moyennes, conversions et bien plus. Parfaits pour les élèves, étudiants et
          professionnels.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {calcs.map((calc) => (
          <CalculatorCard key={calc.slug} calculator={calc} />
        ))}
      </div>

      <div className="mt-16 p-8 rounded-2xl bg-violet-50 border border-violet-100">
        <h2 className="text-xl font-display font-semibold text-surface-900 mb-3">
          🎓 Usage pédagogique
        </h2>
        <p className="text-sm text-surface-600 leading-relaxed">
          Tous nos calculateurs mathématiques affichent les formules et les étapes de calcul détaillées.
          Ils sont conçus pour être pédagogiques et aider à comprendre le raisonnement mathématique,
          pas seulement à obtenir une réponse.
        </p>
      </div>
    </div>
  );
}
