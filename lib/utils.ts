export function formatCurrency(value: number, currency = "EUR"): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatNumber(value: number, decimals = 2): string {
  return new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals,
  }).format(value);
}

export function formatPercent(value: number, decimals = 2): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "percent",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value / 100);
}

export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

export function simplifyFraction(num: number, den: number): [number, number] {
  const d = gcd(Math.abs(num), Math.abs(den));
  return [num / d, den / d];
}

export function generateAmortizationSchedule(
  principal: number,
  annualRate: number,
  months: number
): Array<{
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}> {
  const monthlyRate = annualRate / 100 / 12;
  const payment =
    monthlyRate === 0
      ? principal / months
      : (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

  const schedule = [];
  let balance = principal;

  for (let month = 1; month <= months; month++) {
    const interest = balance * monthlyRate;
    const principalPayment = payment - interest;
    balance -= principalPayment;

    schedule.push({
      month,
      payment,
      principal: principalPayment,
      interest,
      balance: Math.max(0, balance),
    });
  }

  return schedule;
}

export const categoryLabels: Record<string, string> = {
  finance: "Finance",
  sante: "Santé",
  maths: "Mathématiques",
};

export const categoryHrefs: Record<string, string> = {
  finance: "/finance",
  sante: "/sante",
  maths: "/maths",
};

export const categoryColors: Record<string, string> = {
  finance: "bg-brand-50 text-brand-700 border-brand-100",
  sante: "bg-emerald-50 text-emerald-700 border-emerald-100",
  maths: "bg-violet-50 text-violet-700 border-violet-100",
};
