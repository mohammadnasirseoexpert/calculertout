import { Metadata } from "next";
import { getCalculatorBySlug, getRelatedCalculators } from "@/data/calculators";
import { CalculatorPageLayout } from "@/components/layout/CalculatorPageLayout";
import { PourcentageCalculator } from "@/components/calculators/PourcentageCalculator";

export const metadata: Metadata = {
  title: "Calculateur de Pourcentage — Calcul Rapide et Gratuit en Ligne",
  description:
    "Calculez des pourcentages instantanément : x% de y, variation en %, pourcentage d'augmentation ou de réduction. Simple et gratuit.",
  keywords: "calculateur pourcentage, calcul pourcentage, variation pourcentage, augmentation pourcentage, remise",
};

const faq = [
  {
    question: "Comment calculer un pourcentage d'une valeur ?",
    answer:
      "Pour calculer x% d'une valeur y, la formule est : résultat = y × (x / 100). Par exemple, 20% de 150 = 150 × 0.20 = 30.",
  },
  {
    question: "Comment calculer une variation en pourcentage ?",
    answer:
      "La variation entre une valeur initiale A et une valeur finale B : variation = ((B − A) / A) × 100. Un résultat positif = augmentation, négatif = diminution.",
  },
  {
    question: "Comment trouver quel pourcentage représente une valeur ?",
    answer:
      "Pour savoir quel pourcentage A représente dans B : pourcentage = (A / B) × 100. Par exemple, 45 sur 150 = (45 / 150) × 100 = 30%.",
  },
  {
    question: "Quelle est la différence entre un point de pourcentage et un pourcentage ?",
    answer:
      "Un point de pourcentage est une différence absolue. Passer de 10% à 15% est +5 points de pourcentage, mais +50% en termes relatifs. Cette distinction est cruciale en finance et statistiques.",
  },
  {
    question: "Comment calculer un prix après TVA ou remise ?",
    answer:
      "Augmentation (TVA) : Prix TTC = Prix HT × (1 + taux/100). Réduction : Prix final = Prix original × (1 − réduction/100).",
  },
];

export default function PourcentagePage() {
  const calculator = getCalculatorBySlug("calculateur-pourcentage")!;
  const related = getRelatedCalculators("calculateur-pourcentage");

  return (
    <CalculatorPageLayout
      calculator={calculator}
      relatedCalculators={related}
      calculatorWidget={<PourcentageCalculator />}
      intro={
        <div className="space-y-4">
          <p>
            Le <strong>calculateur de pourcentage</strong> vous permet de résoudre rapidement
            tous les problèmes de pourcentage courants : calculer x% d'un nombre, trouver la
            variation entre deux valeurs, ou déterminer quel pourcentage représente une valeur.
          </p>
          <p>
            Les pourcentages sont omniprésents au quotidien : calcul de TVA, remises
            commerciales, évolution des prix, statistiques, notes scolaires et taux d'intérêt.
            Notre calculateur propose plusieurs modes de calcul avec les étapes détaillées.
          </p>
        </div>
      }
      formula={
        <div className="space-y-3">
          <div className="bg-surface-50 border border-surface-200 rounded-xl p-4 font-mono text-sm">
            <p className="text-brand-700 font-medium mb-1">x% de y</p>
            <p className="text-surface-600 text-xs">Résultat = y × (x ÷ 100)</p>
            <p className="text-surface-400 text-xs mt-1">Ex : 20% de 150 = 30</p>
          </div>
          <div className="bg-surface-50 border border-surface-200 rounded-xl p-4 font-mono text-sm">
            <p className="text-brand-700 font-medium mb-1">Quel % représente A dans B ?</p>
            <p className="text-surface-600 text-xs">Pourcentage = (A ÷ B) × 100</p>
            <p className="text-surface-400 text-xs mt-1">Ex : 45 dans 150 = 30%</p>
          </div>
          <div className="bg-surface-50 border border-surface-200 rounded-xl p-4 font-mono text-sm">
            <p className="text-brand-700 font-medium mb-1">Variation de A vers B</p>
            <p className="text-surface-600 text-xs">Variation = ((B − A) ÷ A) × 100</p>
            <p className="text-surface-400 text-xs mt-1">Ex : 200 → 250 = +25%</p>
          </div>
        </div>
      }
      howItWorks={
        <div className="space-y-4">
          <ol className="space-y-4">
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
              <p>Choisissez le <strong>type de calcul</strong> parmi les 3 modes disponibles.</p>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
              <p>Entrez les <strong>valeurs demandées</strong> selon le mode sélectionné.</p>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
              <p>Le résultat s'affiche avec le <strong>détail du calcul</strong> pour vérification.</p>
            </li>
          </ol>
        </div>
      }
      examples={
        <div className="overflow-x-auto rounded-xl border border-surface-200">
          <table className="w-full text-sm">
            <thead className="bg-surface-50">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-surface-700">Question</th>
                <th className="px-4 py-3 text-left font-medium text-surface-700">Calcul</th>
                <th className="px-4 py-3 text-left font-medium text-surface-700">Résultat</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100">
              {[
                { q: "20% de 350 €", calc: "350 × 0.20", r: "70 €" },
                { q: "45 dans 180 ?", calc: "(45 ÷ 180) × 100", r: "25%" },
                { q: "80 € → 100 €", calc: "((100-80) ÷ 80) × 100", r: "+25%" },
                { q: "15% de remise sur 200 €", calc: "200 × 0.85", r: "170 €" },
                { q: "TVA 20% sur 500 € HT", calc: "500 × 1.20", r: "600 € TTC" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-surface-50">
                  <td className="px-4 py-3 font-medium text-xs">{row.q}</td>
                  <td className="px-4 py-3 text-surface-600 font-mono text-xs">{row.calc}</td>
                  <td className="px-4 py-3 font-semibold text-brand-700">{row.r}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }
      faq={faq}
    />
  );
}
