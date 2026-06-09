"use client";
import { useState } from "react";
import { formatNumber } from "@/lib/utils";

export function PoidsIdealCalculator() {
  const [taille, setTaille] = useState("");
  const [sexe, setSexe] = useState<"homme" | "femme">("homme");
  const [result, setResult] = useState<{
    lorentz: number;
    brocca: number;
    devine: number;
    imc25: number;
    imc22: number;
  } | null>(null);

  const calculate = () => {
    const t = parseFloat(taille);
    if (!t || t < 100 || t > 250) return;
    const tM = t / 100;

    const lorentz =
      sexe === "homme"
        ? t - 100 - (t - 150) / 4
        : t - 100 - (t - 150) / 2;

    const brocca = sexe === "homme" ? t - 100 : t - 105;
    const devine = sexe === "homme" ? 50 + 2.3 * ((t - 152.4) / 2.54) : 45.5 + 2.3 * ((t - 152.4) / 2.54);

    setResult({
      lorentz,
      brocca,
      devine,
      imc25: 25 * tM * tM,
      imc22: 22 * tM * tM,
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex rounded-xl overflow-hidden border border-surface-200">
        {(["homme", "femme"] as const).map((s) => (
          <button
            key={s}
            className={`flex-1 py-2.5 text-sm font-medium capitalize transition-colors ${
              sexe === s ? "bg-brand-600 text-white" : "bg-white text-surface-600 hover:bg-surface-50"
            }`}
            onClick={() => setSexe(s)}
          >
            {s === "homme" ? "👨 Homme" : "👩 Femme"}
          </button>
        ))}
      </div>

      <div>
        <label className="label">Taille (cm)</label>
        <input
          type="number"
          className="input-field"
          value={taille}
          onChange={(e) => setTaille(e.target.value)}
          placeholder="175"
          min="100"
          max="250"
        />
      </div>

      <button onClick={calculate} className="btn-primary w-full justify-center">
        Calculer mon poids idéal
      </button>

      {result && (
        <div className="space-y-2 pt-4 border-t border-surface-100">
          <p className="text-xs text-surface-500 font-medium uppercase tracking-wider">
            Résultats selon différentes formules
          </p>
          {[
            { label: "Formule de Lorentz", value: result.lorentz, highlight: true },
            { label: "Formule de Broca", value: result.brocca },
            { label: "Formule de Devine", value: result.devine },
            { label: "IMC cible 22 kg/m²", value: result.imc22 },
            { label: "IMC cible 25 kg/m²", value: result.imc25 },
          ].map((item) => (
            <div
              key={item.label}
              className={`p-3 rounded-xl border ${
                item.highlight
                  ? "bg-brand-50 border-brand-200"
                  : "bg-surface-50 border-surface-100"
              }`}
            >
              <p className="text-xs text-surface-500 mb-0.5">{item.label}</p>
              <p
                className={`font-semibold ${
                  item.highlight ? "text-brand-700 text-lg" : "text-surface-800"
                }`}
              >
                {formatNumber(item.value, 1)} kg
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
