import { Metadata } from "next";
import { getCalculatorBySlug, getRelatedCalculators } from "@/data/calculators";
import { CalculatorPageLayout } from "@/components/layout/CalculatorPageLayout";
import { FractionCalculator } from "@/components/calculators/FractionCalculator";

export const metadata: Metadata = {
  title: "Calculateur de Fractions — Addition, Soustraction, Multiplication, Division",
  description:
    "Calculez des fractions facilement : addition, soustraction, multiplication et division avec simplification automatique et étapes détaillées.",
  keywords: "calculateur fractions, addition fractions, simplification fraction, PGCD, calcul fractions étapes",
};

const faq = [
  {
    question: "Comment additionner deux fractions de dénominateurs différents ?",
    answer:
      "Pour a/b + c/d, on met au même dénominateur : (a×d + c×b) / (b×d). Ensuite, on simplifie par le PGCD. Notre calculateur fait cette simplification automatiquement.",
  },
  {
    question: "Comment simplifier une fraction ?",
    answer:
      "On divise le numérateur et le dénominateur par leur PGCD. Par exemple, 6/8 : PGCD(6,8) = 2, donc 6/8 = 3/4.",
  },
  {
    question: "Comment multiplier des fractions ?",
    answer:
      "a/b × c/d = (a×c) / (b×d). On multiplie numérateurs entre eux et dénominateurs entre eux. Par exemple, 2/3 × 3/4 = 6/12 = 1/2.",
  },
  {
    question: "Comment diviser une fraction par une autre ?",
    answer:
      "a/b ÷ c/d = a/b × d/c = (a×d) / (b×c). On multiplie par l'inverse. Par exemple, 2/3 ÷ 1/4 = 2/3 × 4/1 = 8/3.",
  },
  {
    question: "Qu'est-ce que le PGCD ?",
    answer:
      "Le PGCD (Plus Grand Commun Diviseur) est le plus grand nombre qui divise deux entiers sans reste. Algorithme d'Euclide : PGCD(12,8) = PGCD(8,4) = PGCD(4,0) = 4.",
  },
];

export default function FractionPage() {
  const calculator = getCalculatorBySlug("calculateur-fraction")!;
  const related = getRelatedCalculators("calculateur-fraction");

  return (
    <CalculatorPageLayout
      calculator={calculator}
      relatedCalculators={related}
      calculatorWidget={<FractionCalculator />}
      intro={
        <div className="space-y-4">
          <p>
            Le <strong>calculateur de fractions</strong> vous permet d'effectuer toutes les
            opérations arithmétiques sur les fractions : addition, soustraction, multiplication
            et division. Le résultat est affiché sous forme de fraction simplifiée et en
            valeur décimale, avec le détail de chaque étape.
          </p>
          <p>
            Les fractions apparaissent dans de nombreux contextes : recettes de cuisine,
            bricolage (mesures en fractions de pouce), finances (parts de capital) et
            mathématiques scolaires. Notre calculateur est aussi un outil pédagogique qui
            montre toutes les étapes intermédiaires.
          </p>
        </div>
      }
      formula={
        <div className="space-y-3">
          <div className="bg-surface-50 border border-surface-200 rounded-xl p-4 font-mono text-sm">
            <p className="text-brand-700 font-medium mb-1">Addition / Soustraction</p>
            <p className="text-surface-600 text-xs">a/b ± c/d = (a×d ± c×b) / (b×d), puis ÷ PGCD</p>
          </div>
          <div className="bg-surface-50 border border-surface-200 rounded-xl p-4 font-mono text-sm">
            <p className="text-brand-700 font-medium mb-1">Multiplication</p>
            <p className="text-surface-600 text-xs">a/b × c/d = (a×c) / (b×d)</p>
          </div>
          <div className="bg-surface-50 border border-surface-200 rounded-xl p-4 font-mono text-sm">
            <p className="text-brand-700 font-medium mb-1">Division (multiplier par l'inverse)</p>
            <p className="text-surface-600 text-xs">a/b ÷ c/d = (a×d) / (b×c)</p>
          </div>
        </div>
      }
      howItWorks={
        <div className="space-y-4">
          <ol className="space-y-4">
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
              <p>Entrez le <strong>numérateur</strong> et le <strong>dénominateur</strong> de chaque fraction.</p>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
              <p>Sélectionnez l'<strong>opération</strong> : +, −, ×, ou ÷.</p>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
              <p>Le résultat s'affiche sous forme <strong>simplifiée</strong> avec toutes les étapes.</p>
            </li>
          </ol>
        </div>
      }
      examples={
        <div className="overflow-x-auto rounded-xl border border-surface-200">
          <table className="w-full text-sm">
            <thead className="bg-surface-50">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-surface-700">Opération</th>
                <th className="px-4 py-3 text-left font-medium text-surface-700">Étapes</th>
                <th className="px-4 py-3 text-left font-medium text-surface-700">Résultat</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100">
              {[
                { op: "1/2 + 1/3", steps: "(3+2)/6", res: "5/6 ≈ 0.833" },
                { op: "3/4 − 1/6", steps: "(18−4)/24", res: "7/12 ≈ 0.583" },
                { op: "2/3 × 3/4", steps: "6/12", res: "1/2 = 0.5" },
                { op: "5/6 ÷ 2/3", steps: "5/6 × 3/2", res: "5/4 = 1.25" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-surface-50">
                  <td className="px-4 py-3 font-medium font-mono">{row.op}</td>
                  <td className="px-4 py-3 text-surface-600 font-mono text-xs">{row.steps}</td>
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
