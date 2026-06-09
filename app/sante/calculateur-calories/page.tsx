import { Metadata } from "next";
import { getCalculatorBySlug, getRelatedCalculators } from "@/data/calculators";
import { CalculatorPageLayout } from "@/components/layout/CalculatorPageLayout";
import { CaloriesCalculator } from "@/components/calculators/CaloriesCalculator";

export const metadata: Metadata = {
  title: "Calculateur de Calories — Besoins Caloriques Journaliers (TDEE)",
  description:
    "Calculez vos besoins caloriques journaliers (TDEE) selon votre sexe, âge, poids, taille et niveau d'activité. Formule Mifflin-St Jeor.",
  keywords: "calculateur calories, TDEE, besoins caloriques, calculer calories journalières, métabolisme actif",
};

const faq = [
  {
    question: "Qu'est-ce que le TDEE ?",
    answer:
      "Le TDEE (Total Daily Energy Expenditure) est le nombre de calories que votre corps brûle en une journée, en tenant compte de votre métabolisme de base ET de votre activité physique.",
  },
  {
    question: "Combien de calories pour perdre du poids ?",
    answer:
      "Un déficit de 500 kcal/jour correspond à une perte d'environ 0,5 kg par semaine. Ne descendez pas en dessous de 1 200 kcal/jour pour une femme ou 1 500 kcal/jour pour un homme sans suivi médical.",
  },
  {
    question: "Combien de calories pour prendre du muscle ?",
    answer:
      "Un surplus de 300 à 500 kcal au-dessus de votre TDEE, combiné à un entraînement en résistance, favorise la prise de masse musculaire tout en limitant la prise de graisse.",
  },
  {
    question: "Quelle est la répartition idéale des macronutriments ?",
    answer:
      "Pour un adulte actif, une répartition courante est : 30% protéines, 40% glucides, 30% lipides. Les besoins varient selon l'objectif (prise de masse, sèche, maintien) et le mode de vie.",
  },
  {
    question: "Les calories des boissons comptent-elles ?",
    answer:
      "Oui, absolument. Alcool (7 kcal/g), jus de fruits, sodas, lattes : toutes ces boissons apportent des calories. L'eau, le café et le thé sans sucre sont neutres caloriquement.",
  },
];

export default function CaloriesPage() {
  const calculator = getCalculatorBySlug("calculateur-calories")!;
  const related = getRelatedCalculators("calculateur-calories");

  return (
    <CalculatorPageLayout
      calculator={calculator}
      relatedCalculators={related}
      calculatorWidget={<CaloriesCalculator />}
      intro={
        <div className="space-y-4">
          <p>
            Le <strong>calculateur de calories</strong> estime vos besoins énergétiques quotidiens totaux
            (TDEE) en combinant votre métabolisme de base (BMR) avec un facteur correspondant à votre
            niveau d'activité physique. Il utilise la formule de Mifflin-St Jeor, reconnue comme la plus
            précise pour la majorité de la population adulte.
          </p>
          <p>
            Connaître son TDEE est la première étape pour atteindre ses objectifs corporels : que ce soit
            perdre du poids (déficit calorique), maintenir son poids ou prendre de la masse musculaire
            (surplus calorique).
          </p>
          <p>
            Notre calculateur affiche également les calories recommandées pour une perte de poids modérée
            (déficit de 500 kcal) et une prise de masse (surplus de 500 kcal).
          </p>
        </div>
      }
      formula={
        <div className="space-y-4">
          <p>
            La formule de Mifflin-St Jeor (1990) est la référence actuelle recommandée par les
            professionnels de la nutrition :
          </p>
          <div className="bg-surface-50 border border-surface-200 rounded-xl p-5 font-mono text-sm space-y-3">
            <div>
              <p className="text-xs text-surface-500 font-sans mb-1">Homme</p>
              <p className="text-brand-700 text-xs">BMR = 10×poids(kg) + 6,25×taille(cm) − 5×âge + 5</p>
            </div>
            <div className="border-t border-surface-200 pt-3">
              <p className="text-xs text-surface-500 font-sans mb-1">Femme</p>
              <p className="text-violet-700 text-xs">BMR = 10×poids(kg) + 6,25×taille(cm) − 5×âge − 161</p>
            </div>
            <div className="border-t border-surface-200 pt-3">
              <p className="text-xs text-surface-500 font-sans mb-1">TDEE</p>
              <p className="text-emerald-700 text-xs">TDEE = BMR × Facteur d'activité</p>
            </div>
          </div>
          <div className="text-sm text-surface-600">
            <p className="font-medium mb-2">Facteurs d'activité :</p>
            <ul className="space-y-1 text-xs">
              {[
                ["Sédentaire", "×1,2"],
                ["Légèrement actif (1-3j/sem)", "×1,375"],
                ["Modérément actif (3-5j/sem)", "×1,55"],
                ["Très actif (6-7j/sem)", "×1,725"],
                ["Extrêmement actif", "×1,9"],
              ].map(([label, factor]) => (
                <li key={label} className="flex justify-between">
                  <span>{label}</span>
                  <span className="font-mono font-semibold text-brand-700">{factor}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      }
      howItWorks={
        <div className="space-y-4">
          <p>
            Le calculateur utilise votre profil (sexe, âge, poids, taille) pour calculer d'abord
            votre BMR (métabolisme de base), puis multiplie ce chiffre par votre facteur d'activité
            pour obtenir votre TDEE total.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            {[
              { label: "Perte de poids", offset: "−500 kcal/jour", detail: "≈ 0,5 kg/semaine", color: "bg-red-50 border-red-200 text-red-800" },
              { label: "Maintien", offset: "= TDEE", detail: "Poids stable", color: "bg-emerald-50 border-emerald-200 text-emerald-800" },
              { label: "Prise de masse", offset: "+500 kcal/jour", detail: "≈ 0,5 kg/semaine", color: "bg-brand-50 border-brand-200 text-brand-800" },
            ].map((item) => (
              <div key={item.label} className={`p-4 rounded-xl border ${item.color}`}>
                <p className="font-semibold text-sm mb-1">{item.label}</p>
                <p className="font-mono font-bold">{item.offset}</p>
                <p className="text-xs mt-1 opacity-75">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      }
      examples={
        <div className="space-y-4">
          <div className="overflow-x-auto rounded-xl border border-surface-200">
            <table className="w-full text-sm">
              <thead className="bg-surface-50">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">Profil</th>
                  <th className="px-4 py-3 text-left font-medium">BMR</th>
                  <th className="px-4 py-3 text-left font-medium">Activité</th>
                  <th className="px-4 py-3 text-left font-medium">TDEE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-100">
                {[
                  ["Femme 30 ans, 60 kg, 165 cm", "1 399 kcal", "Sédentaire", "1 679 kcal"],
                  ["Homme 35 ans, 80 kg, 180 cm", "1 876 kcal", "Modérément actif", "2 908 kcal"],
                  ["Femme 45 ans, 70 kg, 168 cm", "1 460 kcal", "Légèrement actif", "2 008 kcal"],
                  ["Homme 25 ans, 75 kg, 175 cm", "1 788 kcal", "Très actif", "3 084 kcal"],
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-surface-50">
                    <td className="px-4 py-3 text-surface-700">{row[0]}</td>
                    <td className="px-4 py-3 text-surface-600">{row[1]}</td>
                    <td className="px-4 py-3 text-surface-600">{row[2]}</td>
                    <td className="px-4 py-3 font-semibold text-brand-700">{row[3]}</td>
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
