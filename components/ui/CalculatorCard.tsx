import Link from "next/link";
import { Calculator } from "@/types";
import { categoryColors, categoryLabels } from "@/lib/utils";

interface CalculatorCardProps {
  calculator: Calculator;
  showCategory?: boolean;
}

export function CalculatorCard({ calculator, showCategory = false }: CalculatorCardProps) {
  const href = `/${calculator.category}/${calculator.slug}`;

  return (
    <Link href={href} className="card card-hover group p-6 flex flex-col gap-4 cursor-pointer block">
      <div className="flex items-start justify-between">
        <div className="w-12 h-12 rounded-xl bg-surface-50 border border-surface-100 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
          {calculator.icon}
        </div>
        {showCategory && (
          <span className={`badge border ${categoryColors[calculator.category]}`}>
            {categoryLabels[calculator.category]}
          </span>
        )}
      </div>

      <div>
        <h3 className="font-display font-semibold text-surface-900 group-hover:text-brand-600 transition-colors mb-1.5">
          {calculator.name}
        </h3>
        <p className="text-sm text-surface-500 leading-relaxed line-clamp-2">
          {calculator.description}
        </p>
      </div>

      <div className="flex items-center text-brand-600 text-sm font-medium mt-auto opacity-0 group-hover:opacity-100 transition-opacity">
        Utiliser ce calculateur
        <svg className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
