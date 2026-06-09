import { Metadata } from "next";
import { getCalculatorBySlug, getRelatedCalculators } from "@/data/calculators";
import { CalculatorPageLayout } from "@/components/layout/CalculatorPageLayout";
import { FrequenceCardiaqueCalculator } from "@/components/calculators/FrequenceCardiaqueCalculator";

export const metadata: Metadata = {
  title: "Calculateur Fréquence Cardiaque — Zones d'Entraînement FC Max",
  description:
    "Calculez votre fréquence cardiaque maximale et vos 5 zones d'entraînement. Méthodes Fox et Karvonen pour optimiser vos séances.",
  keywords: "fréquence cardiaque, FC max, zones cardiaques, Karvonen, zone aérobie, entraînement cardio",
};

const faq = [
  {
    question: "Comment calculer sa fréquence cardiaque maximale ?",
    answer:
      "La formule de Fox la plus connue est : FC max = 220 − âge. Par exemple, à 40 ans, FC max = 180 bpm. C'est une estimation statistique avec ±10-12 bpm d'erreur. Une mesure sous effort maximal supervisé est plus précise.",
  },
  {
    question: "Quelles sont les 5 zones de fréquence cardiaque ?",
    answer:
      "Zone 1 (50-60%) : récupération ; Zone 2 (60-70%) : combustion des graisses ; Zone 3 (70-80%) : amélioration cardiovasculaire ; Zone 4 (80-90%) : seuil anaérobie ; Zone 5 (90-100%) : effort maximal, sprints.",
  },
  {
    question: "Qu'est-ce que la méthode Karvonen ?",
    answer:
      "La méthode Karvonen utilise la réserve cardiaque (FC max − FC repos) pour des zones plus précises. Zone cible = FC repos + (FC max − FC repos) × % désiré. Elle est recommandée pour les sportifs réguliers.",
  },
  {
    question: "Quelle zone favorise la combustion des graisses ?",
    answer:
      "La Zone 2 (60-70% FC max) est la zone de combustion des graisses. À cette intensité, les lipides sont la principale source d'énergie. Cependant, des efforts plus intenses brûlent plus de calories totales.",
  },
  {
    question: "Comment mesurer sa fréquence cardiaque au repos ?",
    answer:
      "Mesurez-la le matin, juste après le réveil, allongé. Comptez les battements pendant 60 secondes. Pour un adulte en bonne santé, la FC au repos est entre 60 et 100 bpm ; moins de 60 pour les sportifs.",
  },
];

export default function FrequenceCardiaqueCalculatorPage() {
  const calculator = getCalculatorBySlug("calculateur-frequence-cardiaque")!;
  const related = getRelatedCalculators("calculateur-frequence-cardiaque");

  return (
    <CalculatorPageLayout
      calculator={calculator}
      relatedCalculators={related}
      calculatorWidget={<FrequenceCardiaqueCalculator />}
      intro={
        <div className="space-y-4">
          <p>
            Le <strong>calculateur de fréquence cardiaque</strong> vous permet de déterminer
            vos zones d'entraînement optimales en fonction de votre FC max et de votre FC au
            repos (méthode Karvonen). Ces zones vous aident à optimiser chaque séance selon
            vos objectifs : endurance, perte de graisses, performance.
          </p>
          <p>
            Notre calculateur utilise la formule standard de Fox (220 − âge) et propose en
            option la méthode de Karvonen, plus précise pour les sportifs réguliers qui ont
            une FC de repos faible.
          </p>
        </div>
      }
      formula={
        <div className="space-y-3">
          <div className="bg-surface-50 border border-surface-200 rounded-xl p-4 font-mono text-sm">
            <p className="text-brand-700 font-medium mb-1">Formule de Fox</p>
            <p className="text-surface-600 text-xs">FC max = 220 − Âge</p>
          </div>
          <div className="bg-surface-50 border border-surface-200 rounded-xl p-4 font-mono text-sm">
            <p className="text-brand-700 font-medium mb-1">Méthode de Karvonen</p>
            <p className="text-surface-600 text-xs">Zone = FC repos + (FC max − FC repos) × % zone</p>
          </div>
          <div className="grid grid-cols-5 gap-1.5 mt-2">
            {[
              { z: "Z1", pct: "50-60%", color: "bg-blue-100 text-blue-800" },
              { z: "Z2", pct: "60-70%", color: "bg-green-100 text-green-800" },
              { z: "Z3", pct: "70-80%", color: "bg-yellow-100 text-yellow-800" },
              { z: "Z4", pct: "80-90%", color: "bg-orange-100 text-orange-800" },
              { z: "Z5", pct: "90-100%", color: "bg-red-100 text-red-800" },
            ].map((z) => (
              <div key={z.z} className={`p-2 rounded-lg text-center text-xs font-medium ${z.color}`}>
                <div className="font-bold">{z.z}</div>
                <div>{z.pct}</div>
              </div>
            ))}
          </div>
        </div>
      }
      howItWorks={
        <div className="space-y-4">
          <ol className="space-y-4">
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
              <p>Entrez votre <strong>âge</strong> pour calculer votre FC max estimée.</p>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
              <p>Optionnellement, ajoutez votre <strong>FC au repos</strong> (matin au réveil) pour la méthode Karvonen.</p>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
              <p>Le calculateur affiche vos <strong>5 zones cardiaques</strong> en bpm.</p>
            </li>
          </ol>
        </div>
      }
      examples={
        <div className="overflow-x-auto rounded-xl border border-surface-200">
          <table className="w-full text-sm">
            <thead className="bg-surface-50">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-surface-700">Âge</th>
                <th className="px-4 py-3 text-left font-medium text-surface-700">FC Max</th>
                <th className="px-4 py-3 text-left font-medium text-surface-700">Zone 2</th>
                <th className="px-4 py-3 text-left font-medium text-surface-700">Zone 4</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100">
              {[
                { age: "20 ans", max: "200 bpm", z2: "120–140 bpm", z4: "160–180 bpm" },
                { age: "30 ans", max: "190 bpm", z2: "114–133 bpm", z4: "152–171 bpm" },
                { age: "40 ans", max: "180 bpm", z2: "108–126 bpm", z4: "144–162 bpm" },
                { age: "50 ans", max: "170 bpm", z2: "102–119 bpm", z4: "136–153 bpm" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-surface-50">
                  <td className="px-4 py-3 font-medium">{row.age}</td>
                  <td className="px-4 py-3 font-semibold text-brand-700">{row.max}</td>
                  <td className="px-4 py-3 text-surface-600">{row.z2}</td>
                  <td className="px-4 py-3 text-surface-600">{row.z4}</td>
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
