"use client";
import { useState } from "react";
import { formatNumber, formatCurrency } from "@/lib/utils";

export function MargeCalculator() {
  const [cout, setCout] = useState("");
  const [prix, setPrix] = useState("");
  const [result, setResult] = useState<{ marge: number; markup: number; profit: number } | null>(null);

  const calculate = () => {
    const c = parseFloat(cout.replace(",", ".")), p = parseFloat(prix.replace(",", "."));
    if (!c || !p || p <= 0) return;
    setResult({ marge: ((p - c) / p) * 100, markup: ((p - c) / c) * 100, profit: p - c });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="label">Coût de revient (€)</label>
        <input type="number" className="input-field" value={cout} onChange={(e) => setCout(e.target.value)} placeholder="50,00" />
      </div>
      <div>
        <label className="label">Prix de vente (€)</label>
        <input type="number" className="input-field" value={prix} onChange={(e) => setPrix(e.target.value)} placeholder="80,00" />
      </div>
      <button onClick={calculate} className="btn-primary w-full justify-center">Calculer la marge</button>

      {result && (
        <div className="space-y-2 pt-4 border-t border-surface-100">
          <div className="result-card">
            <p className="text-xs text-brand-600 font-medium mb-1">Marge bénéficiaire</p>
            <p className="result-value">{formatNumber(result.marge, 2)}%</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100">
              <p className="text-xs text-emerald-600 mb-1">Bénéfice brut</p>
              <p className="font-semibold text-emerald-700">{formatCurrency(result.profit)}</p>
            </div>
            <div className="p-3 rounded-xl bg-surface-50 border border-surface-100">
              <p className="text-xs text-surface-500 mb-1">Markup</p>
              <p className="font-semibold">{formatNumber(result.markup, 2)}%</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
