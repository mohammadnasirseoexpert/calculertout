"use client";
import { useState } from "react";
import { formatNumber } from "@/lib/utils";

export function MoyenneCalculator() {
  const [valeurs, setValeurs] = useState("");
  const [result, setResult] = useState<{
    moyenne: number;
    min: number;
    max: number;
    count: number;
    mediane: number;
  } | null>(null);

  const calculate = () => {
    const nums = valeurs
      .split(/[\s,;]+/)
      .map((v) => parseFloat(v.replace(",", ".")))
      .filter((n) => !isNaN(n));

    if (nums.length === 0) return;

    const sorted = [...nums].sort((a, b) => a - b);
    const mediane =
      sorted.length % 2 === 0
        ? (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2
        : sorted[Math.floor(sorted.length / 2)];

    setResult({
      moyenne: nums.reduce((a, b) => a + b, 0) / nums.length,
      min: Math.min(...nums),
      max: Math.max(...nums),
      count: nums.length,
      mediane,
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="label">Valeurs (séparées par virgule, espace ou point-virgule)</label>
        <textarea
          className="input-field h-28 resize-none"
          value={valeurs}
          onChange={(e) => setValeurs(e.target.value)}
          placeholder="Ex: 12, 15, 18, 9, 14"
        />
      </div>

      <button onClick={calculate} className="btn-primary w-full justify-center">Calculer la moyenne</button>

      {result && (
        <div className="space-y-2 pt-4 border-t border-surface-100">
          <div className="result-card">
            <p className="text-xs text-brand-600 font-medium mb-1">Moyenne arithmétique</p>
            <p className="result-value">{formatNumber(result.moyenne, 4)}</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: "Médiane", value: formatNumber(result.mediane, 4) },
              { label: "Nb de valeurs", value: result.count.toString() },
              { label: "Minimum", value: formatNumber(result.min, 4) },
              { label: "Maximum", value: formatNumber(result.max, 4) },
            ].map((item) => (
              <div key={item.label} className="p-3 rounded-xl bg-surface-50 border border-surface-100">
                <p className="text-xs text-surface-500 mb-1">{item.label}</p>
                <p className="font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
