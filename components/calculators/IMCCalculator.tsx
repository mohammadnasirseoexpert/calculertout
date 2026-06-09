"use client";
import { useState } from "react";
import { formatNumber } from "@/lib/utils";

function getIMCCategory(imc: number) {
  if (imc < 16.5) return { label: "Dénutrition", color: "text-red-700", bg: "bg-red-50 border-red-200" };
  if (imc < 18.5) return { label: "Maigreur", color: "text-orange-700", bg: "bg-orange-50 border-orange-200" };
  if (imc < 25) return { label: "Poids normal ✓", color: "text-emerald-700", bg: "bg-emerald-50 border-emerald-200" };
  if (imc < 30) return { label: "Surpoids", color: "text-yellow-700", bg: "bg-yellow-50 border-yellow-200" };
  if (imc < 35) return { label: "Obésité modérée", color: "text-orange-700", bg: "bg-orange-50 border-orange-200" };
  if (imc < 40) return { label: "Obésité sévère", color: "text-red-700", bg: "bg-red-50 border-red-200" };
  return { label: "Obésité morbide", color: "text-red-800", bg: "bg-red-100 border-red-300" };
}

export function IMCCalculator() {
  const [poids, setPoids] = useState("");
  const [taille, setTaille] = useState("");
  const [result, setResult] = useState<{ imc: number; cat: ReturnType<typeof getIMCCategory> } | null>(null);

  const calculate = () => {
    const p = parseFloat(poids);
    const t = parseFloat(taille) / 100;
    if (!p || !t) return;
    const imc = p / (t * t);
    setResult({ imc, cat: getIMCCategory(imc) });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="label">Poids (kg)</label>
        <input type="number" className="input-field" value={poids} onChange={(e) => setPoids(e.target.value)} placeholder="70" />
      </div>
      <div>
        <label className="label">Taille (cm)</label>
        <input type="number" className="input-field" value={taille} onChange={(e) => setTaille(e.target.value)} placeholder="175" />
      </div>

      <button onClick={calculate} className="btn-primary w-full justify-center">Calculer mon IMC</button>

      {result && (
        <div className="space-y-3 pt-4 border-t border-surface-100">
          <div className="result-card">
            <p className="text-xs text-brand-600 font-medium mb-1">Votre IMC</p>
            <p className="result-value">{formatNumber(result.imc, 1)}</p>
          </div>
          <div className={`p-4 rounded-xl border ${result.cat.bg}`}>
            <p className={`font-semibold ${result.cat.color}`}>{result.cat.label}</p>
            <p className="text-xs text-surface-500 mt-1">Selon les critères OMS</p>
          </div>

          {/* IMC scale */}
          <div className="pt-2">
            <div className="flex rounded-lg overflow-hidden h-3">
              {["bg-blue-400", "bg-emerald-400", "bg-yellow-400", "bg-orange-400", "bg-red-400"].map((c, i) => (
                <div key={i} className={`flex-1 ${c}`} />
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-surface-400 mt-1">
              <span>16</span><span>18.5</span><span>25</span><span>30</span><span>40</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
