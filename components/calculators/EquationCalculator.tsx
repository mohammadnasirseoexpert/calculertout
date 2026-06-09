"use client";
import { useState } from "react";
import { formatNumber } from "@/lib/utils";

type DegreeType = "first" | "second";

export function EquationCalculator() {
  const [degree, setDegree] = useState<DegreeType>("first");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState<{
    solutions: string[];
    steps: string[];
    discriminant?: number;
  } | null>(null);

  const calculateFirst = () => {
    // ax + b = 0 → x = -b/a
    const vA = parseFloat(a.replace(",", "."));
    const vB = parseFloat(b.replace(",", "."));
    if (!vA) return;

    const x = -vB / vA;
    setResult({
      solutions: [`x = ${formatNumber(x, 6)}`],
      steps: [
        `${vA}x + ${vB} = 0`,
        `${vA}x = ${-vB}`,
        `x = ${-vB} ÷ ${vA}`,
        `x = ${formatNumber(x, 6)}`,
      ],
    });
  };

  const calculateSecond = () => {
    // ax² + bx + c = 0
    const vA = parseFloat(a.replace(",", "."));
    const vB = parseFloat(b.replace(",", "."));
    const vC = parseFloat(c.replace(",", "."));
    if (!vA) return;

    const delta = vB * vB - 4 * vA * vC;
    const steps = [
      `${vA}x² + ${vB}x + ${vC} = 0`,
      `Δ = b² − 4ac = ${vB}² − 4×${vA}×${vC} = ${formatNumber(delta, 4)}`,
    ];

    let solutions: string[];
    if (delta < 0) {
      solutions = ["Pas de solution réelle (Δ < 0)"];
      steps.push("Δ < 0 → Pas de solution réelle");
    } else if (delta === 0) {
      const x0 = -vB / (2 * vA);
      solutions = [`x = ${formatNumber(x0, 6)} (racine double)`];
      steps.push(`Δ = 0 → x = −b / (2a) = ${-vB} / ${2 * vA} = ${formatNumber(x0, 6)}`);
    } else {
      const sqrtDelta = Math.sqrt(delta);
      const x1 = (-vB + sqrtDelta) / (2 * vA);
      const x2 = (-vB - sqrtDelta) / (2 * vA);
      solutions = [`x₁ = ${formatNumber(x1, 6)}`, `x₂ = ${formatNumber(x2, 6)}`];
      steps.push(
        `√Δ = ${formatNumber(sqrtDelta, 4)}`,
        `x₁ = (−${vB} + ${formatNumber(sqrtDelta, 4)}) / (2×${vA}) = ${formatNumber(x1, 6)}`,
        `x₂ = (−${vB} − ${formatNumber(sqrtDelta, 4)}) / (2×${vA}) = ${formatNumber(x2, 6)}`
      );
    }

    setResult({ solutions, steps, discriminant: delta });
  };

  return (
    <div className="space-y-4">
      <div className="flex rounded-xl overflow-hidden border border-surface-200">
        <button
          className={`flex-1 py-2.5 text-sm font-medium transition-colors ${degree === "first" ? "bg-brand-600 text-white" : "bg-white text-surface-600"}`}
          onClick={() => { setDegree("first"); setResult(null); }}
        >
          1er degré (ax+b=0)
        </button>
        <button
          className={`flex-1 py-2.5 text-sm font-medium transition-colors ${degree === "second" ? "bg-brand-600 text-white" : "bg-white text-surface-600"}`}
          onClick={() => { setDegree("second"); setResult(null); }}
        >
          2ème degré (ax²+bx+c=0)
        </button>
      </div>

      {degree === "first" ? (
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="label">Coefficient a</label>
            <input type="number" className="input-field" value={a} onChange={(e) => setA(e.target.value)} placeholder="2" />
          </div>
          <div>
            <label className="label">Terme b</label>
            <input type="number" className="input-field" value={b} onChange={(e) => setB(e.target.value)} placeholder="-6" />
          </div>
          <div className="col-span-2">
            <p className="text-center text-sm text-surface-500 font-mono bg-surface-50 p-2 rounded-lg">
              {a || "a"}x + {b || "b"} = 0
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-2">
          <div>
            <label className="label">a</label>
            <input type="number" className="input-field" value={a} onChange={(e) => setA(e.target.value)} placeholder="1" />
          </div>
          <div>
            <label className="label">b</label>
            <input type="number" className="input-field" value={b} onChange={(e) => setB(e.target.value)} placeholder="-3" />
          </div>
          <div>
            <label className="label">c</label>
            <input type="number" className="input-field" value={c} onChange={(e) => setC(e.target.value)} placeholder="2" />
          </div>
          <div className="col-span-3">
            <p className="text-center text-sm text-surface-500 font-mono bg-surface-50 p-2 rounded-lg">
              {a || "a"}x² + {b || "b"}x + {c || "c"} = 0
            </p>
          </div>
        </div>
      )}

      <button
        onClick={degree === "first" ? calculateFirst : calculateSecond}
        className="btn-primary w-full justify-center"
      >
        Résoudre l'équation
      </button>

      {result && (
        <div className="space-y-2 pt-4 border-t border-surface-100">
          {result.solutions.map((s, i) => (
            <div key={i} className="result-card">
              <p className="result-value text-xl">{s}</p>
            </div>
          ))}
          {result.discriminant !== undefined && (
            <div className={`p-2.5 rounded-xl text-xs font-medium ${
              result.discriminant > 0
                ? "bg-emerald-50 text-emerald-700"
                : result.discriminant === 0
                ? "bg-yellow-50 text-yellow-700"
                : "bg-red-50 text-red-700"
            }`}>
              Δ = {formatNumber(result.discriminant, 4)} →{" "}
              {result.discriminant > 0 ? "2 solutions" : result.discriminant === 0 ? "1 solution double" : "Pas de solution réelle"}
            </div>
          )}
          <div className="p-3 rounded-xl bg-surface-50 border border-surface-200">
            <p className="text-xs font-medium text-surface-600 mb-2">Étapes :</p>
            {result.steps.map((step, i) => (
              <p key={i} className="text-xs font-mono text-surface-600 py-0.5">{step}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
