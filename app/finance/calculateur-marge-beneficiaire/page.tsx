import { Metadata } from "next";
import { getCalculatorBySlug, getRelatedCalculators } from "@/data/calculators";
import { CalculatorPageLayout } from "@/components/layout/CalculatorPageLayout";
import { MargeCalculator } from "@/components/calculators/MargeCalculator";

export const metadata: Metadata = {
  title: "Calculateur de Marge Bénéficiaire — Optimisez Vos Prix",
  description:
    "Calculez votre marge bénéficiaire brute et nette ainsi que le markup. Outil indispensable pour les entrepreneurs, commerçants et e-commerçants.",
  keywords: "calculateur marge, marge bénéficiaire, markup, prix de vente, calcul marge commerciale",
};

const faq = [
  {
    question: "Quelle est la différence entre marge et markup ?",
    answer:
      "La marge est calculée par rapport au prix de vente : Marge = (PV − Coût) / PV × 100. Le markup est calculé par rapport au coût : Markup = (PV − Coût) / Coût × 100. Une marge de 20% correspond à un markup de 25%.",
  },
  {
    question: "Qu'est-ce qu'une bonne marge bénéficiaire ?",
    answer:
      "Cela varie selon le secteur. Le commerce de détail vise 20-30% de marge brute. Les logiciels SaaS peuvent atteindre 70-80%. La restauration tourne autour de 60-70% sur les aliments mais 20-30% net après frais.",
  },
  {
    question: "Comment calculer le prix de vente à partir d'un objectif de marge ?",
    answer:
      "Prix de vente = Coût / (1 − Marge/100). Par exemple, pour un coût de 50 € avec une marge cible de 40% : PV = 50 / (1 − 0,40) = 50 / 0,60 = 83,33 €.",
  },
  {
    question: "Quelle est la différence entre marge brute et marge nette ?",
    answer:
      "La marge brute ne tient compte que du coût des marchandises ou de production. La marge nette déduit tous les frais opérationnels (loyer, salaires, frais généraux, impôts). La marge nette reflète la rentabilité réelle.",
  },
  {
    question: "Comment augmenter sa marge bénéficiaire ?",
    answer:
      "Deux leviers : augmenter les prix (si la demande le permet) ou réduire les coûts (négociation fournisseurs, optimisation des processus). L'analyse de la marge par produit permet d'identifier les plus rentables.",
  },
];

export default function MargePage() {
  const calculator = getCalculatorBySlug("calculateur-marge-beneficiaire")!;
  const related = getRelatedCalculators("calculateur-marge-beneficiaire");

  return (
    <CalculatorPageLayout
      calculator={calculator}
      relatedCalculators={related}
      calculatorWidget={<MargeCalculator />}
      intro={
        <div className="space-y-4">
          <p>
            Le <strong>calculateur de marge bénéficiaire</strong> est un outil essentiel pour tout
            entrepreneur, commerçant ou gestionnaire. Il calcule instantanément la marge brute,
            le markup et le bénéfice à partir du coût de revient et du prix de vente.
          </p>
          <p>
            Comprendre et maîtriser sa marge commerciale est fondamental pour la santé financière
            d'une entreprise. Une marge insuffisante peut mener à la faillite même avec un fort
            volume de ventes.
          </p>
        </div>
      }
      formula={
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-surface-50 border border-surface-200 rounded-xl p-4 font-mono text-sm">
              <p className="text-xs text-surface-500 mb-2 font-sans uppercase tracking-wider">Marge</p>
              <p className="text-brand-700 font-medium text-xs">Marge = (PV − Coût) / PV × 100</p>
            </div>
            <div className="bg-surface-50 border border-surface-200 rounded-xl p-4 font-mono text-sm">
              <p className="text-xs text-surface-500 mb-2 font-sans uppercase tracking-wider">Markup</p>
              <p className="text-violet-700 font-medium text-xs">Markup = (PV − Coût) / Coût × 100</p>
            </div>
          </div>
          <div className="bg-surface-50 border border-surface-200 rounded-xl p-4 font-mono text-sm">
            <p className="text-xs text-surface-500 mb-2 font-sans uppercase tracking-wider">Prix de vente cible</p>
            <p className="text-emerald-700 font-medium text-xs">PV = Coût / (1 − Marge/100)</p>
          </div>
        </div>
      }
      howItWorks={
        <div className="space-y-4">
          <p>La relation entre marge et markup peut prêter à confusion. Voici un tableau récapitulatif :</p>
          <div className="overflow-x-auto rounded-xl border border-surface-200">
            <table className="w-full text-sm">
              <thead className="bg-surface-50">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">Marge (%)</th>
                  <th className="px-4 py-3 text-left font-medium">Markup équivalent (%)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-100">
                {[
                  ["10%", "11,1%"], ["20%", "25%"], ["25%", "33,3%"],
                  ["30%", "42,9%"], ["40%", "66,7%"], ["50%", "100%"],
                ].map(([marge, markup], i) => (
                  <tr key={i} className="hover:bg-surface-50">
                    <td className="px-4 py-3 font-semibold text-brand-700">{marge}</td>
                    <td className="px-4 py-3 text-surface-600">{markup}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      }
      examples={
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {[
              { produit: "T-shirt coûtant 15 € vendu 35 €", marge: "57,1%", markup: "133%", benefice: "20 €" },
              { produit: "Repas coûtant 4 € vendu 12 €", marge: "66,7%", markup: "200%", benefice: "8 €" },
              { produit: "Logiciel coûtant 10 € vendu 49 €", marge: "79,6%", markup: "390%", benefice: "39 €" },
            ].map((ex, i) => (
              <div key={i} className="p-4 rounded-xl border border-surface-200 grid grid-cols-4 gap-4 text-sm">
                <div className="col-span-4 sm:col-span-1">
                  <p className="text-xs text-surface-500 mb-0.5">Produit</p>
                  <p className="font-medium text-surface-800">{ex.produit}</p>
                </div>
                <div>
                  <p className="text-xs text-surface-500 mb-0.5">Marge</p>
                  <p className="font-semibold text-brand-700">{ex.marge}</p>
                </div>
                <div>
                  <p className="text-xs text-surface-500 mb-0.5">Markup</p>
                  <p className="font-semibold text-violet-700">{ex.markup}</p>
                </div>
                <div>
                  <p className="text-xs text-surface-500 mb-0.5">Bénéfice</p>
                  <p className="font-semibold text-emerald-700">{ex.benefice}</p>
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
