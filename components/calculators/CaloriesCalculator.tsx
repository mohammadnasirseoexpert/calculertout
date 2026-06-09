"use client";
import { useState } from "react";
import { formatNumber } from "@/lib/utils";

export function CaloriesCalculator() {
  const [age, setAge] = useState("");
  const [poids, setPoids] = useState("");
  const [taille, setTaille] = useState("");
  const [sexe, setSexe] = useState<"homme" | "femme">("homme");
  const [activite, setActivite] = useState("1.55");
  const [result, setResult] = useState<{ bmr: number; tdee: number; perte: number; gain: number } | null>(null);

  const calculate = () => {
    const a = parseFloat(age), p = parseFloat(poids), t = parseFloat(taille), f = parseFloat(activite);
    if (!a || !p || !t) return;

    const bmr = sexe === "homme"
      ? 88.36 + 13.4 * p + 4.8 * t - 5.7 * a
      : 447.6 + 9.2 * p + 3.1 * t - 4.3 * a;

    setResult({ bmr, tdee: bmr * f, perte: bmr * f - 500, gain: bmr * f + 500 });
  };

  return (
    <div className="space-y-4">
      <div className="flex rounded-xl overflow-hidden border border-surface-200">
        {(["homme", "femme"] as const).map((s) => (
          <button key={s} className={`flex-1 py-2.5 text-sm font-medium capitalize transition-colors ${sexe === s ? "bg-brand-600 text-white" : "bg-white text-surface-600"}`} onClick={() => setSexe(s)}>
            {s === "homme" ? "👨 Homme" : "👩 Femme"}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="label">Âge (ans)</label>
          <input type="number" className="input-field" value={age} onChange={(e) => setAge(e.target.value)} placeholder="30" />
        </div>
        <div>
          <label className="label">Poids (kg)</label>
          <input type="number" className="input-field" value={poids} onChange={(e) => setPoids(e.target.value)} placeholder="70" />
        </div>
      </div>
      <div>
        <label className="label">Taille (cm)</label>
        <input type="number" className="input-field" value={taille} onChange={(e) => setTaille(e.target.value)} placeholder="175" />
      </div>
      <div>
        <label className="label">Niveau d'activité</label>
        <select className="select-field" value={activite} onChange={(e) => setActivite(e.target.value)}>
          <option value="1.2">Sédentaire (bureau, peu d'exercice)</option>
          <option value="1.375">Légèrement actif (1-3j/semaine)</option>
          <option value="1.55">Modérément actif (3-5j/semaine)</option>
          <option value="1.725">Très actif (6-7j/semaine)</option>
          <option value="1.9">Extrêmement actif (sportif professionnel)</option>
        </select>
      </div>
      <button onClick={calculate} className="btn-primary w-full justify-center">Calculer mes calories</button>

      {result && (
        <div className="space-y-2 pt-4 border-t border-surface-100">
          <div className="result-card">
            <p className="text-xs text-brand-600 font-medium mb-1">Besoins journaliers (TDEE)</p>
            <p className="result-value">{formatNumber(result.tdee, 0)} kcal</p>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2 rounded-xl bg-surface-50 border border-surface-100">
              <p className="text-[11px] text-surface-500">Métabolisme basal</p>
              <p className="font-semibold text-sm">{formatNumber(result.bmr, 0)}</p>
            </div>
            <div className="p-2 rounded-xl bg-red-50 border border-red-100">
              <p className="text-[11px] text-red-500">Déficit (-500)</p>
              <p className="font-semibold text-sm text-red-700">{formatNumber(result.perte, 0)}</p>
            </div>
            <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-100">
              <p className="text-[11px] text-emerald-500">Surplus (+500)</p>
              <p className="font-semibold text-sm text-emerald-700">{formatNumber(result.gain, 0)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
