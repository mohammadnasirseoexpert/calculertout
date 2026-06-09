import { Metadata } from "next";
import { getCalculatorsByCategory } from "@/data/calculators";
import { CalculatorCard } from "@/components/ui/CalculatorCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Calculateurs Santé Gratuits — IMC, Calories, Métabolisme | CalculateurPro",
  description:
    "6 calculateurs santé gratuits : IMC, calories, poids idéal, besoins hydriques, métabolisme basal, fréquence cardiaque. Résultats personnalisés en français.",
  keywords:
    "calculateur IMC, calculateur calories, calculateur poids idéal, calculateur métabolisme, calculateur santé",
};

export default function SantePage() {
  const calcs = getCalculatorsByCategory("sante");

  return (
    <div className="container-xl py-12">
      <Breadcrumb items={[{ label: "Santé", href: "/sante" }]} />

      <div className="mt-8 mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-3xl">
            ❤️
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-surface-900">
              Calculateurs Santé
            </h1>
            <p className="text-surface-500 mt-1">{calcs.length} calculateurs disponibles</p>
          </div>
        </div>
        <p className="text-surface-600 max-w-2xl leading-relaxed">
          Nos calculateurs santé vous permettent de suivre vos indicateurs corporels, estimer vos
          besoins nutritionnels et planifier votre activité physique. Basés sur des formules
          médicales reconnues.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {calcs.map((calc) => (
          <CalculatorCard key={calc.slug} calculator={calc} />
        ))}
      </div>

      <div className="mt-16 p-8 rounded-2xl bg-emerald-50 border border-emerald-100">
        <h2 className="text-xl font-display font-semibold text-surface-900 mb-3">
          ⚠️ Avertissement médical
        </h2>
        <p className="text-sm text-surface-600 leading-relaxed">
          Nos calculateurs santé sont fournis à titre informatif uniquement et ne remplacent pas
          l'avis d'un professionnel de santé. Consultez toujours un médecin, diététicien ou autre
          professionnel de santé qualifié avant de modifier votre alimentation, votre programme
          d'exercice ou votre traitement médical.
        </p>
      </div>
    </div>
  );
}
