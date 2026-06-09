import { Metadata } from "next";
import { getCalculatorBySlug, getRelatedCalculators } from "@/data/calculators";
import { CalculatorPageLayout } from "@/components/layout/CalculatorPageLayout";
import { PoidsIdealCalculator } from "@/components/calculators/PoidsIdealCalculator";

export const metadata: Metadata = {
  title: "Calculateur Poids Idéal — Formules Lorentz, Broca, Devine",
  description:
    "Estimez votre poids idéal selon les formules médicales de Lorentz, Broca et Devine. Calcul personnalisé selon votre taille et votre sexe.",
  keywords: "poids idéal, formule Lorentz, formule Broca, poids santé, calculateur poids",
};

const faq = [
  {
    question: "Quelle formule de poids idéal est la plus fiable ?",
    answer:
      "La formule de Lorentz est la plus utilisée en France car elle tient compte du sexe et donne des résultats nuancés. La formule de Broca est plus simple mais peut surestimer le poids idéal pour les grandes tailles. Aucune formule n'est universelle : le poids idéal varie selon la morphologie, la masse musculaire et d'autres facteurs individuels.",
  },
  {
    question: "Quelle est la différence entre poids idéal et IMC normal ?",
    answer:
      "L'IMC normal se situe entre 18,5 et 25 kg/m². Un poids correspondant à un IMC de 22 est souvent considéré comme le milieu de la plage normale. Les formules de poids idéal (Lorentz, Broca) donnent des estimations similaires mais légèrement différentes selon la méthode.",
  },
  {
    question: "Mon poids idéal est-il le même à 30 ans et à 60 ans ?",
    answer:
      "Les formules classiques ne prennent pas en compte l'âge. Cependant, après 60-65 ans, un léger surpoids (IMC 25-27) est parfois associé à une meilleure longévité. Consultez votre médecin pour une évaluation personnalisée.",
  },
  {
    question: "Comment atteindre mon poids idéal de façon saine ?",
    answer:
      "L'approche recommandée est progressive : 0,5 à 1 kg par semaine maximum. Cela implique une alimentation équilibrée (déficit calorique modéré de 300-500 kcal/jour) et une activité physique régulière. Évitez les régimes drastiques qui entraînent l'effet yoyo.",
  },
  {
    question: "Ces formules s'appliquent-elles aux enfants ?",
    answer:
      "Non. Ces formules sont valides uniquement pour les adultes. Pour les enfants et adolescents, l'IMC est interprété selon des courbes de croissance adaptées à l'âge et au sexe. Consultez votre pédiatre.",
  },
];

export default function PoidsIdealPage() {
  const calculator = getCalculatorBySlug("calculateur-poids-ideal")!;
  const related = getRelatedCalculators("calculateur-poids-ideal");

  return (
    <CalculatorPageLayout
      calculator={calculator}
      relatedCalculators={related}
      calculatorWidget={<PoidsIdealCalculator />}
      intro={
        <div className="space-y-4">
          <p>
            Le <strong>calculateur de poids idéal</strong> vous permet d'estimer votre poids de
            forme à partir de votre taille et de votre sexe, en utilisant les formules médicales
            les plus reconnues : Lorentz, Broca et Devine. Ces méthodes sont utilisées par les
            professionnels de santé comme point de référence, non comme objectif absolu.
          </p>
          <p>
            Il est important de comprendre que le "poids idéal" est une estimation statistique.
            La morphologie, la masse musculaire, la densité osseuse et l'histoire personnelle de
            chacun influencent le poids de santé optimal.
          </p>
          <p>
            En France, on utilise couramment la formule de Lorentz, qui tient compte du sexe et
            propose une correction pour les grandes tailles.
          </p>
        </div>
      }
      formula={
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="bg-surface-50 border border-surface-200 rounded-xl p-4 font-mono text-sm">
              <p className="text-brand-700 font-medium mb-1">Formule de Lorentz (recommandée)</p>
              <p className="text-surface-600 text-xs">Homme : PI = Taille(cm) − 100 − (Taille − 150) / 4</p>
              <p className="text-surface-600 text-xs">Femme : PI = Taille(cm) − 100 − (Taille − 150) / 2</p>
            </div>
            <div className="bg-surface-50 border border-surface-200 rounded-xl p-4 font-mono text-sm">
              <p className="text-brand-700 font-medium mb-1">Formule de Broca</p>
              <p className="text-surface-600 text-xs">Homme : PI = Taille(cm) − 100</p>
              <p className="text-surface-600 text-xs">Femme : PI = Taille(cm) − 105</p>
            </div>
            <div className="bg-surface-50 border border-surface-200 rounded-xl p-4 font-mono text-sm">
              <p className="text-brand-700 font-medium mb-1">Formule de Devine</p>
              <p className="text-surface-600 text-xs">Homme : PI = 50 + 2.3 × (Taille − 152.4) / 2.54</p>
              <p className="text-surface-600 text-xs">Femme : PI = 45.5 + 2.3 × (Taille − 152.4) / 2.54</p>
            </div>
          </div>
        </div>
      }
      howItWorks={
        <div className="space-y-4">
          <ol className="space-y-4">
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
              <p>Sélectionnez votre <strong>sexe</strong> pour adapter les formules.</p>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
              <p>Entrez votre <strong>taille en centimètres</strong> (entre 100 et 250 cm).</p>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
              <p>Le calculateur affiche votre poids idéal selon <strong>5 méthodes différentes</strong>.</p>
            </li>
          </ol>
        </div>
      }
      examples={
        <div className="overflow-x-auto rounded-xl border border-surface-200">
          <table className="w-full text-sm">
            <thead className="bg-surface-50">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-surface-700">Taille</th>
                <th className="px-4 py-3 text-left font-medium text-surface-700">Sexe</th>
                <th className="px-4 py-3 text-left font-medium text-surface-700">Lorentz</th>
                <th className="px-4 py-3 text-left font-medium text-surface-700">Broca</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100">
              {[
                { taille: "160 cm", sexe: "Femme", lorentz: "52,5 kg", broca: "55 kg" },
                { taille: "170 cm", sexe: "Femme", lorentz: "60 kg", broca: "65 kg" },
                { taille: "175 cm", sexe: "Homme", lorentz: "68,75 kg", broca: "75 kg" },
                { taille: "180 cm", sexe: "Homme", lorentz: "72,5 kg", broca: "80 kg" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-surface-50">
                  <td className="px-4 py-3 font-medium">{row.taille}</td>
                  <td className="px-4 py-3 text-surface-600">{row.sexe}</td>
                  <td className="px-4 py-3 font-semibold text-brand-700">{row.lorentz}</td>
                  <td className="px-4 py-3 text-surface-600">{row.broca}</td>
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
