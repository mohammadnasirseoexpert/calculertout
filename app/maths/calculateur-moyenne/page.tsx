import { Metadata } from "next";
import { getCalculatorBySlug, getRelatedCalculators } from "@/data/calculators";
import { CalculatorPageLayout } from "@/components/layout/CalculatorPageLayout";
import { MoyenneCalculator } from "@/components/calculators/MoyenneCalculator";

export const metadata: Metadata = {
  title: "Calculateur de Moyenne — Arithmétique, Pondérée et Géométrique",
  description:
    "Calculez la moyenne arithmétique, pondérée ou géométrique de vos données. Parfait pour les notes scolaires, bac et statistiques.",
  keywords: "calculateur moyenne, moyenne arithmétique, moyenne pondérée, moyenne géométrique, notes bac",
};

const faq = [
  {
    question: "Quelle est la différence entre moyenne arithmétique et pondérée ?",
    answer:
      "La moyenne arithmétique donne le même poids à chaque valeur. La moyenne pondérée attribue un coefficient différent à chaque valeur. La formule pondérée = Σ(valeur × coefficient) / Σ(coefficients).",
  },
  {
    question: "Comment calculer sa moyenne générale au baccalauréat ?",
    answer:
      "Au bac français, chaque matière a un coefficient. La moyenne générale = Σ(note × coefficient) / Σ(coefficients). Certaines matières ont des coefficients très élevés (philosophie : 4 à 8 selon la filière).",
  },
  {
    question: "Quand utiliser la moyenne géométrique ?",
    answer:
      "La moyenne géométrique s'utilise pour des données multiplicatives, notamment les taux de croissance ou de rendement financier. Elle donne le taux annualisé réel d'un investissement sur plusieurs périodes.",
  },
  {
    question: "Quelle est la moyenne minimale pour valider un semestre universitaire ?",
    answer:
      "En France, la validation nécessite généralement une moyenne générale d'au moins 10/20. La compensation entre UE est possible mais varie selon les établissements.",
  },
  {
    question: "La médiane est-elle différente de la moyenne ?",
    answer:
      "Oui, la médiane est la valeur centrale qui sépare l'ensemble en deux parties égales. Elle est moins sensible aux valeurs extrêmes. Pour les salaires, la médiane est plus représentative que la moyenne.",
  },
];

export default function MoyennePage() {
  const calculator = getCalculatorBySlug("calculateur-moyenne")!;
  const related = getRelatedCalculators("calculateur-moyenne");

  return (
    <CalculatorPageLayout
      calculator={calculator}
      relatedCalculators={related}
      calculatorWidget={<MoyenneCalculator />}
      intro={
        <div className="space-y-4">
          <p>
            Le <strong>calculateur de moyenne</strong> vous permet de calculer rapidement la
            moyenne arithmétique, pondérée ou géométrique de n'importe quel ensemble de valeurs.
            Que ce soit pour vos notes scolaires, un bilan statistique ou des taux de rendement
            financier, cet outil s'adapte à tous vos besoins.
          </p>
          <p>
            La <strong>moyenne arithmétique</strong> est la plus courante. La{" "}
            <strong>moyenne pondérée</strong> est indispensable en contexte scolaire où certaines
            matières ont plus de poids. La <strong>moyenne géométrique</strong> est utilisée en
            finance et biologie pour des données multiplicatives.
          </p>
        </div>
      }
      formula={
        <div className="space-y-3">
          <div className="bg-surface-50 border border-surface-200 rounded-xl p-4 font-mono text-sm">
            <p className="text-brand-700 font-medium mb-1">Moyenne arithmétique</p>
            <p className="text-surface-600 text-xs">x̄ = (x₁ + x₂ + … + xₙ) / n</p>
          </div>
          <div className="bg-surface-50 border border-surface-200 rounded-xl p-4 font-mono text-sm">
            <p className="text-brand-700 font-medium mb-1">Moyenne pondérée</p>
            <p className="text-surface-600 text-xs">x̄w = Σ(xᵢ × wᵢ) / Σ(wᵢ)</p>
          </div>
          <div className="bg-surface-50 border border-surface-200 rounded-xl p-4 font-mono text-sm">
            <p className="text-brand-700 font-medium mb-1">Moyenne géométrique</p>
            <p className="text-surface-600 text-xs">G = (x₁ × x₂ × … × xₙ)^(1/n)</p>
          </div>
        </div>
      }
      howItWorks={
        <div className="space-y-4">
          <ol className="space-y-4">
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
              <p>Entrez vos <strong>valeurs séparées par des virgules</strong> (ex : 12, 15, 18, 9).</p>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
              <p>Pour la <strong>moyenne pondérée</strong>, ajoutez aussi les coefficients correspondants.</p>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
              <p>Choisissez le <strong>type de moyenne</strong> et obtenez le résultat instantanément.</p>
            </li>
          </ol>
        </div>
      }
      examples={
        <div className="overflow-x-auto rounded-xl border border-surface-200">
          <table className="w-full text-sm">
            <thead className="bg-surface-50">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-surface-700">Exemple</th>
                <th className="px-4 py-3 text-left font-medium text-surface-700">Valeurs</th>
                <th className="px-4 py-3 text-left font-medium text-surface-700">Résultat</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100">
              {[
                { ex: "Notes de maths", vals: "12, 14, 16, 10, 18", res: "14 / 20" },
                { ex: "Températures semaine", vals: "18, 20, 22, 19, 17, 21, 23", res: "20°C" },
                { ex: "Rendements annuels", vals: "+10%, +5%, −3%, +8%", res: "~4.9% / an" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-surface-50">
                  <td className="px-4 py-3 font-medium">{row.ex}</td>
                  <td className="px-4 py-3 text-surface-600 text-xs">{row.vals}</td>
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
