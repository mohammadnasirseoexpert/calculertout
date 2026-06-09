import { Metadata } from "next";
import { getCalculatorBySlug, getRelatedCalculators } from "@/data/calculators";
import { CalculatorPageLayout } from "@/components/layout/CalculatorPageLayout";
import { RendementCalculator } from "@/components/calculators/RendementCalculator";

export const metadata: Metadata = {
  title: "Calculateur de Rendement Investissement (ROI)",
  description:
    "Calculez le retour sur investissement (ROI) de vos placements. Analysez la performance de vos actions, immobilier, ETF et autres investissements.",
  keywords: "calculateur ROI, retour investissement, rendement placement, ROI calculateur, performance investissement",
};

const faq = [
  {
    question: "Comment calculer le ROI d'un investissement ?",
    answer:
      "Le ROI (Return on Investment) se calcule ainsi : ROI = (Valeur finale − Investissement initial) / Investissement initial × 100. Un ROI positif indique un gain, un ROI négatif une perte.",
  },
  {
    question: "Quelle est la différence entre ROI et rentabilité annualisée ?",
    answer:
      "Le ROI mesure le gain total sur toute la durée. La rentabilité annualisée (CAGR) ramène ce gain à une base annuelle, permettant de comparer des investissements de durées différentes.",
  },
  {
    question: "Qu'est-ce qu'un bon ROI ?",
    answer:
      "Cela dépend du type d'investissement. En bourse, un rendement annuel de 7-10% est historiquement considéré comme bon. En immobilier locatif, 5-8% brut est courant en France. Comparez toujours au risque pris.",
  },
  {
    question: "Faut-il tenir compte de l'inflation dans le calcul du ROI ?",
    answer:
      "Oui, le ROI réel = ROI nominal − taux d'inflation. Si votre placement rapporte 4% et que l'inflation est de 3%, votre gain réel de pouvoir d'achat n'est que de 1%.",
  },
  {
    question: "Comment comparer des investissements de durées différentes ?",
    answer:
      "Utilisez le CAGR (Compound Annual Growth Rate) ou taux de croissance annuel composé. Notre calculateur l'affiche automatiquement, ce qui permet une comparaison équitable.",
  },
];

export default function RendementPage() {
  const calculator = getCalculatorBySlug("calculateur-rendement-investissement")!;
  const related = getRelatedCalculators("calculateur-rendement-investissement");

  return (
    <CalculatorPageLayout
      calculator={calculator}
      relatedCalculators={related}
      calculatorWidget={<RendementCalculator />}
      intro={
        <div className="space-y-4">
          <p>
            Le <strong>calculateur de rendement</strong> mesure la performance de vos investissements
            en calculant le ROI (Return on Investment), le gain net et le taux de rendement annualisé (CAGR).
          </p>
          <p>
            Que vous investissiez en bourse, en immobilier, dans une startup ou tout autre actif,
            cet outil vous donne une vision claire de la performance réelle de votre placement,
            indépendamment de sa durée.
          </p>
          <p>
            Le CAGR (taux de croissance annuel composé) est particulièrement utile pour comparer
            des investissements de durées différentes sur une base annuelle équivalente.
          </p>
        </div>
      }
      formula={
        <div className="space-y-4">
          <div className="bg-surface-50 border border-surface-200 rounded-xl p-5 font-mono text-sm space-y-3">
            <div>
              <p className="text-brand-700 font-medium">ROI = (Valeur finale − Investissement) / Investissement × 100</p>
            </div>
            <div className="border-t border-surface-200 pt-3">
              <p className="text-violet-700 font-medium">CAGR = (Valeur finale / Investissement)^(1/durée) − 1</p>
              <p className="text-xs text-surface-500 mt-1">Taux de croissance annuel composé</p>
            </div>
          </div>
        </div>
      }
      howItWorks={
        <div className="space-y-4">
          <p>
            Entrez simplement le montant investi au départ et la valeur finale obtenue, ainsi que
            la durée de l'investissement. Le calculateur affiche :
          </p>
          <ul className="space-y-2 text-surface-600">
            <li className="flex gap-2"><span>📊</span> Le <strong>ROI total</strong> en pourcentage</li>
            <li className="flex gap-2"><span>💰</span> Le <strong>gain net</strong> en euros</li>
            <li className="flex gap-2"><span>📈</span> Le <strong>rendement annuel (CAGR)</strong> pour comparer vos placements</li>
          </ul>
        </div>
      }
      examples={
        <div className="space-y-4">
          <div className="overflow-x-auto rounded-xl border border-surface-200">
            <table className="w-full text-sm">
              <thead className="bg-surface-50">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-surface-700">Investissement</th>
                  <th className="px-4 py-3 text-left font-medium text-surface-700">Valeur finale</th>
                  <th className="px-4 py-3 text-left font-medium text-surface-700">Durée</th>
                  <th className="px-4 py-3 text-left font-medium text-surface-700">ROI</th>
                  <th className="px-4 py-3 text-left font-medium text-surface-700">CAGR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-100">
                {[
                  { inv: "10 000 €", final: "15 000 €", duree: "5 ans", roi: "+50%", cagr: "+8,4%/an" },
                  { inv: "50 000 €", final: "80 000 €", duree: "8 ans", roi: "+60%", cagr: "+6,1%/an" },
                  { inv: "5 000 €", final: "4 200 €", duree: "2 ans", roi: "−16%", cagr: "−8,4%/an" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-surface-50">
                    <td className="px-4 py-3 font-medium">{row.inv}</td>
                    <td className="px-4 py-3">{row.final}</td>
                    <td className="px-4 py-3 text-surface-600">{row.duree}</td>
                    <td className={`px-4 py-3 font-semibold ${row.roi.startsWith("+") ? "text-emerald-600" : "text-red-600"}`}>{row.roi}</td>
                    <td className={`px-4 py-3 font-semibold ${row.cagr.startsWith("+") ? "text-brand-700" : "text-red-600"}`}>{row.cagr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      }
      faq={faq}
    />
  );
}
