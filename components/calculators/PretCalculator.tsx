"use client";
import { useState } from "react";
import { formatCurrency, formatNumber } from "@/lib/utils";

export function PretCalculator() {
  const [montant, setMontant] = useState("200000");
  const [taux, setTaux] = useState("3.5");
  const [duree, setDuree] = useState("240");
  const [result, setResult] = useState<{
    mensualite: number;
    coutTotal: number;
    interetsTotal: number;
  } | null>(null);

  const calculate = () => {
    const P = parseFloat(montant);
    const r = parseFloat(taux) / 100 / 12;
    const n = parseInt(duree);

    if (!P || !n || isNaN(r)) return;

    const mensualite =
      r === 0 ? P / n : (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    setResult({
      mensualite,
      coutTotal: mensualite * n,
      interetsTotal: mensualite * n - P,
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="label">Montant du prêt (€)</label>
        <input
          type="number"
          className="input-field"
          value={montant}
          onChange={(e) => setMontant(e.target.value)}
          placeholder="200 000"
          min="0"
        />
      </div>
      <div>
        <label className="label">Taux d'intérêt annuel (%)</label>
        <input
          type="number"
          step="0.1"
          className="input-field"
          value={taux}
          onChange={(e) => setTaux(e.target.value)}
          placeholder="3.5"
          min="0"
        />
      </div>
      <div>
        <label className="label">Durée (mois)</label>
        <select className="select-field" value={duree} onChange={(e) => setDuree(e.target.value)}>
          <option value="60">5 ans (60 mois)</option>
          <option value="84">7 ans (84 mois)</option>
          <option value="120">10 ans (120 mois)</option>
          <option value="180">15 ans (180 mois)</option>
          <option value="240">20 ans (240 mois)</option>
          <option value="300">25 ans (300 mois)</option>
          <option value="360">30 ans (360 mois)</option>
        </select>
      </div>

      <button onClick={calculate} className="btn-primary w-full justify-center">
        Calculer ma mensualité
      </button>

      {result && (
        <div className="space-y-3 mt-4 pt-4 border-t border-surface-100">
          <div className="result-card">
            <p className="text-xs text-brand-600 font-medium mb-1">Mensualité</p>
            <p className="result-value">{formatCurrency(result.mensualite)}</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-surface-50 border border-surface-100">
              <p className="text-xs text-surface-500 mb-1">Coût total</p>
              <p className="font-semibold text-surface-800">{formatCurrency(result.coutTotal)}</p>
            </div>
            <div className="p-3 rounded-xl bg-surface-50 border border-surface-100">
              <p className="text-xs text-surface-500 mb-1">Total intérêts</p>
              <p className="font-semibold text-surface-800">{formatCurrency(result.interetsTotal)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
