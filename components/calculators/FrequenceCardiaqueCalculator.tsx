"use client";
import { useState } from "react";
import { formatNumber } from "@/lib/utils";

interface Zone {
  name: string;
  pct: [number, number];
  color: string;
  description: string;
}

const zones: Zone[] = [
  { name: "Zone 1 — Récupération", pct: [50, 60], color: "bg-blue-200 text-blue-800", description: "Marche légère, récupération active" },
  { name: "Zone 2 — Endurance", pct: [60, 70], color: "bg-green-200 text-green-800", description: "Brûle les graisses, endurance de base" },
  { name: "Zone 3 — Aérobie", pct: [70, 80], color: "bg-yellow-200 text-yellow-800", description: "Améliore la condition cardiovasculaire" },
  { name: "Zone 4 — Seuil lactique", pct: [80, 90], color: "bg-orange-200 text-orange-800", description: "Performance et vitesse" },
  { name: "Zone 5 — Effort maximal", pct: [90, 100], color: "bg-red-200 text-red-800", description: "Sprint, effort anaérobie court" },
];

export function FrequenceCardiaqueCalculator() {
  const [age, setAge] = useState("");
  const [fcRepos, setFcRepos] = useState("");
  const [result, setResult] = useState<{ fcMax: number; karvonen: boolean; zones: { name: string; min: number; max: number; color: string; description: string }[] } | null>(null);

  const calculate = () => {
    const a = parseInt(age);
    const fcR = parseInt(fcRepos);
    if (!a) return;

    const fcMax = 220 - a;
    const useKarvonen = !!fcR && fcR > 30 && fcR < 120;

    const calcZones = zones.map((z) => {
      if (useKarvonen) {
        // Karvonen formula: FC = (FCmax - FCrepos) × % + FCrepos
        const reserve = fcMax - fcR;
        return {
          name: z.name,
          min: Math.round(reserve * (z.pct[0] / 100) + fcR),
          max: Math.round(reserve * (z.pct[1] / 100) + fcR),
          color: z.color,
          description: z.description,
        };
      } else {
        return {
          name: z.name,
          min: Math.round(fcMax * (z.pct[0] / 100)),
          max: Math.round(fcMax * (z.pct[1] / 100)),
          color: z.color,
          description: z.description,
        };
      }
    });

    setResult({ fcMax, karvonen: useKarvonen, zones: calcZones });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="label">Âge (ans)</label>
        <input
          type="number"
          className="input-field"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="35"
          min="10"
          max="100"
        />
      </div>
      <div>
        <label className="label">FC au repos (bpm) — optionnel</label>
        <input
          type="number"
          className="input-field"
          value={fcRepos}
          onChange={(e) => setFcRepos(e.target.value)}
          placeholder="60 (pour formule Karvonen)"
          min="30"
          max="120"
        />
        <p className="text-xs text-surface-400 mt-1">Mesurez au réveil avant de vous lever</p>
      </div>

      <button onClick={calculate} className="btn-primary w-full justify-center">
        Calculer mes zones cardiaques
      </button>

      {result && (
        <div className="space-y-2 pt-4 border-t border-surface-100">
          <div className="result-card">
            <p className="text-xs text-brand-600 font-medium mb-1">FC Maximale théorique</p>
            <p className="result-value">{result.fcMax} bpm</p>
            <p className="text-xs text-surface-400 mt-1">
              Méthode {result.karvonen ? "Karvonen (avec FC repos)" : "classique (220 − âge)"}
            </p>
          </div>
          <div className="space-y-1.5">
            {result.zones.map((z) => (
              <div key={z.name} className={`p-3 rounded-xl ${z.color} flex justify-between items-start`}>
                <div>
                  <p className="text-xs font-semibold">{z.name}</p>
                  <p className="text-xs opacity-75 mt-0.5">{z.description}</p>
                </div>
                <p className="text-sm font-bold ml-4 whitespace-nowrap">
                  {z.min}–{z.max} bpm
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
