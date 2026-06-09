# CalculateurPro 🧮

> Les meilleurs calculateurs gratuits en ligne en France — Finance, Santé, Mathématiques

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green)](LICENSE)

## 📋 Overview

CalculateurPro is a production-ready Next.js 15 application offering **20 free French calculators** across 3 categories, with full SEO optimization, responsive design and a clean design system.

## 🗂️ Project Structure

```
calculateur-pro/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   ├── sitemap.ts              # Auto-generated sitemap
│   ├── robots.ts               # robots.txt
│   ├── not-found.tsx           # 404 page
│   ├── finance/                # 8 finance calculators
│   ├── sante/                  # 6 health calculators
│   └── maths/                  # 6 math calculators
├── components/
│   ├── layout/                 # Navbar, Footer, HeroSection, CalculatorPageLayout
│   ├── ui/                     # CalculatorCard, FAQSection, Breadcrumb, Logo, RelatedCalculators
│   ├── calculators/            # 20 interactive calculator widgets
│   └── seo/                    # JsonLd structured data
├── data/
│   └── calculators.ts          # Calculator registry (all 20 calculators)
├── hooks/
│   └── useCalculator.ts        # Reusable calculator hook
├── lib/
│   ├── utils.ts                # Formatting & utility functions
│   └── metadata.ts             # SEO metadata helper
├── types/
│   └── index.ts                # TypeScript interfaces
└── public/
    ├── images/
    └── icons/
```

## 🧮 Calculators

### 💳 Finance (8)
| Calculator | Route |
|---|---|
| Calculateur de Prêt | `/finance/calculateur-pret` |
| Calculateur Hypothécaire | `/finance/calculateur-hypothecaire` |
| Intérêts Composés | `/finance/calculateur-interets-composes` |
| Calculateur d'Épargne | `/finance/calculateur-epargne` |
| Rendement Investissement | `/finance/calculateur-rendement-investissement` |
| Calculateur TVA | `/finance/calculateur-tva` |
| Marge Bénéficiaire | `/finance/calculateur-marge-beneficiaire` |
| Calculateur de Réduction | `/finance/calculateur-reduction` |

### ❤️ Santé (6)
| Calculator | Route |
|---|---|
| Calculateur IMC | `/sante/calculateur-imc` |
| Calculateur Calories | `/sante/calculateur-calories` |
| Poids Idéal | `/sante/calculateur-poids-ideal` |
| Besoins Hydriques | `/sante/calculateur-besoins-hydriques` |
| Métabolisme Basal | `/sante/calculateur-metabolisme-basal` |
| Fréquence Cardiaque | `/sante/calculateur-frequence-cardiaque` |

### 📐 Mathématiques (6)
| Calculator | Route |
|---|---|
| Calculateur de Pourcentage | `/maths/calculateur-pourcentage` |
| Calculateur de Moyenne | `/maths/calculateur-moyenne` |
| Calculateur de Fractions | `/maths/calculateur-fraction` |
| Règle de Trois | `/maths/calculateur-regle-de-trois` |
| Conversion d'Unités | `/maths/calculateur-conversion-unites` |
| Calculateur Équation | `/maths/calculateur-equation-simple` |

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+
- npm, yarn or pnpm

### Installation

```bash
git clone https://github.com/yourusername/calculateur-pro.git
cd calculateur-pro
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## ☁️ Deploy to Vercel (Recommended)

The easiest way to deploy:

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo
3. Set environment variable: `NEXT_PUBLIC_BASE_URL=https://your-domain.com`
4. Click **Deploy**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 🌐 Environment Variables

Create a `.env.local` file (copy from `.env.example`):

```env
NEXT_PUBLIC_BASE_URL=https://calculateur-pro.fr
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5.7
- **Styling**: Tailwind CSS 3.4
- **Fonts**: Fraunces (display) + DM Sans (body) via Google Fonts
- **SEO**: Automatic sitemap, robots.txt, OpenGraph, JSON-LD structured data

## 📄 License

MIT © CalculateurPro
