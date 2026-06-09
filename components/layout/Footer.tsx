import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

const footerLinks = {
  Finance: [
    { label: "Calculateur de Prêt", href: "/finance/calculateur-pret" },
    { label: "Calculateur Hypothécaire", href: "/finance/calculateur-hypothecaire" },
    { label: "Intérêts Composés", href: "/finance/calculateur-interets-composes" },
    { label: "Calculateur TVA", href: "/finance/calculateur-tva" },
    { label: "Calculateur de Marge", href: "/finance/calculateur-marge-beneficiaire" },
    { label: "Calculateur de Réduction", href: "/finance/calculateur-reduction" },
  ],
  Santé: [
    { label: "Calculateur IMC", href: "/sante/calculateur-imc" },
    { label: "Calculateur Calories", href: "/sante/calculateur-calories" },
    { label: "Poids Idéal", href: "/sante/calculateur-poids-ideal" },
    { label: "Métabolisme Basal", href: "/sante/calculateur-metabolisme-basal" },
    { label: "Besoins Hydriques", href: "/sante/calculateur-besoins-hydriques" },
    { label: "Fréquence Cardiaque", href: "/sante/calculateur-frequence-cardiaque" },
  ],
  Mathématiques: [
    { label: "Calculateur de Pourcentage", href: "/maths/calculateur-pourcentage" },
    { label: "Calculateur de Moyenne", href: "/maths/calculateur-moyenne" },
    { label: "Calculateur de Fractions", href: "/maths/calculateur-fraction" },
    { label: "Règle de Trois", href: "/maths/calculateur-regle-de-trois" },
    { label: "Conversion d'Unités", href: "/maths/calculateur-conversion-unites" },
    { label: "Calculateur Équation", href: "/maths/calculateur-equation-simple" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-surface-900 text-surface-300">
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo variant="light" />
            </div>
            <p className="text-sm text-surface-400 leading-relaxed mb-6">
              CalculateurPro est la référence des calculateurs en ligne en France.
              Gratuit, rapide et précis pour tous vos besoins de calcul.
            </p>
            <div className="flex gap-3">
              {["Twitter / X", "Facebook", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-surface-800 hover:bg-brand-600 flex items-center justify-center transition-colors"
                  aria-label={social}
                >
                  <span className="text-xs">●</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4 text-sm">{category}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-surface-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-surface-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-surface-500">
            © {new Date().getFullYear()} CalculateurPro. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {["Mentions légales", "Confidentialité", "Contact"].map((item) => (
              <a key={item} href="#" className="text-xs text-surface-500 hover:text-surface-300 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
