import { Metadata } from "next";
import { getCalculatorBySlug, getRelatedCalculators } from "@/data/calculators";
import { CalculatorPageLayout } from "@/components/layout/CalculatorPageLayout";
import { MetabolismeBasalCalculator } from "@/components/calculators/MetabolismeBasalCalculator";

export const metadata: Metadata = {
  title: "Calculateur Métabolisme Basal (BMR) — Formules Harris-Benedict et Mifflin",
  description:
    "Calculez votre métabolisme de base (BMR) avec Harris-Benedict et Mifflin-St Jeor. Déterminez vos besoins caloriques totaux (TDEE).",
  keywords: "métabolisme basal, BMR, Harris-Benedict, Mifflin St Jeor, calories repos, dépense énergétique",
};

const faq = [
  {
    question: "Qu'est-ce que le métabolisme basal (BMR) ?",
    answer:
      "Le métabolisme basal représente le nombre de calories que votre corps consomme au repos pour maintenir ses fonctions vitales : respiration, circulation sanguine, température corporelle. Il représente 60 à 75% de votre dépense énergétique totale.",
  },
  {
    question: "Quelle est la différence entre BMR et TDEE ?",
    answer:
      "Le BMR est votre dépense calorique minimale au repos. Le TDEE (Total Daily Energy Expenditure) est votre dépense totale incluant l'activité physique. TDEE = BMR × Facteur d'activité. Pour perdre du poids, consommez moins que votre TDEE.",
  },
  {
    question: "La formule Mifflin est-elle plus précise que Harris-Benedict ?",
    answer:
      "Oui. La formule Mifflin-St Jeor (1990) est généralement considérée comme plus précise que Harris-Benedict (1919). Des études cliniques montrent que Mifflin est précise à ±10% pour la majorité des individus.",
  },
  {
    question: "Comment augmenter son métabolisme de base ?",
    answer:
      "Le métabolisme basal peut être augmenté par le développement de la masse musculaire (les muscles consomment plus que la graisse), une alimentation suffisante et une activité physique régulière, notamment la musculation.",
  },
  {
    question: "Mon métabolisme basal change-t-il avec l'âge ?",
    answer:
      "Oui, le BMR diminue d'environ 1-2% par décennie après 20 ans, principalement à cause de la perte de masse musculaire. Le maintien d'une activité physique régulière peut ralentir ce déclin.",
  },
];

export default function MetabolismeBasalPage() {
  const calculator = getCalculatorBySlug("calculateur-metabolisme-basal")!;
  const related = getRelatedCalculators("calculateur-metabolisme-basal");

  return (
    <CalculatorPageLayout
      calculator={calculator}
      relatedCalculators={related}
      calculatorWidget={<MetabolismeBasalCalculator />}
      intro={
        <div className="space-y-4">
          <p>
            Le <strong>calculateur de métabolisme basal</strong> (BMR) vous permet de déterminer
            le nombre de calories que votre corps brûle au repos pour maintenir ses fonctions
            vitales. C'est la quantité minimale d'énergie nécessaire sans aucune activité physique.
          </p>
          <p>
            Notre calculateur utilise deux formules scientifiquement validées : la formule
            <strong> Harris-Benedict révisée</strong> (1984) et la formule{" "}
            <strong>Mifflin-St Jeor</strong> (1990), cette dernière étant considérée comme la plus
            précise pour la population générale contemporaine.
          </p>
          <p>
            Connaître son BMR est la première étape pour calculer ses besoins caloriques totaux
            (TDEE) et adapter son alimentation selon ses objectifs de poids.
          </p>
        </div>
      }
      formula={
        <div className="space-y-3">
          <div className="bg-surface-50 border border-surface-200 rounded-xl p-4 font-mono text-sm">
            <p className="text-brand-700 font-medium mb-2">Mifflin-St Jeor (recommandée)</p>
            <p className="text-surface-600 text-xs">Homme : BMR = 10×P + 6.25×T − 5×A + 5</p>
            <p className="text-surface-600 text-xs">Femme : BMR = 10×P + 6.25×T − 5×A − 161</p>
            <p className="text-surface-400 text-xs mt-2">P = poids (kg), T = taille (cm), A = âge</p>
          </div>
          <div className="bg-surface-50 border border-surface-200 rounded-xl p-4 font-mono text-sm">
            <p className="text-brand-700 font-medium mb-2">Harris-Benedict révisée</p>
            <p className="text-surface-600 text-xs">Homme : BMR = 88.36 + 13.4×P + 4.8×T − 5.7×A</p>
            <p className="text-surface-600 text-xs">Femme : BMR = 447.6 + 9.25×P + 3.1×T − 4.33×A</p>
          </div>
        </div>
      }
      howItWorks={
        <div className="space-y-4">
          <ol className="space-y-4">
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
              <p>Sélectionnez votre <strong>sexe</strong> — les formules diffèrent entre hommes et femmes.</p>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
              <p>Entrez votre <strong>âge</strong>, <strong>poids</strong> (kg) et <strong>taille</strong> (cm).</p>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
              <p>Le calculateur affiche votre BMR selon les deux formules et le <strong>TDEE estimé</strong> par niveau d'activité.</p>
            </li>
          </ol>
        </div>
      }
      examples={
        <div className="overflow-x-auto rounded-xl border border-surface-200">
          <table className="w-full text-sm">
            <thead className="bg-surface-50">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-surface-700">Profil</th>
                <th className="px-4 py-3 text-left font-medium text-surface-700">BMR Mifflin</th>
                <th className="px-4 py-3 text-left font-medium text-surface-700">TDEE (modéré)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100">
              {[
                { profil: "Femme 30 ans, 60 kg, 165 cm", bmr: "1 392 kcal", tdee: "2 157 kcal" },
                { profil: "Homme 35 ans, 80 kg, 180 cm", bmr: "1 894 kcal", tdee: "2 935 kcal" },
                { profil: "Femme 50 ans, 70 kg, 160 cm", bmr: "1 406 kcal", tdee: "2 179 kcal" },
                { profil: "Homme 25 ans, 75 kg, 175 cm", bmr: "1 838 kcal", tdee: "2 849 kcal" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-surface-50">
                  <td className="px-4 py-3 font-medium text-xs">{row.profil}</td>
                  <td className="px-4 py-3 font-semibold text-brand-700">{row.bmr}</td>
                  <td className="px-4 py-3 text-surface-600">{row.tdee}</td>
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
