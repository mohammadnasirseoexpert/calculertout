import Link from "next/link";
import { Calculator } from "@/types";

interface RelatedCalculatorsProps {
  calculators: Calculator[];
}

export function RelatedCalculators({ calculators }: RelatedCalculatorsProps) {
  if (calculators.length === 0) return null;

  return (
    <div className="mt-12 pt-12 border-t border-surface-100">
      <h2 className="text-xl font-display font-semibold text-surface-900 mb-6">
        Calculateurs similaires
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {calculators.map((calc) => (
          <Link
            key={calc.slug}
            href={`/${calc.category}/${calc.slug}`}
            className="group p-4 rounded-xl border border-surface-200 hover:border-brand-300 hover:bg-brand-50 transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{calc.icon}</span>
              <div>
                <p className="text-sm font-medium text-surface-800 group-hover:text-brand-700 transition-colors">
                  {calc.name}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
