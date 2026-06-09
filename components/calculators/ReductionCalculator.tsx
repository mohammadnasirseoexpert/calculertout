"use client";
import { useState } from "react";
import { formatCurrency, formatNumber } from "@/lib/utils";

export function ReductionCalculator() {
  const [prix, setPrix] = useState("");
  const [reduction, setReduction] = useState("");
  const [result, setResult] = useState<{ final: number; economie: number; pct: number } | null>(null);

  const calculate = () => {
    const p = parseFloat(prix.replace(",", ".")), r = parseFloat(reduction.replace(",", "."));
    if (!p || isNaN(r)) return;
    const economie = p * (r / 100);
    setResult({ final: p - economie, economie, pct: r });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="label">Prix original (€)</label>
        <input type="number" className="input-field" value={prix} onChange={(e) => setPrix(e.target.value)} placeholder="150,00" />
      </div>
      <div>
        <label className="label">Réduction (%)</label>
        <div className="flex gap-2 flex-wrap mb-2">
          {[10, 15, 20, 25, 30, 50].map((r) => (
            <button key={r} onClick={() => setReduction(r.toString())} className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${reduction === r.toString() ? "bg-brand-600 text-white border-brand-600" : "bg-white border-surface-200 text-surface-600 hover:border-brand-300"}`}>
              -{r}%
            </button>
          ))}
        </div>
        <input type="number" className="input-field" value={reduction} onChange={(e) => setReduction(e.target.value)} placeholder="20" />
      </div>
      <button onClick={calculate} className="btn-primary w-full justify-center">Calculer le prix réduit</button>

      {result && (
        <div className="space-y-2 pt-4 border-t border-surface-100">
          <div className="result-card">
            <p className="text-xs text-brand-600 font-medium mb-1">Prix après réduction</p>
            <p className="result-value">{formatCurrency(result.final)}</p>
          </div>
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex justify-between items-center">
            <span className="text-sm text-emerald-700 font-medium">Vous économisez</span>
            <span className="text-lg font-bold text-emerald-700">{formatCurrency(result.economie)}</span>
          </div>
        </div>
      )}
    </div>
  );
}
