import { Metadata } from "next";
import { getCalculatorBySlug, getRelatedCalculators } from "@/data/calculators";
import { CalculatorPageLayout } from "@/components/layout/CalculatorPageLayout";
import { ConversionUnitesCalculator } from "@/components/calculators/ConversionUnitesCalculator";

export const metadata: Metadata = {
  title: "Calculateur Conversion d'Unités — Longueur, Poids, Température, Volume",
  description:
    "Convertissez facilement toutes les unités : longueur, poids, température, volume et surface. Système métrique et impérial. Résultat instantané.",
  keywords: "conversion unités, convertisseur, mètres pieds, kg livres, celsius fahrenheit, litres gallons",
};

const faq = [
  {
    question: "Comment convertir des degrés Celsius en Fahrenheit ?",
    answer:
      "°F = (°C × 9/5) + 32. Par exemple, 20°C = (20 × 9/5) + 32 = 68°F. Inverse : °C = (°F − 32) × 5/9.",
  },
  {
    question: "Combien de centimètres fait un pouce ?",
    answer:
      "1 pouce (inch) = 2.54 centimètres exactement. Donc 1 cm = 1/2.54 ≈ 0.3937 pouce. 5 pouces = 12.7 cm.",
  },
  {
    question: "Quelle est la différence entre kg et livres ?",
    answer:
      "1 kilogramme = 2.20462 livres (lb). Inversement, 1 livre = 0.453592 kg. 70 kg ≈ 154.3 livres.",
  },
  {
    question: "Comment convertir des miles en kilomètres ?",
    answer:
      "1 mile = 1.60934 km. 100 miles = 160.934 km. Utile pour les compteurs de vitesse anglo-saxons.",
  },
  {
    question: "Quelle est la différence entre litre et gallon ?",
    answer:
      "Gallon américain (US) = 3.785 L. Gallon britannique (Imperial) = 4.546 L. En France et Europe, on utilise toujours le litre.",
  },
];

export default function ConversionUnitesPage() {
  const calculator = getCalculatorBySlug("calculateur-conversion-unites")!;
  const related = getRelatedCalculators("calculateur-conversion-unites");

  return (
    <CalculatorPageLayout
      calculator={calculator}
      relatedCalculators={related}
      calculatorWidget={<ConversionUnitesCalculator />}
      intro={
        <div className="space-y-4">
          <p>
            Le <strong>calculateur de conversion d'unités</strong> vous permet de convertir
            instantanément toutes les unités de mesure courantes : longueurs, poids,
            températures, volumes et surfaces. Il couvre le système métrique (SI) utilisé
            en France et les unités impériales anglo-saxonnes.
          </p>
          <p>
            Catégories disponibles : <strong>longueur</strong> (mm, cm, m, km, pouce, pied,
            mile), <strong>masse</strong> (g, kg, tonne, once, livre),{" "}
            <strong>température</strong> (°C, °F, K), <strong>volume</strong> (mL, L, fl oz,
            gallon) et <strong>surface</strong> (cm², m², ha, km²). Entrez une valeur et le
            résultat s'affiche immédiatement.
          </p>
        </div>
      }
      formula={
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { cat: "Longueur", items: ["1 km = 1 000 m", "1 pouce = 2.54 cm", "1 mile = 1.609 km"] },
            { cat: "Masse", items: ["1 kg = 1 000 g", "1 livre = 453.6 g", "1 once = 28.35 g"] },
            { cat: "Température", items: ["°F = °C × 9/5 + 32", "K = °C + 273.15"] },
            { cat: "Volume", items: ["1 L = 1 000 mL", "1 gallon US = 3.785 L"] },
          ].map((cat) => (
            <div key={cat.cat} className="bg-surface-50 border border-surface-200 rounded-xl p-4">
              <p className="text-brand-700 font-medium text-sm mb-2">{cat.cat}</p>
              {cat.items.map((item) => (
                <p key={item} className="text-xs font-mono text-surface-600">{item}</p>
              ))}
            </div>
          ))}
        </div>
      }
      howItWorks={
        <div className="space-y-4">
          <ol className="space-y-4">
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
              <p>Sélectionnez la <strong>catégorie</strong> d'unité : longueur, masse, température…</p>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
              <p>Choisissez l'<strong>unité source</strong> et l'<strong>unité cible</strong>.</p>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
              <p>Entrez la <strong>valeur</strong> et le résultat s'affiche instantanément.</p>
            </li>
          </ol>
        </div>
      }
      examples={
        <div className="overflow-x-auto rounded-xl border border-surface-200">
          <table className="w-full text-sm">
            <thead className="bg-surface-50">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-surface-700">Valeur</th>
                <th className="px-4 py-3 text-left font-medium text-surface-700">Conversion</th>
                <th className="px-4 py-3 text-left font-medium text-surface-700">Résultat</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100">
              {[
                { val: "70 kg", conv: "→ livres", res: "154.32 lb" },
                { val: "37°C", conv: "→ Fahrenheit", res: "98.6°F" },
                { val: "5 miles", conv: "→ km", res: "8.047 km" },
                { val: "500 mL", conv: "→ fl oz", res: "16.91 fl oz" },
                { val: "1 hectare", conv: "→ m²", res: "10 000 m²" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-surface-50">
                  <td className="px-4 py-3 font-medium">{row.val}</td>
                  <td className="px-4 py-3 text-surface-600">{row.conv}</td>
                  <td className="px-4 py-3 font-semibold text-brand-700">{row.res}</td>
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
