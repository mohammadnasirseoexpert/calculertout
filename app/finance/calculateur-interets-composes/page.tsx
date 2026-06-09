import { Metadata } from "next";
import { getCalculatorBySlug, getRelatedCalculators } from "@/data/calculators";
import { CalculatorPageLayout } from "@/components/layout/CalculatorPageLayout";
import { InteretsComposesCalculator } from "@/components/calculators/InteretsComposesCalculator";

export const metadata: Metadata = {
  title: "Calculateur d'Intérêts Composés — Faites Croître Votre Capital",
  description:
    "Calculez la puissance des intérêts composés. Simulez la croissance de votre épargne avec versements mensuels, taux et fréquence de capitalisation.",
  keywords: "intérêts composés, calculateur intérêts, épargne croissance, rendement composé, capitalisation",
};

const faq = [
  {
    question: "Qu'est-ce que les intérêts composés ?",
    answer:
      "Les intérêts composés signifient que les intérêts générés par votre capital s'ajoutent à ce capital et génèrent eux-mêmes des intérêts lors des périodes suivantes. C'est l'effet «boule de neige» qui accélère la croissance de votre épargne.",
  },
  {
    question: "Quelle est la différence avec les intérêts simples ?",
    answer:
      "Avec les intérêts simples, les intérêts sont toujours calculés sur le capital initial uniquement. Avec les intérêts composés, ils sont calculés sur le capital + les intérêts déjà accumulés, ce qui donne une croissance exponentielle.",
  },
  {
    question: "Quelle est la fréquence de capitalisation idéale ?",
    answer:
      "Plus la capitalisation est fréquente, plus le rendement effectif est élevé. La capitalisation mensuelle (12 fois/an) est la plus courante pour les livrets. La capitalisation quotidienne (365 fois/an) offre un léger avantage supplémentaire.",
  },
  {
    question: "Qu'est-ce que la règle des 72 ?",
    answer:
      "La règle des 72 est un raccourci mental : pour estimer en combien d'années votre capital doublera, divisez 72 par le taux annuel. À 6% par an, votre capital double en ≈12 ans (72/6=12).",
  },
  {
    question: "Quels placements bénéficient des intérêts composés en France ?",
    answer:
      "Le Livret A, le LDDS, le PEL, l'assurance-vie et le PEA bénéficient de capitalisation. Les actions et ETF offrent également un effet de capitalisation via la réinvestissement des dividendes.",
  },
];

export default function InteretsComposesPage() {
  const calculator = getCalculatorBySlug("calculateur-interets-composes")!;
  const related = getRelatedCalculators("calculateur-interets-composes");

  return (
    <CalculatorPageLayout
      calculator={calculator}
      relatedCalculators={related}
      calculatorWidget={<InteretsComposesCalculator />}
      intro={
        <div className="space-y-4">
          <p>
            Albert Einstein aurait dit que les <strong>intérêts composés</strong> sont la huitième merveille
            du monde. Que ce soit vrai ou non, le phénomène est réel et puissant : votre argent génère
            des intérêts, et ces intérêts génèrent à leur tour des intérêts.
          </p>
          <p>
            Ce calculateur vous permet de visualiser concrètement la croissance de votre épargne sur le
            long terme. Entrez un capital de départ, un taux de rendement et une durée pour voir la
            magie des intérêts composés en action.
          </p>
          <p>
            Vous pouvez également simuler des versements mensuels réguliers (comme un virement automatique
            vers un livret ou un PEA) pour voir comment des petits versements réguliers peuvent constituer
            un patrimoine significatif sur la durée.
          </p>
        </div>
      }
      formula={
        <div className="space-y-4">
          <p>La formule des intérêts composés avec versements périodiques est :</p>
          <div className="bg-surface-50 border border-surface-200 rounded-xl p-5 font-mono text-sm">
            <p className="text-brand-700 font-medium">A = P(1 + r/n)^(nt) + PMT × [(1 + r/n)^(nt) − 1] / (r/n)</p>
            <div className="mt-3 space-y-1.5 text-surface-600 text-xs">
              <p><strong>A</strong> = montant final</p>
              <p><strong>P</strong> = capital initial</p>
              <p><strong>r</strong> = taux annuel (en décimal)</p>
              <p><strong>n</strong> = fréquence de capitalisation (12 pour mensuelle)</p>
              <p><strong>t</strong> = durée en années</p>
              <p><strong>PMT</strong> = versement périodique</p>
            </div>
          </div>
        </div>
      }
      howItWorks={
        <div className="space-y-4">
          <p>
            L'effet des intérêts composés est particulièrement spectaculaire sur le long terme. Par exemple,
            1 000 € investis à 7% par an pendant 30 ans deviennent 7 612 € sans aucun versement supplémentaire.
            C'est 7,6 fois la mise initiale.
          </p>
          <p>
            Avec un versement mensuel de 100 € en plus, ce même scénario produit 122 000 € au bout de 30 ans.
            Les versements totaux ne représentent que 37 000 €, les 85 000 € restants sont de purs intérêts composés.
          </p>
          <p>
            La leçon principale : <strong>commencer tôt est la variable la plus importante</strong>.
            Investir 100 € à 25 ans vaut plus que 200 € à 35 ans, grâce aux années supplémentaires de capitalisation.
          </p>
        </div>
      }
      examples={
        <div className="space-y-4">
          <div className="overflow-x-auto rounded-xl border border-surface-200">
            <table className="w-full text-sm">
              <thead className="bg-surface-50">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-surface-700">Capital initial</th>
                  <th className="px-4 py-3 text-left font-medium text-surface-700">Taux</th>
                  <th className="px-4 py-3 text-left font-medium text-surface-700">Durée</th>
                  <th className="px-4 py-3 text-left font-medium text-surface-700">Capital final</th>
                  <th className="px-4 py-3 text-left font-medium text-surface-700">Intérêts</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-100">
                {[
                  { capital: "1 000 €", taux: "3%", duree: "10 ans", final: "1 344 €", interets: "344 €" },
                  { capital: "10 000 €", taux: "5%", duree: "20 ans", final: "26 533 €", interets: "16 533 €" },
                  { capital: "50 000 €", taux: "7%", duree: "30 ans", final: "380 613 €", interets: "330 613 €" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-surface-50">
                    <td className="px-4 py-3 font-medium">{row.capital}</td>
                    <td className="px-4 py-3 text-surface-600">{row.taux}</td>
                    <td className="px-4 py-3 text-surface-600">{row.duree}</td>
                    <td className="px-4 py-3 font-semibold text-brand-700">{row.final}</td>
                    <td className="px-4 py-3 text-emerald-600">{row.interets}</td>
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
