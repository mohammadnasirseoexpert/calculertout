import { Metadata } from "next";
import { getCalculatorBySlug, getRelatedCalculators } from "@/data/calculators";
import { CalculatorPageLayout } from "@/components/layout/CalculatorPageLayout";
import { EpargneCalculator } from "@/components/calculators/EpargneCalculator";

export const metadata: Metadata = {
  title: "Calculateur d'Épargne — Planifiez Votre Épargne",
  description:
    "Calculez combien épargner chaque mois pour atteindre votre objectif financier. Simulez votre Livret A, PEL, assurance-vie ou tout autre placement.",
  keywords: "calculateur épargne, objectif épargne, combien épargner, livret A calculateur, PEL simulateur",
};

const faq = [
  {
    question: "Quel est le meilleur placement d'épargne en France ?",
    answer:
      "Le Livret A (taux 3% en 2024, défiscalisé) est idéal pour l'épargne de précaution. Pour un horizon long terme, l'assurance-vie et le PEA offrent de meilleurs rendements potentiels avec des avantages fiscaux.",
  },
  {
    question: "Combien faut-il épargner par mois ?",
    answer:
      "La règle 50/30/20 recommande d'allouer 20% de ses revenus à l'épargne. Pour un salaire de 2 500 € nets, cela représente 500 €/mois. Ajustez selon votre situation et vos objectifs.",
  },
  {
    question: "Comment calculer le temps pour atteindre un objectif d'épargne ?",
    answer:
      "Avec notre calculateur, entrez votre objectif, votre capital de départ, le taux de votre placement et la durée souhaitée. Il calculera automatiquement le versement mensuel nécessaire.",
  },
  {
    question: "Quelle est la fiscalité de l'épargne en France ?",
    answer:
      "Le Livret A et le LDDS sont exonérés d'impôts. Les autres placements (compte épargne, assurance-vie après 8 ans avec abattement) sont soumis à la flat tax de 30% (PFU) ou au barème progressif.",
  },
  {
    question: "Comment automatiser son épargne ?",
    answer:
      "La technique la plus efficace est le virement automatique programmé le jour de la paie. Ce système d'épargne forcée évite les dépenses impulsives et garantit la régularité des versements.",
  },
];

export default function EpargnePage() {
  const calculator = getCalculatorBySlug("calculateur-epargne")!;
  const related = getRelatedCalculators("calculateur-epargne");

  return (
    <CalculatorPageLayout
      calculator={calculator}
      relatedCalculators={related}
      calculatorWidget={<EpargneCalculator />}
      intro={
        <div className="space-y-4">
          <p>
            Le <strong>calculateur d'épargne</strong> vous aide à planifier votre effort d'épargne mensuel
            pour atteindre un objectif financier précis. Que vous souhaitiez financer un voyage, constituer
            un apport immobilier ou préparer votre retraite, cet outil calcule exactement combien mettre
            de côté chaque mois.
          </p>
          <p>
            Il prend en compte votre capital de départ, le taux de rendement de votre placement et la
            durée jusqu'à votre objectif. Le calcul intègre la capitalisation mensuelle des intérêts.
          </p>
        </div>
      }
      formula={
        <div className="space-y-4">
          <p>La valeur future d'un plan d'épargne avec versements réguliers est :</p>
          <div className="bg-surface-50 border border-surface-200 rounded-xl p-5 font-mono text-sm">
            <p className="text-brand-700 font-medium">FV = PV × (1+r)ⁿ + PMT × [(1+r)ⁿ − 1] / r</p>
            <div className="mt-3 space-y-1.5 text-surface-600 text-xs">
              <p><strong>FV</strong> = valeur future (objectif)</p>
              <p><strong>PV</strong> = capital de départ (valeur actuelle)</p>
              <p><strong>r</strong> = taux mensuel = taux annuel / 12</p>
              <p><strong>n</strong> = nombre de mois</p>
              <p><strong>PMT</strong> = versement mensuel</p>
            </div>
          </div>
        </div>
      }
      howItWorks={
        <div className="space-y-4">
          <p>
            Notre calculateur résout l'équation dans le sens inverse : connaissant l'objectif (FV),
            le capital de départ (PV), le taux et la durée, il calcule le versement mensuel (PMT) nécessaire.
          </p>
          <p>
            La différence entre le total versé et le capital final représente les intérêts gagnés.
            Plus votre placement est rémunérateur et la durée longue, plus les intérêts réduisent
            l'effort mensuel nécessaire.
          </p>
        </div>
      }
      examples={
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Apport immobilier", objectif: "30 000 €", duree: "5 ans", taux: "3%", vers: "460 €/mois" },
              { title: "Épargne retraite", objectif: "100 000 €", duree: "20 ans", taux: "5%", vers: "240 €/mois" },
              { title: "Voyage de rêve", objectif: "10 000 €", duree: "2 ans", taux: "3%", vers: "406 €/mois" },
              { title: "Fonds d'urgence", objectif: "15 000 €", duree: "3 ans", taux: "3%", vers: "405 €/mois" },
            ].map((ex) => (
              <div key={ex.title} className="p-4 rounded-xl bg-surface-50 border border-surface-200">
                <p className="font-semibold text-surface-800 mb-2">{ex.title}</p>
                <div className="space-y-1 text-sm text-surface-600">
                  <p>Objectif : {ex.objectif}</p>
                  <p>Durée : {ex.duree} • Taux : {ex.taux}</p>
                  <p className="font-semibold text-brand-700 mt-2">→ {ex.vers}</p>
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
