import { Metadata } from "next";
import { getCalculatorBySlug, getRelatedCalculators } from "@/data/calculators";
import { CalculatorPageLayout } from "@/components/layout/CalculatorPageLayout";
import { BesoinHydriqueCalculator } from "@/components/calculators/BesoinHydriqueCalculator";

export const metadata: Metadata = {
  title: "Calculateur Besoins Hydriques — Quelle quantité d'eau boire par jour ?",
  description:
    "Calculez votre besoin quotidien en eau selon votre poids, activité physique et conditions. Conseils d'hydratation personnalisés.",
  keywords: "besoins hydriques, quantité eau journalière, hydratation, calculateur eau, litres par jour",
};

const faq = [
  {
    question: "Combien d'eau faut-il boire par jour ?",
    answer:
      "La recommandation générale est de 1,5 à 2,5 litres d'eau par jour pour un adulte, mais ce chiffre varie selon le poids, l'activité physique et la température. La règle de base est environ 35 ml par kg de poids corporel, soit ~2,5 L pour 70 kg.",
  },
  {
    question: "L'eau des aliments compte-t-elle dans l'apport hydrique ?",
    answer:
      "Oui, environ 20 à 30% de nos besoins hydriques proviennent des aliments (fruits, légumes, soupes). Les fruits et légumes contiennent 80 à 95% d'eau. Notre calculateur indique l'eau à boire en dehors de l'alimentation.",
  },
  {
    question: "Comment savoir si je suis bien hydraté ?",
    answer:
      "La couleur des urines est le meilleur indicateur : une urine jaune pâle (comme de la limonade) indique une bonne hydratation. Une urine foncée (comme du thé fort) signale une déshydratation.",
  },
  {
    question: "Les besoins en eau augmentent-ils avec la chaleur ?",
    answer:
      "Oui, par temps chaud, les besoins peuvent augmenter de 0,5 à 1 L supplémentaire par heure de transpiration. En cas de canicule, il est recommandé de boire 1 verre toutes les 15-20 minutes, même sans soif.",
  },
  {
    question: "Le café et le thé comptent-ils dans l'hydratation ?",
    answer:
      "Oui, malgré leur effet légèrement diurétique, le café et le thé hydratent globalement. Il est toutefois préférable de compter principalement l'eau pure pour atteindre vos objectifs d'hydratation.",
  },
];

export default function BesoinHydriqueCalculatorPage() {
  const calculator = getCalculatorBySlug("calculateur-besoins-hydriques")!;
  const related = getRelatedCalculators("calculateur-besoins-hydriques");

  return (
    <CalculatorPageLayout
      calculator={calculator}
      relatedCalculators={related}
      calculatorWidget={<BesoinHydriqueCalculator />}
      intro={
        <div className="space-y-4">
          <p>
            Le <strong>calculateur de besoins hydriques</strong> vous aide à déterminer la
            quantité d'eau que vous devriez boire chaque jour en fonction de votre poids,
            niveau d'activité physique et conditions environnementales. Une bonne hydratation
            est essentielle pour le fonctionnement optimal de l'organisme.
          </p>
          <p>
            L'eau représente environ 60% du poids corporel et joue un rôle crucial dans la
            régulation thermique, le transport des nutriments et l'élimination des toxines.
            Une déshydratation même légère (1-2% du poids corporel) peut affecter les
            performances physiques et mentales.
          </p>
          <p>
            En France, l'ANSES recommande des apports en eau de 2 L/jour pour les femmes et
            2,5 L pour les hommes, toutes sources confondues. Ces besoins augmentent en cas
            de chaleur, d'activité physique intense ou d'allaitement.
          </p>
        </div>
      }
      formula={
        <div className="space-y-4">
          <div className="bg-surface-50 border border-surface-200 rounded-xl p-5 font-mono text-sm">
            <p className="text-brand-700 font-medium">Eau (L) = Poids (kg) × 0.035</p>
            <div className="mt-3 space-y-1.5 text-surface-600 text-xs">
              <p><strong>Exemple :</strong> 70 kg × 0.035 = 2.45 L/jour</p>
              <p className="pt-2 text-surface-500">Ajustements selon l'activité :</p>
              <p>+ 0.5 L activité légère (marche, yoga)</p>
              <p>+ 1.0 L activité modérée (jogging, vélo)</p>
              <p>+ 1.5–2 L activité intense (sport intensif)</p>
            </div>
          </div>
        </div>
      }
      howItWorks={
        <div className="space-y-4">
          <ol className="space-y-4">
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
              <p>Entrez votre <strong>poids en kilogrammes</strong> pour le calcul de base.</p>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
              <p>Sélectionnez votre <strong>niveau d'activité physique</strong> quotidien.</p>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
              <p>Le résultat indique votre besoin en eau en litres et en <strong>nombre de verres</strong> (250 ml).</p>
            </li>
          </ol>
        </div>
      }
      examples={
        <div className="overflow-x-auto rounded-xl border border-surface-200">
          <table className="w-full text-sm">
            <thead className="bg-surface-50">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-surface-700">Poids</th>
                <th className="px-4 py-3 text-left font-medium text-surface-700">Activité</th>
                <th className="px-4 py-3 text-left font-medium text-surface-700">Eau/jour</th>
                <th className="px-4 py-3 text-left font-medium text-surface-700">Verres</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100">
              {[
                { poids: "55 kg", activite: "Sédentaire", eau: "1.93 L", verres: "8" },
                { poids: "70 kg", activite: "Modérée", eau: "2.95 L", verres: "12" },
                { poids: "85 kg", activite: "Intense", eau: "4.48 L", verres: "18" },
                { poids: "100 kg", activite: "Légère", eau: "4.00 L", verres: "16" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-surface-50">
                  <td className="px-4 py-3 font-medium">{row.poids}</td>
                  <td className="px-4 py-3 text-surface-600">{row.activite}</td>
                  <td className="px-4 py-3 font-semibold text-brand-700">{row.eau}</td>
                  <td className="px-4 py-3 text-surface-600">{row.verres} verres</td>
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
