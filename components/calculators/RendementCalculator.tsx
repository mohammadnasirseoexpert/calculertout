"use client";
import { useState } from "react";
import { formatNumber, formatCurrency } from "@/lib/utils";

export function RendementCalculator() {
  const [investissement, setInvestissement] = useState("10000");
  const [gain, setGain] = useState("12000");
  const [duree, setDuree] = useState("3");
  const [result, setResult] = useState<{ roi: number; gainNet: number; roiAnnuel: number } | null>(null);

  const calculate = () => {
    const inv = parseFloat(investissement), g = parseFloat(gain), d = parseFloat(duree);
    const gainNet = g - inv;
    const roi = (gainNet / inv) * 100;
    const roiAnnuel = (Math.pow(g / inv, 1 / d) - 1) * 100;
    setResult({ roi, gainNet, roiAnnuel });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="label">Investissement initial (€)</label>
        <input type="number" className="input-field" value={investissement} onChange={(e) => setInvestissement(e.target.value)} placeholder="10 000" />
      </div>
      <div>
        <label className="label">Valeur finale (€)</label>
        <input type="number" className="input-field" value={gain} onChange={(e) => setGain(e.target.value)} placeholder="12 000" />
      </div>
      <div>
        <label className="label">Durée (ans)</label>
        <input type="number" className="input-field" value={duree} onChange={(e) => setDuree(e.target.value)} placeholder="3" />
      </div>
      <button onClick={calculate} className="btn-primary w-full justify-center">Calculer le rendement</button>

      {result && (
        <div className="space-y-2 pt-4 border-t border-surface-100">
          <div className="result-card">
            <p className="text-xs text-brand-600 font-medium mb-1">ROI total</p>
            <p className="result-value">{formatNumber(result.roi, 2)}%</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100">
              <p className="text-xs text-emerald-600 mb-1">Gain net</p>
              <p className="font-semibold text-emerald-700">{formatCurrency(result.gainNet)}</p>
            </div>
            <div className="p-3 rounded-xl bg-surface-50 border border-surface-100">
              <p className="text-xs text-surface-500 mb-1">Rendement annuel</p>
              <p className="font-semibold">{formatNumber(result.roiAnnuel, 2)}%/an</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
