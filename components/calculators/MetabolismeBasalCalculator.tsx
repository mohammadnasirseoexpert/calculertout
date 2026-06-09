"use client";
import { useState } from "react";
import { formatNumber } from "@/lib/utils";

export function MetabolismeBasalCalculator() {
  const [age, setAge] = useState("");
  const [poids, setPoids] = useState("");
  const [taille, setTaille] = useState("");
  const [sexe, setSexe] = useState<"homme" | "femme">("homme");
  const [result, setResult] = useState<{
    harrisBenedict: number;
    mifflin: number;
    schofield: number;
  } | null>(null);

  const calculate = () => {
    const a = parseFloat(age), p = parseFloat(poids), t = parseFloat(taille);
    if (!a || !p || !t) return;

    const hb =
      sexe === "homme"
        ? 88.36 + 13.4 * p + 4.8 * t - 5.7 * a
        : 447.6 + 9.2 * p + 3.1 * t - 4.3 * a;

    const mifflin =
      sexe === "homme"
        ? 10 * p + 6.25 * t - 5 * a + 5
        : 10 * p + 6.25 * t - 5 * a - 161;

    // Schofield (WHO)
    let schofield: number;
    if (sexe === "homme") {
      if (a < 30) schofield = 15.057 * p + 692.2;
      else if (a < 60) schofield = 11.472 * p + 873.1;
      else schofield = 11.711 * p + 587.7;
    } else {
      if (a < 30) schofield = 14.818 * p + 486.6;
      else if (a < 60) schofield = 8.126 * p + 845.6;
      else schofield = 9.082 * p + 658.5;
    }

    setResult({ harrisBenedict: hb, mifflin, schofield });
  };

  return (
    <div className="space-y-4">
      <div className="flex rounded-xl overflow-hidden border border-surface-200">
        {(["homme", "femme"] as const).map((s) => (
          <button
            key={s}
            className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
              sexe === s ? "bg-brand-600 text-white" : "bg-white text-surface-600 hover:bg-surface-50"
            }`}
            onClick={() => setSexe(s)}
          >
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

      <button onClick={calculate} className="btn-primary w-full justify-center">
        Calculer mon métabolisme basal
      </button>

      {result && (
        <div className="space-y-2 pt-4 border-t border-surface-100">
          <div className="result-card">
            <p className="text-xs text-brand-600 font-medium mb-1">Harris-Benedict (référence)</p>
            <p className="result-value">{formatNumber(result.harrisBenedict, 0)} kcal/jour</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-3 rounded-xl bg-surface-50 border border-surface-100">
              <p className="text-xs text-surface-500 mb-1">Mifflin-St Jeor</p>
              <p className="font-semibold">{formatNumber(result.mifflin, 0)} kcal</p>
            </div>
            <div className="p-3 rounded-xl bg-surface-50 border border-surface-100">
              <p className="text-xs text-surface-500 mb-1">OMS (Schofield)</p>
              <p className="font-semibold">{formatNumber(result.schofield, 0)} kcal</p>
            </div>
          </div>
          <p className="text-xs text-surface-400 pt-1">
            Votre corps brûle ces calories au repos, sans aucune activité physique.
          </p>
        </div>
      )}
    </div>
  );
}
