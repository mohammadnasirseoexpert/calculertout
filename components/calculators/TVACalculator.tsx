"use client";
import { useState } from "react";
import { formatCurrency } from "@/lib/utils";

export function TVACalculator() {
  const [prix, setPrix] = useState("");
  const [taux, setTaux] = useState("20");
  const [sens, setSens] = useState<"ht-to-ttc" | "ttc-to-ht">("ht-to-ttc");
  const [result, setResult] = useState<{ ht: number; ttc: number; tva: number } | null>(null);

  const calculate = () => {
    const p = parseFloat(prix.replace(",", "."));
    const t = parseFloat(taux) / 100;
    if (isNaN(p) || p <= 0) return;

    let ht: number, ttc: number, tva: number;
    if (sens === "ht-to-ttc") {
      ht = p;
      ttc = p * (1 + t);
      tva = ttc - ht;
    } else {
      ttc = p;
      ht = p / (1 + t);
      tva = ttc - ht;
    }
    setResult({ ht, ttc, tva });
  };

  return (
    <div className="space-y-4">
      <div className="flex rounded-xl overflow-hidden border border-surface-200">
        <button
          className={`flex-1 py-2.5 text-sm font-medium transition-colors ${sens === "ht-to-ttc" ? "bg-brand-600 text-white" : "bg-white text-surface-600 hover:bg-surface-50"}`}
          onClick={() => setSens("ht-to-ttc")}
        >
          HT → TTC
        </button>
        <button
          className={`flex-1 py-2.5 text-sm font-medium transition-colors ${sens === "ttc-to-ht" ? "bg-brand-600 text-white" : "bg-white text-surface-600 hover:bg-surface-50"}`}
          onClick={() => setSens("ttc-to-ht")}
        >
          TTC → HT
        </button>
      </div>

      <div>
        <label className="label">Prix {sens === "ht-to-ttc" ? "HT" : "TTC"} (€)</label>
        <input type="number" className="input-field" value={prix} onChange={(e) => setPrix(e.target.value)} placeholder="100,00" />
      </div>

      <div>
        <label className="label">Taux de TVA</label>
        <select className="select-field" value={taux} onChange={(e) => setTaux(e.target.value)}>
          <option value="20">20% — Taux normal</option>
          <option value="10">10% — Taux intermédiaire</option>
          <option value="5.5">5,5% — Taux réduit</option>
          <option value="2.1">2,1% — Taux super réduit</option>
        </select>
      </div>

      <button onClick={calculate} className="btn-primary w-full justify-center">Calculer la TVA</button>

      {result && (
        <div className="space-y-2 pt-4 border-t border-surface-100">
          <div className="result-card">
            <p className="text-xs text-brand-600 font-medium mb-1">Montant TVA</p>
            <p className="result-value">{formatCurrency(result.tva)}</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-3 rounded-xl bg-surface-50 border border-surface-100">
              <p className="text-xs text-surface-500 mb-1">Prix HT</p>
              <p className="font-semibold">{formatCurrency(result.ht)}</p>
            </div>
            <div className="p-3 rounded-xl bg-surface-50 border border-surface-100">
              <p className="text-xs text-surface-500 mb-1">Prix TTC</p>
              <p className="font-semibold">{formatCurrency(result.ttc)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
