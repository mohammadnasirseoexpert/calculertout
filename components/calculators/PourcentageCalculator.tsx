"use client";
import { useState } from "react";
import { formatNumber } from "@/lib/utils";

type Mode = "valeur" | "quel-pct" | "variation";

export function PourcentageCalculator() {
  const [mode, setMode] = useState<Mode>("valeur");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const va = parseFloat(a.replace(",", "."));
    const vb = parseFloat(b.replace(",", "."));
    if (isNaN(va) || isNaN(vb)) return;

    if (mode === "valeur") {
      setResult(`${formatNumber((va * vb) / 100, 4)} (${vb}% de ${va})`);
    } else if (mode === "quel-pct") {
      setResult(`${formatNumber((va / vb) * 100, 4)}% (${va} représente …% de ${vb})`);
    } else {
      const variation = ((vb - va) / va) * 100;
      const sign = variation >= 0 ? "+" : "";
      setResult(`${sign}${formatNumber(variation, 2)}% (variation de ${va} à ${vb})`);
    }
  };

  const modes: { key: Mode; label: string; labelA: string; labelB: string }[] = [
    { key: "valeur", label: "X% de Y", labelA: "Valeur totale (Y)", labelB: "Pourcentage (%)" },
    { key: "quel-pct", label: "X est X% de Y", labelA: "Valeur (X)", labelB: "Total (Y)" },
    { key: "variation", label: "Variation %", labelA: "Valeur initiale", labelB: "Valeur finale" },
  ];

  const current = modes.find((m) => m.key === mode)!;

  return (
    <div className="space-y-4">
      <div>
        <label className="label">Type de calcul</label>
        <div className="grid grid-cols-3 gap-1 rounded-xl border border-surface-200 p-1 bg-surface-50">
          {modes.map((m) => (
            <button
              key={m.key}
              className={`py-2 px-2 text-xs font-medium rounded-lg transition-colors ${mode === m.key ? "bg-white shadow-sm text-brand-700 border border-surface-200" : "text-surface-500 hover:text-surface-700"}`}
              onClick={() => { setMode(m.key); setResult(null); }}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="label">{current.labelA}</label>
        <input type="number" className="input-field" value={a} onChange={(e) => setA(e.target.value)} placeholder="Ex: 200" />
      </div>
      <div>
        <label className="label">{current.labelB}</label>
        <input type="number" className="input-field" value={b} onChange={(e) => setB(e.target.value)} placeholder="Ex: 15" />
      </div>

      <button onClick={calculate} className="btn-primary w-full justify-center">Calculer</button>

      {result && (
        <div className="result-card pt-4 border-t border-surface-100 mt-2">
          <p className="text-xs text-brand-600 font-medium mb-1">Résultat</p>
          <p className="text-xl font-display font-semibold text-brand-700">{result}</p>
        </div>
      )}
    </div>
  );
}
