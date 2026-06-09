import Link from "next/link";
import { calculators, categories } from "@/data/calculators";
import { CalculatorCard } from "@/components/ui/CalculatorCard";
import { HeroSection } from "@/components/layout/HeroSection";
import { FAQSection } from "@/components/ui/FAQSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CalculateurPro — Les meilleurs calculateurs gratuits en ligne en France",
  description:
    "Découvrez plus de 20 calculateurs gratuits : finance, santé et mathématiques. Prêt, IMC, TVA, pourcentage, calories. Simple, rapide, 100% gratuit.",
};

const homeFAQ = [
  {
    question: "Les calculateurs de CalculateurPro sont-ils vraiment gratuits ?",
    answer:
      "Oui, tous nos calculateurs sont entièrement gratuits et sans inscription. Vous pouvez les utiliser autant de fois que vous le souhaitez sans aucune limitation.",
  },
  {
    question: "Mes données sont-elles sauvegardées ?",
    answer:
      "Non. Tous les calculs sont effectués directement dans votre navigateur. Aucune donnée personnelle n'est envoyée à nos serveurs ni sauvegardée. Votre vie privée est protégée.",
  },
  {
    question: "Les résultats sont-ils fiables ?",
    answer:
      "Nos calculateurs utilisent des formules mathématiques et financières reconnues et validées. Pour des décisions importantes (prêt immobilier, santé), nous vous recommandons de consulter un professionnel.",
  },
  {
    question: "Puis-je utiliser CalculateurPro sur mobile ?",
    answer:
      "Absolument. CalculateurPro est conçu avec une approche mobile-first. Tous nos calculateurs fonctionnent parfaitement sur smartphone, tablette et ordinateur.",
  },
  {
    question: "Combien de calculateurs proposez-vous ?",
    answer:
      "Nous proposons actuellement 20 calculateurs répartis en 3 catégories : 8 calculateurs financiers, 6 calculateurs santé et 6 calculateurs mathématiques.",
  },
];

const stats = [
  { value: "20+", label: "Calculateurs gratuits" },
  { value: "3", label: "Catégories" },
  { value: "100%", label: "Gratuit & sans pub" },
  { value: "95+", label: "Score Lighthouse" },
];

const testimonials = [
  {
    name: "Marie Dupont",
    role: "Cadre bancaire, Lyon",
    text: "CalculateurPro m'a permis d'expliquer clairement à mes clients le coût total de leur crédit immobilier. Interface claire et résultats instantanés.",
    avatar: "MD",
  },
  {
    name: "Thomas Bernard",
    role: "Diététicien, Paris",
    text: "J'utilise les calculateurs IMC et calories quotidiennement avec mes patients. Les formules utilisées sont les bonnes et les résultats sont fiables.",
    avatar: "TB",
  },
  {
    name: "Lucie Martin",
    role: "Professeure de maths, Bordeaux",
    text: "Excellent pour illustrer les calculs de pourcentage et de fractions à mes élèves. L'affichage des formules est particulièrement pédagogique.",
    avatar: "LM",
  },
];

export default function HomePage() {
  const featuredCalcs = calculators.slice(0, 6);

  return (
    <>
      <HeroSection />

      {/* Stats */}
      <section className="bg-surface-50 border-y border-surface-100">
        <div className="container-xl py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-semibold text-brand-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-surface-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 container-xl">
        <div className="text-center mb-14">
          <span className="badge bg-brand-50 text-brand-600 border border-brand-100 mb-4">
            Nos catégories
          </span>
          <h2 className="section-title mb-4">Tous vos calculs au même endroit</h2>
          <p className="text-surface-500 max-w-2xl mx-auto">
            Finance, santé ou mathématiques : trouvez rapidement le calculateur qu'il vous faut.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/${cat.slug}`}
              className="group relative overflow-hidden card card-hover p-8"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br from-brand-500 to-violet-600" />
              <div className="relative">
                <div className="text-4xl mb-4">{cat.icon}</div>
                <h3 className="font-display text-xl font-semibold text-surface-900 mb-2 group-hover:text-brand-600 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-surface-500 text-sm leading-relaxed mb-4">
                  {cat.description}
                </p>
                <span className="text-xs text-brand-600 font-medium bg-brand-50 px-2.5 py-1 rounded-full">
                  {cat.count} calculateurs
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured */}
        <div className="mb-10">
          <h2 className="section-title mb-2">Calculateurs populaires</h2>
          <p className="text-surface-500 mb-8">Les plus utilisés par notre communauté</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCalcs.map((calc) => (
            <CalculatorCard key={calc.slug} calculator={calc} showCategory />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/finance" className="btn-secondary">
            Voir tous les calculateurs →
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-surface-50 border-y border-surface-100 py-20">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge bg-brand-50 text-brand-600 border border-brand-100 mb-4">
                Pourquoi CalculateurPro ?
              </span>
              <h2 className="section-title mb-6">Simple, rapide et fiable</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: "⚡",
                    title: "Résultats instantanés",
                    desc: "Calculs effectués en temps réel dans votre navigateur, sans délai.",
                  },
                  {
                    icon: "🔒",
                    title: "100% privé",
                    desc: "Aucune donnée n'est envoyée à nos serveurs. Vos informations restent sur votre appareil.",
                  },
                  {
                    icon: "📱",
                    title: "Optimisé mobile",
                    desc: "Interface pensée pour mobile avec des boutons larges et une saisie intuitive.",
                  },
                  {
                    icon: "🎓",
                    title: "Pédagogique",
                    desc: "Chaque calculateur affiche les formules et explique le détail du calcul.",
                  },
                ].map((b) => (
                  <div key={b.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-surface-200 flex items-center justify-center text-xl flex-shrink-0 shadow-sm">
                      {b.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-surface-800 mb-1">{b.title}</h3>
                      <p className="text-sm text-surface-500">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Illustration */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="200" cy="200" r="180" fill="#f0f4ff" />
                  <rect x="100" y="80" width="200" height="260" rx="20" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                  <rect x="120" y="100" width="160" height="60" rx="10" fill="#f0f4ff" />
                  <text x="270" y="140" fontSize="28" textAnchor="end" fill="#6366f1" fontFamily="monospace" fontWeight="bold">2 847€</text>
                  {[0,1,2,3].map((row) =>
                    [0,1,2].map((col) => (
                      <rect key={`${row}-${col}`} x={120+col*57} y={180+row*38} width="44" height="28" rx="6"
                        fill={row===3&&col===2 ? "#6366f1" : "#f8fafc"} stroke="#e2e8f0" strokeWidth="1" />
                    ))
                  )}
                  <circle cx="340" cy="120" r="30" fill="#6366f1" fillOpacity="0.1" />
                  <text x="340" y="128" textAnchor="middle" fontSize="20">%</text>
                  <circle cx="60" cy="280" r="24" fill="#10b981" fillOpacity="0.1" />
                  <text x="60" y="288" textAnchor="middle" fontSize="16">€</text>
                  <circle cx="340" cy="300" r="20" fill="#7c3aed" fillOpacity="0.1" />
                  <text x="340" y="307" textAnchor="middle" fontSize="14">+</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface-900 py-20">
        <div className="container-xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-4">
              Ils utilisent CalculateurPro
            </h2>
            <p className="text-surface-400">Des professionnels et particuliers font confiance à nos outils</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-surface-800 rounded-2xl p-6 border border-surface-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center text-white font-semibold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{t.name}</p>
                    <p className="text-surface-400 text-xs">{t.role}</p>
                  </div>
                </div>
                <p className="text-surface-300 text-sm leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <div className="flex gap-1 mt-4">
                  {Array(5).fill(0).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 container-xl max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Questions fréquentes</h2>
          <p className="text-surface-500">Tout ce que vous devez savoir sur CalculateurPro</p>
        </div>
        <FAQSection items={homeFAQ} />
      </section>

      {/* CTA */}
      <section className="py-20 container-xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-violet-700 p-12 text-center">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-4">
              Prêt à calculer ?
            </h2>
            <p className="text-brand-100 mb-8 max-w-lg mx-auto">
              Accédez immédiatement à tous nos calculateurs gratuits. Aucune inscription requise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/finance/calculateur-pret"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-brand-700 font-semibold hover:bg-brand-50 transition-colors shadow-lg"
              >
                💳 Calculateur de prêt
              </Link>
              <Link
                href="/sante/calculateur-imc"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-colors"
              >
                ⚖️ Calculateur IMC
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
