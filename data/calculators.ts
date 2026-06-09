import { Calculator, CategoryInfo } from "@/types";

export const calculators: Calculator[] = [
  // ── FINANCE ────────────────────────────────────────────────
  {
    slug: "calculateur-pret",
    name: "Calculateur de Prêt",
    description:
      "Calculez vos mensualités, le coût total et le tableau d'amortissement de votre prêt.",
    category: "finance",
    icon: "💳",
    keywords: ["prêt", "mensualité", "amortissement", "crédit", "taux"],
    formula: "M = P × [r(1+r)^n] / [(1+r)^n - 1]",
  },
  {
    slug: "calculateur-hypothecaire",
    name: "Calculateur Hypothécaire",
    description:
      "Simulez votre prêt immobilier et calculez vos remboursements mensuels.",
    category: "finance",
    icon: "🏠",
    keywords: ["hypothèque", "immobilier", "prêt immobilier", "maison"],
    formula: "M = P × [r(1+r)^n] / [(1+r)^n - 1]",
  },
  {
    slug: "calculateur-interets-composes",
    name: "Calculateur d'Intérêts Composés",
    description:
      "Visualisez la puissance des intérêts composés et faites croître votre capital.",
    category: "finance",
    icon: "📈",
    keywords: ["intérêts composés", "épargne", "rendement", "capital"],
    formula: "A = P(1 + r/n)^(nt)",
  },
  {
    slug: "calculateur-epargne",
    name: "Calculateur d'Épargne",
    description:
      "Planifiez votre épargne et calculez combien vous aurez dans le futur.",
    category: "finance",
    icon: "💰",
    keywords: ["épargne", "économies", "livret", "PEL"],
    formula: "FV = PV × (1+r)^n + PMT × [(1+r)^n - 1] / r",
  },
  {
    slug: "calculateur-rendement-investissement",
    name: "Calculateur de Rendement",
    description:
      "Calculez le retour sur investissement (ROI) et comparez vos placements.",
    category: "finance",
    icon: "📊",
    keywords: ["rendement", "ROI", "investissement", "placement"],
    formula: "ROI = (Gain - Coût) / Coût × 100",
  },
  {
    slug: "calculateur-tva",
    name: "Calculateur TVA",
    description:
      "Calculez rapidement la TVA française (20%, 10%, 5.5%, 2.1%) sur vos prix.",
    category: "finance",
    icon: "🧾",
    keywords: ["TVA", "taxe", "HT", "TTC", "France"],
    formula: "Prix TTC = Prix HT × (1 + TVA/100)",
  },
  {
    slug: "calculateur-marge-beneficiaire",
    name: "Calculateur de Marge",
    description:
      "Calculez votre marge bénéficiaire brute et nette pour optimiser vos prix.",
    category: "finance",
    icon: "💹",
    keywords: ["marge", "bénéfice", "profit", "prix de vente"],
    formula: "Marge = (Prix - Coût) / Prix × 100",
  },
  {
    slug: "calculateur-reduction",
    name: "Calculateur de Réduction",
    description:
      "Calculez instantanément le prix après réduction et l'économie réalisée.",
    category: "finance",
    icon: "🏷️",
    keywords: ["réduction", "remise", "soldes", "promo", "discount"],
    formula: "Prix final = Prix original × (1 - Réduction/100)",
  },
  // ── SANTÉ ──────────────────────────────────────────────────
  {
    slug: "calculateur-imc",
    name: "Calculateur IMC",
    description:
      "Calculez votre Indice de Masse Corporelle et interprétez votre résultat.",
    category: "sante",
    icon: "⚖️",
    keywords: ["IMC", "indice masse corporelle", "poids", "taille"],
    formula: "IMC = poids (kg) / taille² (m)",
  },
  {
    slug: "calculateur-calories",
    name: "Calculateur de Calories",
    description:
      "Estimez vos besoins caloriques journaliers selon votre activité physique.",
    category: "sante",
    icon: "🥗",
    keywords: ["calories", "TDEE", "alimentation", "régime", "énergie"],
    formula: "TDEE = BMR × Facteur d'activité",
  },
  {
    slug: "calculateur-poids-ideal",
    name: "Calculateur Poids Idéal",
    description:
      "Estimez votre poids idéal selon différentes formules médicales reconnues.",
    category: "sante",
    icon: "🎯",
    keywords: ["poids idéal", "poids santé", "corpulence", "Lorentz"],
    formula: "Lorentz: PI = Taille - 100 - (Taille - 150)/n",
  },
  {
    slug: "calculateur-besoins-hydriques",
    name: "Calculateur Besoins Hydriques",
    description:
      "Calculez votre besoin quotidien en eau selon votre poids et activité.",
    category: "sante",
    icon: "💧",
    keywords: ["eau", "hydratation", "besoins hydriques", "litre"],
    formula: "Eau (L) = Poids × 0.035",
  },
  {
    slug: "calculateur-metabolisme-basal",
    name: "Calculateur Métabolisme Basal",
    description:
      "Calculez votre métabolisme de base (BMR) avec les formules Harris-Benedict et Mifflin.",
    category: "sante",
    icon: "🔥",
    keywords: ["métabolisme basal", "BMR", "Harris-Benedict", "Mifflin"],
    formula: "Mifflin: BMR = 10P + 6.25T − 5A + 5 (H)",
  },
  {
    slug: "calculateur-frequence-cardiaque",
    name: "Calculateur Fréquence Cardiaque",
    description:
      "Calculez vos zones de fréquence cardiaque cibles pour optimiser l'entraînement.",
    category: "sante",
    icon: "❤️",
    keywords: ["fréquence cardiaque", "FC max", "zones cardiaques", "Karvonen"],
    formula: "FC max = 220 - Âge",
  },
  // ── MATHS ──────────────────────────────────────────────────
  {
    slug: "calculateur-pourcentage",
    name: "Calculateur de Pourcentage",
    description:
      "Calculez des pourcentages, variations et proportions en quelques secondes.",
    category: "maths",
    icon: "%",
    keywords: ["pourcentage", "proportion", "calcul", "variation"],
    formula: "Pourcentage = (Valeur / Total) × 100",
  },
  {
    slug: "calculateur-moyenne",
    name: "Calculateur de Moyenne",
    description:
      "Calculez la moyenne arithmétique, pondérée ou géométrique de vos données.",
    category: "maths",
    icon: "📐",
    keywords: ["moyenne", "arithmétique", "pondérée", "statistiques", "notes"],
    formula: "x̄ = (x₁ + x₂ + ... + xₙ) / n",
  },
  {
    slug: "calculateur-fraction",
    name: "Calculateur de Fractions",
    description:
      "Additionnez, soustrayez, multipliez et divisez des fractions facilement.",
    category: "maths",
    icon: "½",
    keywords: ["fraction", "numérateur", "dénominateur", "PGCD"],
    formula: "a/b + c/d = (ad + bc) / bd",
  },
  {
    slug: "calculateur-regle-de-trois",
    name: "Calculateur Règle de Trois",
    description:
      "Résolvez instantanément des problèmes de proportionnalité avec la règle de trois.",
    category: "maths",
    icon: "✖️",
    keywords: ["règle de trois", "proportionnalité", "rapport"],
    formula: "Si A→B, alors C→x : x = (B×C)/A",
  },
  {
    slug: "calculateur-conversion-unites",
    name: "Calculateur Conversion d'Unités",
    description:
      "Convertissez longueurs, poids, températures, volumes et toutes unités courantes.",
    category: "maths",
    icon: "🔄",
    keywords: ["conversion", "unités", "mesure", "longueur", "température"],
    formula: "Valeur convertie = Valeur × Facteur de conversion",
  },
  {
    slug: "calculateur-equation-simple",
    name: "Calculateur Équation",
    description:
      "Résolvez des équations du premier et second degré étape par étape.",
    category: "maths",
    icon: "🔢",
    keywords: ["équation", "premier degré", "second degré", "discriminant"],
    formula: "ax² + bx + c = 0 → Δ = b² - 4ac",
  },
];

export const categories: CategoryInfo[] = [
  {
    slug: "finance",
    name: "Finance",
    description: "Prêts, épargne, investissements et calculs financiers essentiels",
    color: "brand",
    gradient: "from-brand-500 to-brand-700",
    icon: "💳",
    count: 8,
  },
  {
    slug: "sante",
    name: "Santé",
    description: "IMC, calories, métabolisme et indicateurs de santé personnels",
    color: "emerald",
    gradient: "from-emerald-500 to-teal-600",
    icon: "❤️",
    count: 6,
  },
  {
    slug: "maths",
    name: "Mathématiques",
    description: "Pourcentages, fractions, conversions et calculs mathématiques courants",
    color: "violet",
    gradient: "from-violet-500 to-purple-700",
    icon: "📐",
    count: 6,
  },
];

export function getCalculatorsByCategory(category: string): Calculator[] {
  return calculators.filter((c) => c.category === category);
}

export function getCalculatorBySlug(slug: string): Calculator | undefined {
  return calculators.find((c) => c.slug === slug);
}

export function getRelatedCalculators(slug: string, limit = 3): Calculator[] {
  const calc = getCalculatorBySlug(slug);
  if (!calc) return [];
  return calculators
    .filter((c) => c.slug !== slug && c.category === calc.category)
    .slice(0, limit);
}

export function getCategoryInfo(slug: string): CategoryInfo | undefined {
  return categories.find((c) => c.slug === slug);
}
