export interface Calculator {
  slug: string;
  name: string;
  description: string;
  category: Category;
  icon: string;
  keywords: string[];
  formula?: string;
}

export type Category = "finance" | "sante" | "maths";

export interface CategoryInfo {
  slug: Category;
  name: string;
  description: string;
  color: string;
  gradient: string;
  icon: string;
  count: number;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CalculatorResult {
  label: string;
  value: string | number;
  unit?: string;
  highlight?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}
