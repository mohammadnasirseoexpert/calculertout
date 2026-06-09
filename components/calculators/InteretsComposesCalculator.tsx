"use client";
import { useState } from "react";
import { formatCurrency, formatNumber } from "@/lib/utils";

export function InteretsComposesCalculator() {
  const [capital, setCapital] = useState("10000");
  const [taux, setTaux] = useState("5");
  const [duree, setDuree] = useState("10");
  const [freq, setFreq] = useState("12");
  const [apport, setApport] = useState("0");
  const [result, setResult] = useState<{
    montantFinal: number;
    interets: number;
    capitalTotal: number;
  } | null>(null);

  const calculate = () => {
    const P = parseFloat(capital), r = parseFloat(taux) / 100,
      t = parseFloat(duree), n = parseFloat(freq), pmt = parseFloat(apport);

    const A = P * Math.pow(1 + r / n, n * t) + (pmt * (Math.pow(1 + r / n, n * t) - 1)) / (r / n);
    const capitalTotal = P + pmt * n * t;
    setResult({ montantFinal: A, interets: A - capitalTotal, capitalTotal });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="label">Capital initial (€)</label>
        <input type="number" className="input-field" value={capital} onChange={(e) => setCapital(e.target.value)} placeholder="10 000" />
      </div>
      <div>
        <label className="label">Taux d'intérêt annuel (%)</label>
        <input type="number" step="0.1" className="input-field" value={taux} onChange={(e) => setTaux(e.target.value)} placeholder="5" />
      </div>
      <div>
        <label className="label">Versement mensuel (€)</label>
        <input type="number" className="input-field" value={apport} onChange={(e) => setApport(e.target.value)} placeholder="0" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="label">Durée (ans)</label>
          <input type="number" className="input-field" value={duree} onChange={(e) => setDuree(e.target.value)} placeholder="10" />
        </div>
        <div>
          <label className="label">Capitalisation</label>
          <select className="select-field" value={freq} onChange={(e) => setFreq(e.target.value)}>
            <option value="1">Annuelle</option>
            <option value="4">Trimestrielle</option>
            <option value="12">Mensuelle</option>
            <option value="365">Journalière</option>
          </select>
        </div>
      </div>
      <button onClick={calculate} className="btn-primary w-full justify-center">Calculer</button>

      {result && (
        <div className="space-y-2 pt-4 border-t border-surface-100">
          <div className="result-card">
            <p className="text-xs text-brand-600 font-medium mb-1">Capital final</p>
            <p className="result-value">{formatCurrency(result.montantFinal)}</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100">
              <p className="text-xs text-emerald-600 mb-1">Intérêts gagnés</p>
              <p className="font-semibold text-emerald-700">{formatCurrency(result.interets)}</p>
            </div>
            <div className="p-3 rounded-xl bg-surface-50 border border-surface-100">
              <p className="text-xs text-surface-500 mb-1">Capital versé</p>
              <p className="font-semibold">{formatCurrency(result.capitalTotal)}</p>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-surface-50 border border-surface-100">
            <p className="text-xs text-surface-500 mb-1">Rendement total</p>
            <p className="font-semibold text-brand-700">{formatNumber((result.interets / result.capitalTotal) * 100, 1)}%</p>
          </div>
        </div>
      )}
    </div>
  );
}
