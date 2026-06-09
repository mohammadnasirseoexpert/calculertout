import { Metadata } from "next";
import { getCalculatorBySlug, getRelatedCalculators } from "@/data/calculators";
import { CalculatorPageLayout } from "@/components/layout/CalculatorPageLayout";
import { IMCCalculator } from "@/components/calculators/IMCCalculator";

export const metadata: Metadata = {
  title: "Calculateur IMC — Indice de Masse Corporelle",
  description:
    "Calculez votre IMC (Indice de Masse Corporelle) et interprétez votre résultat selon les critères de l'OMS. Gratuit et instantané.",
  keywords: "calculateur IMC, indice masse corporelle, calcul IMC, IMC normal, surpoids obésité",
};

const faq = [
  {
    question: "Qu'est-ce que l'IMC ?",
    answer:
      "L'Indice de Masse Corporelle (IMC) est une mesure qui permet d'évaluer la corpulence d'une personne à partir de son poids et de sa taille. Il est utilisé par l'OMS comme indicateur de risque pour la santé.",
  },
  {
    question: "Quels sont les seuils IMC de l'OMS ?",
    answer:
      "Selon l'OMS : IMC < 16,5 (dénutrition), 16,5–18,5 (maigreur), 18,5–25 (poids normal), 25–30 (surpoids), 30–35 (obésité modérée), 35–40 (obésité sévère), > 40 (obésité morbide).",
  },
  {
    question: "L'IMC est-il fiable pour tout le monde ?",
    answer:
      "L'IMC a des limites. Il ne distingue pas la masse musculaire de la masse grasse. Un sportif musclé peut avoir un IMC élevé sans être obèse. Il est moins adapté aux enfants, aux personnes très âgées et aux femmes enceintes.",
  },
  {
    question: "Comment perdre du poids sainement ?",
    answer:
      "Un déficit calorique modéré (300-500 kcal/jour), combiné à une alimentation équilibrée et une activité physique régulière, permet une perte de poids saine de 0,5 à 1 kg par semaine. Consultez un médecin ou diététicien.",
  },
  {
    question: "L'IMC s'applique-t-il aux enfants ?",
    answer:
      "Non, pour les enfants et adolescents, on utilise l'IMC-pour-âge avec des courbes de percentiles spécifiques. Notre calculateur est conçu pour les adultes de 18 à 70 ans.",
  },
];

export default function IMCPage() {
  const calculator = getCalculatorBySlug("calculateur-imc")!;
  const related = getRelatedCalculators("calculateur-imc");

  return (
    <CalculatorPageLayout
      calculator={calculator}
      relatedCalculators={related}
      calculatorWidget={<IMCCalculator />}
      intro={
        <div className="space-y-4">
          <p>
            Le <strong>calculateur IMC</strong> (Indice de Masse Corporelle) est l'un des outils de
            santé les plus utilisés au monde. Développé au 19ème siècle par Adolphe Quételet et adopté
            par l'Organisation Mondiale de la Santé (OMS), il permet d'évaluer rapidement la corpulence
            d'un individu adulte.
          </p>
          <p>
            L'IMC est calculé à partir du poids en kilogrammes divisé par le carré de la taille en mètres.
            Le résultat est ensuite interprété à l'aide d'une échelle standardisée qui classe la corpulence
            de la dénutrition à l'obésité morbide.
          </p>
          <p>
            Bien que simple et largement utilisé, l'IMC comporte des limitations importantes. Il ne
            distingue pas la masse musculaire de la masse grasse, ce qui peut induire en erreur pour
            les athlètes ou les personnes âgées. Il doit être interprété en complément d'autres indicateurs
            de santé et toujours avec l'aide d'un professionnel de santé.
          </p>
        </div>
      }
      formula={
        <div className="space-y-4">
          <div className="bg-surface-50 border border-surface-200 rounded-xl p-5 font-mono text-sm">
            <p className="text-brand-700 font-medium text-base">IMC = Poids (kg) / Taille² (m)</p>
            <div className="mt-3 text-xs text-surface-500 font-sans space-y-1">
              <p>Exemple : 70 kg pour 1,75 m</p>
              <p>IMC = 70 / (1,75 × 1,75) = 70 / 3,0625 = <strong>22,9</strong></p>
            </div>
          </div>
          <div className="overflow-x-auto rounded-xl border border-surface-200">
            <table className="w-full text-sm">
              <thead className="bg-surface-50">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">IMC</th>
                  <th className="px-4 py-3 text-left font-medium">Catégorie OMS</th>
                  <th className="px-4 py-3 text-left font-medium">Risque santé</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-100 text-xs">
                {[
                  ["< 16,5", "Dénutrition", "Très élevé"],
                  ["16,5 – 18,5", "Maigreur", "Élevé"],
                  ["18,5 – 25", "Poids normal", "Faible"],
                  ["25 – 30", "Surpoids", "Modéré"],
                  ["30 – 35", "Obésité modérée (I)", "Élevé"],
                  ["35 – 40", "Obésité sévère (II)", "Très élevé"],
                  ["> 40", "Obésité morbide (III)", "Extrême"],
                ].map(([imc, cat, risque], i) => (
                  <tr key={i} className="hover:bg-surface-50">
                    <td className="px-4 py-2.5 font-mono font-medium">{imc}</td>
                    <td className="px-4 py-2.5">{cat}</td>
                    <td className="px-4 py-2.5 text-surface-500">{risque}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      }
      howItWorks={
        <div className="space-y-4">
          <p>
            Renseignez simplement votre poids en kilogrammes et votre taille en centimètres.
            Le calculateur affiche votre IMC avec l'interprétation selon les critères OMS,
            ainsi qu'un indicateur visuel coloré pour situer votre résultat sur l'échelle.
          </p>
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
            <p className="text-sm text-amber-800">
              <strong>⚠️ Important :</strong> L'IMC est un outil de dépistage, pas de diagnostic.
              Consultez un professionnel de santé pour une évaluation complète de votre état de santé.
            </p>
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
                  <th className="px-4 py-3 text-left font-medium">Poids</th>
                  <th className="px-4 py-3 text-left font-medium">Taille</th>
                  <th className="px-4 py-3 text-left font-medium">IMC</th>
                  <th className="px-4 py-3 text-left font-medium">Catégorie</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-100">
                {[
                  ["Femme 30 ans", "55 kg", "1,65 m", "20,2", "Poids normal"],
                  ["Homme 40 ans", "85 kg", "1,75 m", "27,8", "Surpoids"],
                  ["Femme 50 ans", "70 kg", "1,60 m", "27,3", "Surpoids"],
                  ["Homme 25 ans", "90 kg", "1,80 m", "27,8", "Surpoids"],
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-surface-50">
                    {row.map((cell, j) => (
                      <td key={j} className={`px-4 py-3 ${j === 3 ? "font-bold text-brand-700" : j === 4 ? "text-surface-600" : ""}`}>
                        {cell}
                      </td>
                    ))}
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
