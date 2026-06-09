import { Metadata } from "next";
import { getCalculatorBySlug, getRelatedCalculators } from "@/data/calculators";
import { CalculatorPageLayout } from "@/components/layout/CalculatorPageLayout";
import { TVACalculator } from "@/components/calculators/TVACalculator";

export const metadata: Metadata = {
  title: "Calculateur TVA — HT en TTC et TTC en HT",
  description:
    "Calculez instantanément la TVA française : convertissez un prix HT en TTC et vice-versa. Tous les taux : 20%, 10%, 5,5% et 2,1%.",
  keywords: "calculateur TVA, calcul TVA 20%, TVA HT TTC, calculer TVA France, taux TVA français",
};

const faq = [
  {
    question: "Quels sont les taux de TVA en France ?",
    answer:
      "La France applique 4 taux de TVA : 20% (taux normal, majorité des produits/services), 10% (restauration, travaux d'entretien, transports), 5,5% (alimentation, livres, produits d'hygiène, énergie) et 2,1% (médicaments remboursables, presse).",
  },
  {
    question: "Comment calculer le prix TTC à partir du prix HT ?",
    answer:
      "Prix TTC = Prix HT × (1 + taux TVA). Par exemple, 100 € HT au taux normal : 100 × 1,20 = 120 € TTC. La TVA est donc de 20 €.",
  },
  {
    question: "Comment calculer le prix HT à partir du prix TTC ?",
    answer:
      "Prix HT = Prix TTC / (1 + taux TVA). Par exemple, 120 € TTC au taux de 20% : 120 / 1,20 = 100 € HT.",
  },
  {
    question: "Qui doit facturer la TVA ?",
    answer:
      "Toute entreprise assujettie à la TVA (chiffre d'affaires au-delà de la franchise en base : 36 800 € pour les services, 91 900 € pour la vente de biens en 2024) doit facturer et collecter la TVA.",
  },
  {
    question: "Qu'est-ce que la franchise en base de TVA ?",
    answer:
      "Les auto-entrepreneurs et petites entreprises sous certains seuils de CA peuvent bénéficier de la franchise en base de TVA : ils ne facturent pas la TVA et ne la récupèrent pas non plus. Leur facture doit mentionner «TVA non applicable, art. 293 B du CGI».",
  },
];

export default function TVAPage() {
  const calculator = getCalculatorBySlug("calculateur-tva")!;
  const related = getRelatedCalculators("calculateur-tva");

  return (
    <CalculatorPageLayout
      calculator={calculator}
      relatedCalculators={related}
      calculatorWidget={<TVACalculator />}
      intro={
        <div className="space-y-4">
          <p>
            Le <strong>calculateur TVA</strong> vous permet de convertir instantanément un prix hors taxe (HT)
            en prix toutes taxes comprises (TTC) et inversement. Compatible avec tous les taux de TVA
            applicables en France en 2024.
          </p>
          <p>
            La TVA (Taxe sur la Valeur Ajoutée) est un impôt indirect collecté par les entreprises pour
            le compte de l'État. Introduite en France en 1954, elle est l'une des principales sources de
            recettes fiscales de l'État français.
          </p>
          <p>
            Que vous soyez entrepreneur, comptable, acheteur ou vendeur, ce calculateur vous fait gagner
            du temps sur tous vos calculs de TVA quotidiens.
          </p>
        </div>
      }
      formula={
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-surface-50 border border-surface-200 rounded-xl p-5 font-mono text-sm">
              <p className="text-xs text-surface-500 mb-2 font-sans font-medium uppercase tracking-wider">HT → TTC</p>
              <p className="text-brand-700 font-medium">TTC = HT × (1 + TVA/100)</p>
              <p className="text-xs text-surface-500 mt-2 font-sans">Ex: 100 × 1,20 = 120 €</p>
            </div>
            <div className="bg-surface-50 border border-surface-200 rounded-xl p-5 font-mono text-sm">
              <p className="text-xs text-surface-500 mb-2 font-sans font-medium uppercase tracking-wider">TTC → HT</p>
              <p className="text-brand-700 font-medium">HT = TTC / (1 + TVA/100)</p>
              <p className="text-xs text-surface-500 mt-2 font-sans">Ex: 120 / 1,20 = 100 €</p>
            </div>
          </div>
        </div>
      }
      howItWorks={
        <div className="space-y-4">
          <p>Référence rapide des taux de TVA français et leurs domaines d'application :</p>
          <div className="space-y-2">
            {[
              { taux: "20%", label: "Taux normal", color: "bg-brand-50 border-brand-200 text-brand-800", exemples: "Vêtements, électronique, voitures, services professionnels, alcool" },
              { taux: "10%", label: "Taux intermédiaire", color: "bg-violet-50 border-violet-200 text-violet-800", exemples: "Restauration, hôtellerie, transports, rénovation immobilière" },
              { taux: "5,5%", label: "Taux réduit", color: "bg-emerald-50 border-emerald-200 text-emerald-800", exemples: "Alimentation, livres, médicaments non remboursables, abonnements gaz/électricité" },
              { taux: "2,1%", label: "Taux super réduit", color: "bg-yellow-50 border-yellow-200 text-yellow-800", exemples: "Médicaments remboursables, presse papier, spectacles vivants (premières représentations)" },
            ].map((item) => (
              <div key={item.taux} className={`p-4 rounded-xl border ${item.color}`}>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-lg font-display font-bold">{item.taux}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
                <p className="text-xs opacity-75">{item.exemples}</p>
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
                  <th className="px-4 py-3 text-left font-medium text-surface-700">Prix HT</th>
                  <th className="px-4 py-3 text-left font-medium text-surface-700">Taux TVA</th>
                  <th className="px-4 py-3 text-left font-medium text-surface-700">Montant TVA</th>
                  <th className="px-4 py-3 text-left font-medium text-surface-700">Prix TTC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-100">
                {[
                  { ht: "100,00 €", taux: "20%", tva: "20,00 €", ttc: "120,00 €" },
                  { ht: "50,00 €", taux: "10%", tva: "5,00 €", ttc: "55,00 €" },
                  { ht: "200,00 €", taux: "5,5%", tva: "11,00 €", ttc: "211,00 €" },
                  { ht: "1 000,00 €", taux: "20%", tva: "200,00 €", ttc: "1 200,00 €" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-surface-50">
                    <td className="px-4 py-3 font-medium">{row.ht}</td>
                    <td className="px-4 py-3 text-surface-600">{row.taux}</td>
                    <td className="px-4 py-3 text-surface-600">{row.tva}</td>
                    <td className="px-4 py-3 font-semibold text-brand-700">{row.ttc}</td>
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
