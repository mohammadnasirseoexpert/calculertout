import { Metadata } from "next";
import { getCalculatorBySlug, getRelatedCalculators } from "@/data/calculators";
import { CalculatorPageLayout } from "@/components/layout/CalculatorPageLayout";
import { HypothequeCalculator } from "@/components/calculators/HypothequeCalculator";

export const metadata: Metadata = {
  title: "Calculateur Hypothécaire — Simulateur Prêt Immobilier",
  description:
    "Simulez votre prêt immobilier en France. Calculez vos mensualités, votre taux d'endettement et vérifiez votre conformité aux règles HCSF.",
  keywords: "calculateur hypothécaire, simulateur prêt immobilier, mensualité hypothèque, taux endettement HCSF",
};

const faq = [
  {
    question: "Qu'est-ce qu'un prêt hypothécaire ?",
    answer:
      "Un prêt hypothécaire est un crédit immobilier garanti par une hypothèque sur le bien acheté. En cas de défaut de paiement, la banque peut saisir et vendre le bien pour récupérer ses fonds.",
  },
  {
    question: "Quel est le taux d'endettement maximum en France ?",
    answer:
      "Depuis 2022, le HCSF (Haut Conseil de Stabilité Financière) impose un taux d'endettement maximum de 35% des revenus nets, assurance emprunteur incluse. Quelques dérogations sont possibles pour les primo-accédants.",
  },
  {
    question: "Quel apport personnel est recommandé pour un achat immobilier ?",
    answer:
      "Les banques recommandent généralement un apport de 10 à 20% du prix du bien. Ce montant couvre idéalement les frais de notaire (7–8% dans l'ancien, 2–3% dans le neuf) et renforce votre dossier.",
  },
  {
    question: "Quelle est la durée maximale d'un prêt immobilier en France ?",
    answer:
      "Le HCSF limite les prêts immobiliers à 25 ans maximum, avec une exception à 27 ans pour les achats en VEFA (construction) ou travaux importants.",
  },
  {
    question: "Faut-il prendre une assurance emprunteur ?",
    answer:
      "L'assurance emprunteur est obligatoire pour obtenir un prêt immobilier. Depuis la loi Lemoine (2022), vous pouvez changer d'assurance emprunteur à tout moment sans frais.",
  },
];

export default function HypothecairePage() {
  const calculator = getCalculatorBySlug("calculateur-hypothecaire")!;
  const related = getRelatedCalculators("calculateur-hypothecaire");

  return (
    <CalculatorPageLayout
      calculator={calculator}
      relatedCalculators={related}
      calculatorWidget={<HypothequeCalculator />}
      intro={
        <div className="space-y-4">
          <p>
            Le <strong>calculateur hypothécaire</strong> vous permet de simuler votre prêt immobilier en quelques
            secondes. Il calcule vos mensualités, vérifie votre taux d'endettement selon les règles du HCSF et
            affiche le coût total de votre crédit, intérêts compris.
          </p>
          <p>
            En France, l'achat immobilier est l'un des engagements financiers les plus importants d'une vie.
            Un prêt immobilier moyen représente 20 à 25 ans de remboursements. Il est donc crucial de bien
            simuler son financement avant de signer le moindre compromis de vente.
          </p>
          <p>
            Notre simulateur intègre les spécificités françaises : taux HCSF à 35%, durées maximales
            réglementaires, et calcul du montant empruntable en soustrayant votre apport personnel du
            prix d'achat.
          </p>
        </div>
      }
      formula={
        <div className="space-y-4">
          <p>
            La mensualité d'un prêt immobilier est calculée avec la formule d'annuités constantes :
          </p>
          <div className="bg-surface-50 border border-surface-200 rounded-xl p-5 font-mono text-sm">
            <p className="text-brand-700 font-medium">M = P × [r(1+r)ⁿ] / [(1+r)ⁿ - 1]</p>
            <div className="mt-3 space-y-1.5 text-surface-600 text-xs">
              <p><strong>M</strong> = mensualité</p>
              <p><strong>P</strong> = montant emprunté (prix − apport)</p>
              <p><strong>r</strong> = taux mensuel = taux annuel / 12</p>
              <p><strong>n</strong> = nombre de mensualités (années × 12)</p>
            </div>
          </div>
          <p>
            Le <strong>taux d'endettement</strong> est calculé ainsi :{" "}
            <code className="bg-surface-100 px-2 py-0.5 rounded">Taux = Mensualité / Revenus nets × 100</code>
          </p>
        </div>
      }
      howItWorks={
        <div className="space-y-4">
          <ol className="space-y-4">
            {[
              "Entrez le <strong>prix du bien immobilier</strong> que vous souhaitez acquérir.",
              "Indiquez votre <strong>apport personnel</strong>. Le montant emprunté sera calculé automatiquement.",
              "Renseignez le <strong>taux d'intérêt annuel</strong> proposé par votre banque (hors assurance).",
              "Choisissez la <strong>durée du prêt</strong> souhaitée.",
              "Optionnellement, entrez vos <strong>revenus nets mensuels</strong> pour calculer votre taux d'endettement.",
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p dangerouslySetInnerHTML={{ __html: step }} />
              </li>
            ))}
          </ol>
        </div>
      }
      examples={
        <div className="space-y-4">
          <p>Exemples de simulations pour un achat immobilier en France :</p>
          <div className="overflow-x-auto rounded-xl border border-surface-200">
            <table className="w-full text-sm">
              <thead className="bg-surface-50">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-surface-700">Prix du bien</th>
                  <th className="px-4 py-3 text-left font-medium text-surface-700">Apport</th>
                  <th className="px-4 py-3 text-left font-medium text-surface-700">Taux</th>
                  <th className="px-4 py-3 text-left font-medium text-surface-700">Durée</th>
                  <th className="px-4 py-3 text-left font-medium text-surface-700">Mensualité</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-100">
                {[
                  { prix: "250 000 €", apport: "50 000 €", taux: "3,8%", duree: "20 ans", mens: "1 206 €" },
                  { prix: "350 000 €", apport: "70 000 €", taux: "3,5%", duree: "25 ans", mens: "1 398 €" },
                  { prix: "500 000 €", apport: "150 000 €", taux: "4,0%", duree: "20 ans", mens: "2 121 €" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-surface-50">
                    <td className="px-4 py-3 font-medium">{row.prix}</td>
                    <td className="px-4 py-3 text-surface-600">{row.apport}</td>
                    <td className="px-4 py-3 text-surface-600">{row.taux}</td>
                    <td className="px-4 py-3 text-surface-600">{row.duree}</td>
                    <td className="px-4 py-3 font-semibold text-brand-700">{row.mens}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-surface-500">
            Ces chiffres sont indicatifs. Les taux réels varient selon votre profil, la banque et les conditions de marché.
          </p>
        </div>
      }
      faq={faq}
    />
  );
}
