import { Metadata } from "next";
import { getCalculatorBySlug, getRelatedCalculators } from "@/data/calculators";
import { CalculatorPageLayout } from "@/components/layout/CalculatorPageLayout";
import { EquationCalculator } from "@/components/calculators/EquationCalculator";

export const metadata: Metadata = {
  title: "Calculateur d'Équations — 1er et 2nd Degré avec Étapes Détaillées",
  description:
    "Résolvez des équations du 1er et 2nd degré avec les étapes complètes. Discriminant, racines réelles et complexes expliqués clairement.",
  keywords: "calculateur équation, équation premier degré, équation second degré, discriminant, racines équation",
};

const faq = [
  {
    question: "Comment résoudre une équation du premier degré (ax + b = 0) ?",
    answer:
      "Pour ax + b = 0, on isole x : x = −b/a. Par exemple, 2x + 6 = 0 → x = −6/2 = −3. Il faut a ≠ 0 pour qu'il y ait une solution unique.",
  },
  {
    question: "Comment calculer le discriminant d'une équation du second degré ?",
    answer:
      "Pour ax² + bx + c = 0, le discriminant Δ = b² − 4ac. Δ > 0 : deux racines réelles distinctes. Δ = 0 : une racine double. Δ < 0 : pas de racine réelle.",
  },
  {
    question: "Qu'est-ce que les racines d'une équation du second degré ?",
    answer:
      "Les racines sont les valeurs de x qui vérifient l'équation. Elles se calculent par : x = (−b ± √Δ) / (2a). Il peut y en avoir 0, 1 ou 2 selon le signe du discriminant.",
  },
  {
    question: "Comment reconnaître le type d'équation ?",
    answer:
      "Premier degré : le degré maximal de x est 1 (forme ax + b = 0). Second degré : le degré maximal est 2 (forme ax² + bx + c = 0, avec a ≠ 0).",
  },
  {
    question: "À quoi servent les équations du second degré en pratique ?",
    answer:
      "Elles apparaissent partout : trajectoire d'un projectile (physique), optimisation de surfaces (architecture), calculs financiers complexes, modélisation biologique et économique.",
  },
];

export default function EquationPage() {
  const calculator = getCalculatorBySlug("calculateur-equation-simple")!;
  const related = getRelatedCalculators("calculateur-equation-simple");

  return (
    <CalculatorPageLayout
      calculator={calculator}
      relatedCalculators={related}
      calculatorWidget={<EquationCalculator />}
      intro={
        <div className="space-y-4">
          <p>
            Le <strong>calculateur d'équations</strong> résout les équations algébriques du
            premier et du second degré en affichant toutes les étapes intermédiaires. C'est
            un outil pédagogique idéal pour lycéens, étudiants et toute personne souhaitant
            comprendre la résolution d'équations.
          </p>
          <p>
            Pour les équations du second degré (ax² + bx + c = 0), il calcule le discriminant
            Δ = b² − 4ac et détermine le nombre et la nature des solutions — réelles ou
            complexes. Chaque étape est expliquée clairement.
          </p>
        </div>
      }
      formula={
        <div className="space-y-3">
          <div className="bg-surface-50 border border-surface-200 rounded-xl p-4 font-mono text-sm">
            <p className="text-brand-700 font-medium mb-1">Équation 1er degré : ax + b = 0</p>
            <p className="text-surface-600 text-xs">x = −b / a  (si a ≠ 0)</p>
          </div>
          <div className="bg-surface-50 border border-surface-200 rounded-xl p-4 font-mono text-sm">
            <p className="text-brand-700 font-medium mb-1">Équation 2nd degré : ax² + bx + c = 0</p>
            <p className="text-surface-600 text-xs">Δ = b² − 4ac</p>
            <p className="text-surface-600 text-xs">x = (−b ± √Δ) / (2a)</p>
            <div className="mt-2 pt-2 border-t border-surface-200 space-y-0.5 text-surface-500 text-xs">
              <p>Δ &gt; 0 → 2 racines réelles</p>
              <p>Δ = 0 → 1 racine double : x = −b/(2a)</p>
              <p>Δ &lt; 0 → pas de racine réelle</p>
            </div>
          </div>
        </div>
      }
      howItWorks={
        <div className="space-y-4">
          <ol className="space-y-4">
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
              <p>Choisissez le <strong>type d'équation</strong> : 1er ou 2nd degré.</p>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
              <p>Entrez les <strong>coefficients</strong> a, b (et c pour le second degré).</p>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
              <p>Obtenez la <strong>solution complète</strong> avec toutes les étapes de résolution.</p>
            </li>
          </ol>
        </div>
      }
      examples={
        <div className="overflow-x-auto rounded-xl border border-surface-200">
          <table className="w-full text-sm">
            <thead className="bg-surface-50">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-surface-700">Équation</th>
                <th className="px-4 py-3 text-left font-medium text-surface-700">Δ</th>
                <th className="px-4 py-3 text-left font-medium text-surface-700">Solutions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100">
              {[
                { eq: "2x − 8 = 0", delta: "—", sol: "x = 4" },
                { eq: "x² − 5x + 6 = 0", delta: "Δ = 1 > 0", sol: "x₁ = 3, x₂ = 2" },
                { eq: "x² − 4x + 4 = 0", delta: "Δ = 0", sol: "x = 2 (double)" },
                { eq: "x² + x + 1 = 0", delta: "Δ = −3 < 0", sol: "Pas de racine réelle" },
                { eq: "2x² − 3x − 2 = 0", delta: "Δ = 25 > 0", sol: "x₁ = 2, x₂ = −0.5" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-surface-50">
                  <td className="px-4 py-3 font-medium font-mono text-xs">{row.eq}</td>
                  <td className="px-4 py-3 text-surface-600 text-xs">{row.delta}</td>
                  <td className="px-4 py-3 font-semibold text-brand-700 text-xs">{row.sol}</td>
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
