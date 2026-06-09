import { Metadata } from "next";
import { getCalculatorBySlug, getRelatedCalculators } from "@/data/calculators";
import { CalculatorPageLayout } from "@/components/layout/CalculatorPageLayout";
import { RegleTroisCalculator } from "@/components/calculators/RegleTroisCalculator";

export const metadata: Metadata = {
  title: "Calculateur Règle de Trois — Proportionnalité Directe et Inverse",
  description:
    "Résolvez instantanément des problèmes de proportionnalité avec la règle de trois. Proportionnalité directe et inverse, avec étapes détaillées.",
  keywords: "règle de trois, proportionnalité, produit en croix, proportionnalité directe, inverse, calcul",
};

const faq = [
  {
    question: "Qu'est-ce que la règle de trois ?",
    answer:
      "La règle de trois permet de trouver une valeur inconnue dans une proportion. Si A est à B ce que C est à X, alors X = (B × C) / A. Elle s'applique dans toutes les situations de proportionnalité directe.",
  },
  {
    question: "Quelle est la différence entre proportionnalité directe et inverse ?",
    answer:
      "En directe, quand A augmente, B augmente proportionnellement. En inverse, quand A augmente, B diminue (ex : plus d'ouvriers = moins de jours de travail). La formule inverse : X = (A × B) / C.",
  },
  {
    question: "Comment utiliser la règle de trois pour convertir des unités ?",
    answer:
      "Exemple : 1 mile = 1.609 km. Combien font 5 miles ? Règle de trois : X = (5 × 1.609) / 1 = 8.045 km.",
  },
  {
    question: "La règle de trois s'applique-t-elle aux recettes de cuisine ?",
    answer:
      "Oui ! Pour adapter une recette de 4 à 6 personnes : si 4 personnes nécessitent 200g de farine, alors 6 personnes nécessitent (200 × 6) / 4 = 300g.",
  },
  {
    question: "Qu'est-ce que le produit en croix ?",
    answer:
      "Le produit en croix est une autre façon d'exprimer la règle de trois : dans a/b = c/x, on peut multiplier en croix : a × x = b × c, donc x = (b × c) / a.",
  },
];

export default function RegleTroisPage() {
  const calculator = getCalculatorBySlug("calculateur-regle-de-trois")!;
  const related = getRelatedCalculators("calculateur-regle-de-trois");

  return (
    <CalculatorPageLayout
      calculator={calculator}
      relatedCalculators={related}
      calculatorWidget={<RegleTroisCalculator />}
      intro={
        <div className="space-y-4">
          <p>
            Le <strong>calculateur règle de trois</strong> vous permet de résoudre
            instantanément des problèmes de proportionnalité. Adapter une recette, calculer
            un prix proportionnel, convertir des unités ou résoudre des exercices de maths :
            la règle de trois est l'outil fondamental de la proportionnalité.
          </p>
          <p>
            Notre calculateur gère aussi bien la{" "}
            <strong>proportionnalité directe</strong> (si A double, B double) que la{" "}
            <strong>proportionnalité inverse</strong> (si A double, B est divisé par deux).
            Il affiche les étapes du raisonnement pour aider à comprendre la logique.
          </p>
        </div>
      }
      formula={
        <div className="space-y-3">
          <div className="bg-surface-50 border border-surface-200 rounded-xl p-4 font-mono text-sm">
            <p className="text-brand-700 font-medium mb-1">Proportionnalité directe</p>
            <p className="text-surface-600 text-xs">Si A → B, alors C → X</p>
            <p className="text-surface-600 text-xs font-bold mt-1">X = (B × C) / A</p>
            <p className="text-surface-400 text-xs mt-2">Ex : 3 kg → 9€, 5 kg → (9×5)/3 = 15€</p>
          </div>
          <div className="bg-surface-50 border border-surface-200 rounded-xl p-4 font-mono text-sm">
            <p className="text-brand-700 font-medium mb-1">Proportionnalité inverse</p>
            <p className="text-surface-600 text-xs font-bold">X = (A × B) / C</p>
            <p className="text-surface-400 text-xs mt-2">Ex : 2 ouvriers, 6 jours → 4 ouvriers : (2×6)/4 = 3 jours</p>
          </div>
        </div>
      }
      howItWorks={
        <div className="space-y-4">
          <ol className="space-y-4">
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
              <p>Entrez les <strong>trois valeurs connues</strong> de la proportion (A, B et C).</p>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
              <p>Choisissez si la proportionnalité est <strong>directe ou inverse</strong>.</p>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
              <p>Le calculateur affiche la <strong>valeur X</strong> et les étapes de calcul.</p>
            </li>
          </ol>
        </div>
      }
      examples={
        <div className="overflow-x-auto rounded-xl border border-surface-200">
          <table className="w-full text-sm">
            <thead className="bg-surface-50">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-surface-700">Problème</th>
                <th className="px-4 py-3 text-left font-medium text-surface-700">Type</th>
                <th className="px-4 py-3 text-left font-medium text-surface-700">X</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100">
              {[
                { pb: "3 kg coûtent 9€, 7 kg coûtent ?", type: "Directe", res: "21 €" },
                { pb: "60 km/h pendant 2.5h → ?", type: "Directe", res: "150 km" },
                { pb: "4 ouvriers, 12 jours → 6 ouvriers ?", type: "Inverse", res: "8 jours" },
                { pb: "Recette 4 pers → 300g, 6 pers → ?", type: "Directe", res: "450 g" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-surface-50">
                  <td className="px-4 py-3 font-medium text-xs">{row.pb}</td>
                  <td className="px-4 py-3 text-surface-600">{row.type}</td>
                  <td className="px-4 py-3 font-semibold text-brand-700">{row.res}</td>
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
