import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-xl py-32 text-center">
      <div className="text-8xl mb-6">🔢</div>
      <h1 className="text-4xl font-display font-semibold text-surface-900 mb-4">
        Page introuvable
      </h1>
      <p className="text-surface-500 mb-10 max-w-md mx-auto">
        Cette page n&apos;existe pas ou a été déplacée. Retournez à l&apos;accueil pour
        découvrir tous nos calculateurs.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/" className="btn-primary">
          ← Retour à l&apos;accueil
        </Link>
        <Link href="/finance" className="btn-secondary">
          Calculateurs Finance
        </Link>
      </div>
    </div>
  );
}
