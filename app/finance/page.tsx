import { Metadata } from "next";
import { getCalculatorsByCategory } from "@/data/calculators";
import { CalculatorCard } from "@/components/ui/CalculatorCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Calculateurs Financiers Gratuits — Prêt, TVA, Épargne | CalculateurPro",
  description:
    "8 calculateurs financiers gratuits : prêt immobilier, TVA, intérêts composés, rendement, épargne, marge. Résultats instantanés en français.",
  keywords:
    "calculateur financier, calculateur prêt, calculateur TVA, calculateur épargne, calculateur rendement",
};

export default function FinancePage() {
  const calcs = getCalculatorsByCategory("finance");

  return (
    <div className="container-xl py-12">
      <Breadcrumb items={[{ label: "Finance", href: "/finance" }]} />

      <div className="mt-8 mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-2xl bg-brand-100 flex items-center justify-center text-3xl">
            💳
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-surface-900">
              Calculateurs Financiers
            </h1>
            <p className="text-surface-500 mt-1">{calcs.length} calculateurs disponibles</p>
          </div>
        </div>
        <p className="text-surface-600 max-w-2xl leading-relaxed">
          Nos calculateurs financiers vous aident à planifier vos prêts, optimiser vos
          investissements, calculer la TVA et prendre de meilleures décisions financières au quotidien.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {calcs.map((calc) => (
          <CalculatorCard key={calc.slug} calculator={calc} />
        ))}
      </div>

      <div className="mt-16 p-8 rounded-2xl bg-brand-50 border border-brand-100">
        <h2 className="text-xl font-display font-semibold text-surface-900 mb-4">
          À propos de nos calculateurs financiers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-surface-600 leading-relaxed">
          <p>
            Nos outils financiers utilisent les formules bancaires standards utilisées en France.
            Le calculateur de prêt applique la formule d'amortissement constant conforme aux
            pratiques des établissements de crédit français.
          </p>
          <p>
            Pour le calcul de la TVA, nous appliquons les taux français en vigueur : 20% (taux
            normal), 10% (taux intermédiaire), 5,5% (taux réduit) et 2,1% (taux super réduit).
            Tous les calculs sont à titre informatif.
          </p>
        </div>
      </div>
    </div>
  );
}
