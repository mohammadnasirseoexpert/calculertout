import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://calculateur-pro.fr"
  ),
  title: {
    default: "CalculateurPro — Les meilleurs calculateurs gratuits en ligne",
    template: "%s | CalculateurPro",
  },
  description:
    "CalculateurPro propose plus de 20 calculateurs gratuits en ligne : finance, santé, mathématiques. Prêt, IMC, TVA, pourcentage, calories et bien plus.",
  keywords:
    "calculateur en ligne, calculateur gratuit, calculateur IMC, calculateur prêt, calculateur TVA",
  authors: [{ name: "CalculateurPro" }],
  creator: "CalculateurPro",
  publisher: "CalculateurPro",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "CalculateurPro",
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
