"use client";
import { useState } from "react";
import { formatNumber } from "@/lib/utils";

type Category = "longueur" | "poids" | "temperature" | "volume" | "surface" | "vitesse";

interface Unit {
  label: string;
  factor?: number; // multiply to get base unit
  toBase?: (v: number) => number;
  fromBase?: (v: number) => number;
}

const categories: Record<Category, { name: string; units: Record<string, Unit> }> = {
  longueur: {
    name: "Longueur",
    units: {
      km: { label: "Kilomètre (km)", factor: 1000 },
      m: { label: "Mètre (m)", factor: 1 },
      cm: { label: "Centimètre (cm)", factor: 0.01 },
      mm: { label: "Millimètre (mm)", factor: 0.001 },
      mile: { label: "Mile (mi)", factor: 1609.34 },
      yard: { label: "Yard (yd)", factor: 0.9144 },
      foot: { label: "Pied (ft)", factor: 0.3048 },
      inch: { label: "Pouce (in)", factor: 0.0254 },
    },
  },
  poids: {
    name: "Masse",
    units: {
      t: { label: "Tonne (t)", factor: 1000 },
      kg: { label: "Kilogramme (kg)", factor: 1 },
      g: { label: "Gramme (g)", factor: 0.001 },
      mg: { label: "Milligramme (mg)", factor: 0.000001 },
      lb: { label: "Livre (lb)", factor: 0.453592 },
      oz: { label: "Once (oz)", factor: 0.0283495 },
    },
  },
  temperature: {
    name: "Température",
    units: {
      celsius: {
        label: "Celsius (°C)",
        toBase: (v) => v,
        fromBase: (v) => v,
      },
      fahrenheit: {
        label: "Fahrenheit (°F)",
        toBase: (v) => (v - 32) * (5 / 9),
        fromBase: (v) => v * (9 / 5) + 32,
      },
      kelvin: {
        label: "Kelvin (K)",
        toBase: (v) => v - 273.15,
        fromBase: (v) => v + 273.15,
      },
    },
  },
  volume: {
    name: "Volume",
    units: {
      m3: { label: "Mètre cube (m³)", factor: 1000 },
      L: { label: "Litre (L)", factor: 1 },
      cL: { label: "Centilitre (cL)", factor: 0.01 },
      mL: { label: "Millilitre (mL)", factor: 0.001 },
      gallon: { label: "Gallon US (gal)", factor: 3.78541 },
      pint: { label: "Pinte US (pt)", factor: 0.473176 },
    },
  },
  surface: {
    name: "Surface",
    units: {
      km2: { label: "Km² (km²)", factor: 1000000 },
      ha: { label: "Hectare (ha)", factor: 10000 },
      m2: { label: "Mètre carré (m²)", factor: 1 },
      cm2: { label: "Cm² (cm²)", factor: 0.0001 },
      acre: { label: "Acre", factor: 4046.86 },
    },
  },
  vitesse: {
    name: "Vitesse",
    units: {
      kmh: { label: "km/h", factor: 1 },
      ms: { label: "m/s", factor: 3.6 },
      mph: { label: "mph", factor: 1.60934 },
      knot: { label: "Nœud (kt)", factor: 1.852 },
    },
  },
};

export function ConversionUnitesCalculator() {
  const [category, setCategory] = useState<Category>("longueur");
  const [fromUnit, setFromUnit] = useState("m");
  const [toUnit, setToUnit] = useState("cm");
  const [value, setValue] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const handleCategoryChange = (cat: Category) => {
    setCategory(cat);
    const units = Object.keys(categories[cat].units);
    setFromUnit(units[0]);
    setToUnit(units[1]);
    setResult(null);
  };

  const convert = () => {
    const v = parseFloat(value.replace(",", "."));
    if (isNaN(v)) return;

    const cat = categories[category];
    const from = cat.units[fromUnit];
    const to = cat.units[toUnit];

    let baseValue: number;
    if (from.toBase) {
      baseValue = from.toBase(v);
    } else {
      baseValue = v * (from.factor ?? 1);
    }

    let converted: number;
    if (to.fromBase) {
      converted = to.fromBase(baseValue);
    } else {
      converted = baseValue / (to.factor ?? 1);
    }

    setResult(converted);
  };

  const swap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    setResult(null);
  };

  const unitList = Object.entries(categories[category].units);

  return (
    <div className="space-y-4">
      {/* Category selector */}
      <div>
        <label className="label">Catégorie</label>
        <div className="flex flex-wrap gap-1.5">
          {(Object.entries(categories) as [Category, { name: string }][]).map(([key, cat]) => (
            <button
              key={key}
              onClick={() => handleCategoryChange(key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                category === key
                  ? "bg-brand-600 text-white"
                  : "bg-surface-100 text-surface-600 hover:bg-surface-200"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="label">Valeur à convertir</label>
        <input
          type="number"
          className="input-field"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Ex: 100"
        />
      </div>

      <div className="flex gap-2 items-end">
        <div className="flex-1">
          <label className="label">De</label>
          <select className="select-field" value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
            {unitList.map(([key, u]) => (
              <option key={key} value={key}>{u.label}</option>
            ))}
          </select>
        </div>
        <button
          onClick={swap}
          className="mb-0.5 w-10 h-[46px] rounded-xl bg-surface-100 hover:bg-brand-100 text-surface-600 hover:text-brand-700 flex items-center justify-center transition-colors text-lg"
          title="Inverser"
        >
          ⇄
        </button>
        <div className="flex-1">
          <label className="label">Vers</label>
          <select className="select-field" value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
            {unitList.map(([key, u]) => (
              <option key={key} value={key}>{u.label}</option>
            ))}
          </select>
        </div>
      </div>

      <button onClick={convert} className="btn-primary w-full justify-center">
        Convertir
      </button>

      {result !== null && (
        <div className="result-card pt-4 border-t border-surface-100 mt-2">
          <p className="text-xs text-brand-600 font-medium mb-1">Résultat</p>
          <p className="result-value">
            {formatNumber(result, 8).replace(/\.?0+$/, "")} {toUnit}
          </p>
          <p className="text-xs text-surface-400 mt-1">
            {value} {fromUnit} = {formatNumber(result, 8).replace(/\.?0+$/, "")} {toUnit}
          </p>
        </div>
      )}
    </div>
  );
}
