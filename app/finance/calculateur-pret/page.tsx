import { Metadata } from "next";
import { getCalculatorBySlug, getRelatedCalculators } from "@/data/calculators";
import { CalculatorPageLayout } from "@/components/layout/CalculatorPageLayout";
import { PretCalculator } from "@/components/calculators/PretCalculator";

export const metadata: Metadata = {
  title: "Calculateur de Prêt — Mensualité et Coût Total",
  description:
    "Calculez vos mensualités de prêt, le coût total et le tableau d'amortissement. Formule bancaire française. Prêt personnel, auto ou immobilier.",
  keywords: "calculateur prêt, mensualité prêt, tableau amortissement, coût crédit, taux intérêt",
};

const faq = [
  {
    question: "Comment calculer la mensualité d'un prêt ?",
    answer:
      "La mensualité se calcule avec la formule M = P × [r(1+r)^n] / [(1+r)^n - 1], où P est le capital emprunté, r le taux mensuel (taux annuel / 12) et n le nombre de mensualités.",
  },
  {
    question: "Quelle est la différence entre taux nominal et taux effectif global (TEG) ?",
    answer:
      "Le taux nominal est le taux d'intérêt pur de votre prêt. Le TEG (ou TAEG) inclut tous les frais : intérêts, frais de dossier, assurance emprunteur. Le TAEG permet de comparer les offres de prêt.",
  },
  {
    question: "Qu'est-ce qu'un tableau d'amortissement ?",
    answer:
      "C'est un tableau qui détaille pour chaque mensualité la part d'intérêts remboursés, la part de capital remboursé et le capital restant dû. Au début du prêt, les intérêts sont plus importants ; à la fin, c'est l'inverse.",
  },
  {
    question: "Puis-je rembourser mon prêt par anticipation ?",
    answer:
      "Oui, en France vous pouvez rembourser votre prêt par anticipation. Des indemnités de remboursement anticipé (IRA) peuvent s'appliquer, limitées par la loi à 6 mois d'intérêts sur le capital remboursé.",
  },
  {
    question: "Quelle durée de prêt choisir ?",
    answer:
      "Une durée plus longue réduit les mensualités mais augmente le coût total. Une durée plus courte augmente les mensualités mais vous payez moins d'intérêts. Le bon équilibre dépend de votre capacité de remboursement mensuelle.",
  },
];

export default function PretPage() {
  const calculator = getCalculatorBySlug("calculateur-pret")!;
  const related = getRelatedCalculators("calculateur-pret");

  return (
    <CalculatorPageLayout
      calculator={calculator}
      relatedCalculators={related}
      calculatorWidget={<PretCalculator />}
      intro={
        <div className="space-y-4">
          <p>
            Le <strong>calculateur de prêt</strong> vous permet de déterminer instantanément le montant de vos mensualités,
            le coût total de votre emprunt et la part d'intérêts que vous rembourserez. Que vous souhaitiez contracter
            un prêt personnel, un crédit auto ou financer un projet, cet outil vous donne une vision claire de votre
            engagement financier.
          </p>
          <p>
            En France, les prêts à la consommation sont encadrés par la loi Lagarde et la loi Hamon. Les prêts
            immobiliers sont soumis à la réglementation Bâle III et aux recommandations du HCSF (Haut Conseil de
            Stabilité Financière) qui plafonne le taux d'endettement à 35% des revenus nets.
          </p>
          <p>
            Notre simulateur utilise la formule d'amortissement constant (ou à annuités constantes), la méthode
            la plus utilisée par les banques françaises. Chaque mois, vous remboursez la même somme totale,
            mais la proportion intérêts/capital évolue au fil du temps.
          </p>
        </div>
      }
      formula={
        <div className="space-y-4">
          <p>La formule de calcul de la mensualité est :</p>
          <div className="bg-surface-50 border border-surface-200 rounded-xl p-5 font-mono text-sm">
            <p className="text-brand-700 font-medium">M = P × [r(1+r)ⁿ] / [(1+r)ⁿ - 1]</p>
            <div className="mt-3 space-y-1.5 text-surface-600 text-xs">
              <p><strong>M</strong> = mensualité</p>
              <p><strong>P</strong> = capital emprunté (principal)</p>
              <p><strong>r</strong> = taux mensuel = taux annuel / 12</p>
              <p><strong>n</strong> = nombre total de mensualités</p>
            </div>
          </div>
          <p>
            Le coût total du crédit est simplement : <strong>Coût total = M × n</strong>.
            La part des intérêts est : <strong>Intérêts = Coût total - Capital</strong>.
          </p>
        </div>
      }
      howItWorks={
        <div className="space-y-4">
          <ol className="space-y-4">
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
              <p>Entrez le <strong>montant du prêt</strong> que vous souhaitez emprunter.</p>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
              <p>Renseignez le <strong>taux d'intérêt annuel</strong> proposé par votre banque (taux nominal hors assurance).</p>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
              <p>Choisissez la <strong>durée de remboursement</strong> en mois.</p>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</span>
              <p>Le calculateur affiche instantanément votre <strong>mensualité, le coût total</strong> et le <strong>montant total des intérêts</strong>.</p>
            </li>
          </ol>
        </div>
      }
      examples={
        <div className="space-y-4">
          <div className="overflow-x-auto rounded-xl border border-surface-200">
            <table className="w-full text-sm">
              <thead className="bg-surface-50">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-surface-700">Montant</th>
                  <th className="px-4 py-3 text-left font-medium text-surface-700">Taux</th>
                  <th className="px-4 py-3 text-left font-medium text-surface-700">Durée</th>
                  <th className="px-4 py-3 text-left font-medium text-surface-700">Mensualité</th>
                  <th className="px-4 py-3 text-left font-medium text-surface-700">Intérêts</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-100">
                {[
                  { montant: "10 000 €", taux: "5%", duree: "48 mois", mensualite: "230,29 €", interets: "1 053,92 €" },
                  { montant: "50 000 €", taux: "4%", duree: "84 mois", mensualite: "672,52 €", interets: "6 491,68 €" },
                  { montant: "200 000 €", taux: "3,5%", duree: "240 mois", mensualite: "1 159,97 €", interets: "78 392,80 €" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-surface-50">
                    <td className="px-4 py-3 font-medium">{row.montant}</td>
                    <td className="px-4 py-3 text-surface-600">{row.taux}</td>
                    <td className="px-4 py-3 text-surface-600">{row.duree}</td>
                    <td className="px-4 py-3 font-semibold text-brand-700">{row.mensualite}</td>
                    <td className="px-4 py-3 text-surface-600">{row.interets}</td>
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
