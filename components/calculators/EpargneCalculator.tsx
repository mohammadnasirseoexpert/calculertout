"use client";
import { useState } from "react";
import { formatCurrency } from "@/lib/utils";

export function EpargneCalculator() {
  const [objectif, setObjectif] = useState("50000");
  const [capital, setCapital] = useState("5000");
  const [taux, setTaux] = useState("3");
  const [duree, setDuree] = useState("10");
  const [result, setResult] = useState<{ futureValue: number; versementMensuel: number; total: number } | null>(null);

  const calculate = () => {
    const PV = parseFloat(capital), r = parseFloat(taux) / 100 / 12, n = parseFloat(duree) * 12;
    const FV = PV * Math.pow(1 + r, n);
    const manque = parseFloat(objectif) - FV;
    const versement = r === 0 ? manque / n : manque * r / (Math.pow(1 + r, n) - 1);
    const futureValue = FV + (versement * (Math.pow(1 + r, n) - 1)) / r;
    setResult({ futureValue, versementMensuel: Math.max(0, versement), total: PV + Math.max(0, versement) * n });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="label">Objectif d'épargne (€)</label>
        <input type="number" className="input-field" value={objectif} onChange={(e) => setObjectif(e.target.value)} placeholder="50 000" />
      </div>
      <div>
        <label className="label">Capital de départ (€)</label>
        <input type="number" className="input-field" value={capital} onChange={(e) => setCapital(e.target.value)} placeholder="5 000" />
      </div>
      <div>
        <label className="label">Taux annuel (%)</label>
        <input type="number" step="0.1" className="input-field" value={taux} onChange={(e) => setTaux(e.target.value)} placeholder="3" />
      </div>
      <div>
        <label className="label">Durée (ans)</label>
        <input type="number" className="input-field" value={duree} onChange={(e) => setDuree(e.target.value)} placeholder="10" />
      </div>
      <button onClick={calculate} className="btn-primary w-full justify-center">Planifier mon épargne</button>

      {result && (
        <div className="space-y-2 pt-4 border-t border-surface-100">
          <div className="result-card">
            <p className="text-xs text-brand-600 font-medium mb-1">Versement mensuel nécessaire</p>
            <p className="result-value">{formatCurrency(result.versementMensuel)}/mois</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-3 rounded-xl bg-surface-50 border border-surface-100">
              <p className="text-xs text-surface-500 mb-1">Capital final</p>
              <p className="font-semibold">{formatCurrency(result.futureValue)}</p>
            </div>
            <div className="p-3 rounded-xl bg-surface-50 border border-surface-100">
              <p className="text-xs text-surface-500 mb-1">Total versé</p>
              <p className="font-semibold">{formatCurrency(result.total)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
