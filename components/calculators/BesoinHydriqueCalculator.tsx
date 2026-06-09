"use client";
import { useState } from "react";
import { formatNumber } from "@/lib/utils";

export function BesoinHydriqueCalculator() {
  const [poids, setPoids] = useState("");
  const [activite, setActivite] = useState("modere");
  const [climat, setClimat] = useState("tempere");
  const [result, setResult] = useState<{
    base: number;
    total: number;
    verres: number;
  } | null>(null);

  const calculate = () => {
    const p = parseFloat(poids);
    if (!p) return;

    const base = p * 0.035;

    const activiteBonus: Record<string, number> = {
      sedentaire: 0,
      leger: 0.3,
      modere: 0.5,
      intense: 0.8,
      tres_intense: 1.2,
    };

    const climatBonus: Record<string, number> = {
      froid: -0.2,
      tempere: 0,
      chaud: 0.5,
      tres_chaud: 0.8,
    };

    const total = base + (activiteBonus[activite] || 0) + (climatBonus[climat] || 0);
    setResult({ base, total, verres: Math.ceil(total / 0.25) });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="label">Poids (kg)</label>
        <input
          type="number"
          className="input-field"
          value={poids}
          onChange={(e) => setPoids(e.target.value)}
          placeholder="70"
        />
      </div>

      <div>
        <label className="label">Niveau d'activité physique</label>
        <select
          className="select-field"
          value={activite}
          onChange={(e) => setActivite(e.target.value)}
        >
          <option value="sedentaire">Sédentaire (bureau, peu actif)</option>
          <option value="leger">Légèrement actif (marche quotidienne)</option>
          <option value="modere">Modérément actif (sport 3×/sem)</option>
          <option value="intense">Très actif (sport 5×/sem)</option>
          <option value="tres_intense">Sportif intense (sport quotidien)</option>
        </select>
      </div>

      <div>
        <label className="label">Climat</label>
        <select
          className="select-field"
          value={climat}
          onChange={(e) => setClimat(e.target.value)}
        >
          <option value="froid">Froid (&lt; 10°C)</option>
          <option value="tempere">Tempéré (10–25°C)</option>
          <option value="chaud">Chaud (25–35°C)</option>
          <option value="tres_chaud">Très chaud (&gt; 35°C)</option>
        </select>
      </div>

      <button onClick={calculate} className="btn-primary w-full justify-center">
        Calculer mes besoins en eau
      </button>

      {result && (
        <div className="space-y-2 pt-4 border-t border-surface-100">
          <div className="result-card">
            <p className="text-xs text-brand-600 font-medium mb-1">Besoin hydrique journalier</p>
            <p className="result-value">{formatNumber(result.total, 2)} L</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-3 rounded-xl bg-surface-50 border border-surface-100">
              <p className="text-xs text-surface-500 mb-1">Besoin de base</p>
              <p className="font-semibold">{formatNumber(result.base, 2)} L</p>
            </div>
            <div className="p-3 rounded-xl bg-blue-50 border border-blue-100">
              <p className="text-xs text-blue-600 mb-1">En verres (25cl)</p>
              <p className="font-semibold text-blue-700">{result.verres} verres</p>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-surface-50 border border-surface-100 text-xs text-surface-500">
            💡 Pensez à boire régulièrement, sans attendre la soif — surtout lors d'efforts physiques.
          </div>
        </div>
      )}
    </div>
  );
}
