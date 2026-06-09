import { Metadata } from "next";
import { getCalculatorBySlug, getRelatedCalculators } from "@/data/calculators";
import { CalculatorPageLayout } from "@/components/layout/CalculatorPageLayout";
import { ReductionCalculator } from "@/components/calculators/ReductionCalculator";

export const metadata: Metadata = {
  title: "Calculateur de Réduction — Prix Après Remise et Soldes",
  description:
    "Calculez instantanément le prix après réduction et votre économie. Parfait pour les soldes, les promotions et les codes promo.",
  keywords: "calculateur réduction, calcul remise, prix soldes, calculer promo, économie réduction",
};

const faq = [
  {
    question: "Comment calculer le prix après une réduction ?",
    answer:
      "Prix final = Prix original × (1 − réduction/100). Pour une remise de 30% sur 80 € : 80 × 0,70 = 56 €. L'économie est de 80 − 56 = 24 €.",
  },
  {
    question: "Comment calculer le taux de réduction entre deux prix ?",
    answer:
      "Taux de réduction = (Prix original − Prix final) / Prix original × 100. Si un article passe de 60 € à 45 € : (60 − 45) / 60 × 100 = 25% de réduction.",
  },
  {
    question: "Qu'est-ce que la réglementation sur les soldes en France ?",
    answer:
      "En France, les soldes sont réglementés par la loi : deux périodes légales (hiver et été), durée de 4 semaines chacune. Le prix de référence doit être le prix le plus bas pratiqué dans les 30 jours précédant les soldes.",
  },
  {
    question: "Comment cumuler plusieurs remises ?",
    answer:
      "Deux remises ne s'additionnent pas : 20% + 10% ≠ 30%. Le calcul est : Prix final = Prix × (1 − 0,20) × (1 − 0,10) = Prix × 0,80 × 0,90 = Prix × 0,72, soit une remise effective de 28%.",
  },
  {
    question: "Qu'est-ce qu'une remise sur le prix de référence ?",
    answer:
      "La directive Omnibus (2022) oblige les commerçants à afficher la réduction par rapport au prix le plus bas pratiqué au cours des 30 derniers jours. Cela vise à éviter les fausses promotions.",
  },
];

export default function ReductionPage() {
  const calculator = getCalculatorBySlug("calculateur-reduction")!;
  const related = getRelatedCalculators("calculateur-reduction");

  return (
    <CalculatorPageLayout
      calculator={calculator}
      relatedCalculators={related}
      calculatorWidget={<ReductionCalculator />}
      intro={
        <div className="space-y-4">
          <p>
            Le <strong>calculateur de réduction</strong> calcule instantanément le prix final après
            une remise et le montant économisé. Pratique pour comparer les promotions lors des soldes,
            évaluer les codes promo ou calculer une remise professionnelle.
          </p>
          <p>
            Avec nos boutons de réduction rapide (10%, 15%, 20%, 25%, 30%, 50%), vous pouvez simuler
            différents scénarios de promotion en un clic.
          </p>
        </div>
      }
      formula={
        <div className="space-y-4">
          <div className="bg-surface-50 border border-surface-200 rounded-xl p-5 font-mono text-sm">
            <p className="text-brand-700 font-medium">Prix final = Prix original × (1 − Réduction/100)</p>
            <p className="text-emerald-700 font-medium mt-2">Économie = Prix original × Réduction/100</p>
            <div className="mt-3 text-xs text-surface-500 font-sans">
              <p>Exemple : 80 € avec 25% de remise</p>
              <p>Prix final = 80 × 0,75 = 60 €</p>
              <p>Économie = 80 × 0,25 = 20 €</p>
            </div>
          </div>
        </div>
      }
      howItWorks={
        <div className="space-y-4">
          <p>
            Notre calculateur propose des boutons de réduction prédéfinis pour accélérer le calcul lors
            des périodes de soldes. Il calcule simultanément le prix final et l'économie réalisée.
          </p>
          <div className="overflow-x-auto rounded-xl border border-surface-200">
            <table className="w-full text-sm">
              <thead className="bg-surface-50">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-surface-700">Remise</th>
                  <th className="px-4 py-3 text-left font-medium text-surface-700">Coefficient</th>
                  <th className="px-4 py-3 text-left font-medium text-surface-700">Sur 100 €</th>
                  <th className="px-4 py-3 text-left font-medium text-surface-700">Sur 200 €</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-100">
                {[
                  ["10%", "× 0,90", "90 €", "180 €"],
                  ["20%", "× 0,80", "80 €", "160 €"],
                  ["30%", "× 0,70", "70 €", "140 €"],
                  ["50%", "× 0,50", "50 €", "100 €"],
                  ["70%", "× 0,30", "30 €", "60 €"],
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-surface-50">
                    <td className="px-4 py-3 font-semibold text-brand-700">{row[0]}</td>
                    <td className="px-4 py-3 font-mono text-surface-600">{row[1]}</td>
                    <td className="px-4 py-3">{row[2]}</td>
                    <td className="px-4 py-3">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      }
      examples={
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { scenario: "Soldes hiver", original: "120 €", remise: "40%", final: "72 €", eco: "48 €" },
              { scenario: "Code promo e-commerce", original: "89,90 €", remise: "15%", final: "76,42 €", eco: "13,49 €" },
              { scenario: "Remise fidélité", original: "250 €", remise: "10%", final: "225 €", eco: "25 €" },
              { scenario: "Black Friday", original: "499 €", remise: "30%", final: "349,30 €", eco: "149,70 €" },
            ].map((ex) => (
              <div key={ex.scenario} className="p-4 rounded-xl border border-surface-200 bg-surface-50">
                <p className="font-semibold text-surface-800 mb-2">{ex.scenario}</p>
                <div className="text-sm space-y-1">
                  <p className="text-surface-500">Prix original : {ex.original}</p>
                  <p className="text-surface-500">Remise : {ex.remise}</p>
                  <p className="font-semibold text-brand-700">Prix final : {ex.final}</p>
                  <p className="text-emerald-600 font-medium">Économie : {ex.eco}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
      faq={faq}
    />
  );
}
