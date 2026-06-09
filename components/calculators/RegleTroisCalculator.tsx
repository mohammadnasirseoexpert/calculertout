"use client";
import { useState } from "react";
import { formatNumber } from "@/lib/utils";

export function RegleTroisCalculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState<{ x: number; explanation: string } | null>(null);

  // A → B, C → x
  const calculate = () => {
    const vA = parseFloat(a.replace(",", "."));
    const vB = parseFloat(b.replace(",", "."));
    const vC = parseFloat(c.replace(",", "."));
    if (!vA || !vB || !vC || vA === 0) return;

    const x = (vB * vC) / vA;
    setResult({
      x,
      explanation: `Si ${vA} donne ${vB}, alors ${vC} donne : (${vB} × ${vC}) ÷ ${vA} = ${formatNumber(x, 6)}`,
    });
  };

  return (
    <div className="space-y-4">
      <div className="p-3 bg-brand-50 border border-brand-100 rounded-xl text-sm text-brand-700">
        <p className="font-medium mb-1">Principe :</p>
        <p className="font-mono text-xs">Si A → B, alors C → x = (B × C) / A</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="label">A (quantité de référence)</label>
          <input
            type="number"
            className="input-field"
            value={a}
            onChange={(e) => setA(e.target.value)}
            placeholder="Ex: 5"
          />
        </div>
        <div>
          <label className="label">B (valeur correspondante)</label>
          <input
            type="number"
            className="input-field"
            value={b}
            onChange={(e) => setB(e.target.value)}
            placeholder="Ex: 30"
          />
        </div>
      </div>

      <div>
        <label className="label">C (nouvelle quantité)</label>
        <input
          type="number"
          className="input-field"
          value={c}
          onChange={(e) => setC(e.target.value)}
          placeholder="Ex: 8"
        />
      </div>

      <button onClick={calculate} className="btn-primary w-full justify-center">
        Trouver X
      </button>

      {result && (
        <div className="space-y-2 pt-4 border-t border-surface-100">
          <div className="result-card">
            <p className="text-xs text-brand-600 font-medium mb-1">Résultat X =</p>
            <p className="result-value">{formatNumber(result.x, 6)}</p>
          </div>
          <div className="p-3 rounded-xl bg-surface-50 border border-surface-200">
            <p className="text-xs font-mono text-surface-600 leading-relaxed">{result.explanation}</p>
          </div>
        </div>
      )}

      {/* Example */}
      <div className="p-3 bg-surface-50 border border-surface-100 rounded-xl">
        <p className="text-xs text-surface-500 font-medium mb-1.5">Exemple : recette pour 4 personnes → 6 personnes</p>
        <p className="text-xs text-surface-500">A=4, B=200g de farine, C=6 → X = 300g</p>
      </div>
    </div>
  );
}
