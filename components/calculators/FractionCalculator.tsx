"use client";
import { useState } from "react";
import { gcd, simplifyFraction } from "@/lib/utils";

type Operation = "add" | "sub" | "mul" | "div";

const opLabels: Record<Operation, string> = { add: "+", sub: "−", mul: "×", div: "÷" };

export function FractionCalculator() {
  const [num1, setNum1] = useState("1");
  const [den1, setDen1] = useState("2");
  const [num2, setNum2] = useState("1");
  const [den2, setDen2] = useState("3");
  const [op, setOp] = useState<Operation>("add");
  const [result, setResult] = useState<{
    num: number;
    den: number;
    decimal: number;
    steps: string[];
  } | null>(null);

  const calculate = () => {
    const n1 = parseInt(num1), d1 = parseInt(den1), n2 = parseInt(num2), d2 = parseInt(den2);
    if (!n1 || !d1 || !n2 || !d2 || d1 === 0 || d2 === 0) return;

    let rNum: number, rDen: number;
    const steps: string[] = [];

    if (op === "add") {
      rNum = n1 * d2 + n2 * d1;
      rDen = d1 * d2;
      steps.push(`${n1}/${d1} + ${n2}/${d2} = (${n1}×${d2} + ${n2}×${d1}) / (${d1}×${d2})`);
      steps.push(`= (${n1 * d2} + ${n2 * d1}) / ${d1 * d2} = ${rNum}/${rDen}`);
    } else if (op === "sub") {
      rNum = n1 * d2 - n2 * d1;
      rDen = d1 * d2;
      steps.push(`${n1}/${d1} − ${n2}/${d2} = (${n1}×${d2} − ${n2}×${d1}) / (${d1}×${d2})`);
      steps.push(`= (${n1 * d2} − ${n2 * d1}) / ${d1 * d2} = ${rNum}/${rDen}`);
    } else if (op === "mul") {
      rNum = n1 * n2;
      rDen = d1 * d2;
      steps.push(`${n1}/${d1} × ${n2}/${d2} = (${n1}×${n2}) / (${d1}×${d2}) = ${rNum}/${rDen}`);
    } else {
      rNum = n1 * d2;
      rDen = d1 * n2;
      steps.push(`${n1}/${d1} ÷ ${n2}/${d2} = ${n1}/${d1} × ${d2}/${n2} = (${n1}×${d2}) / (${d1}×${n2})`);
      steps.push(`= ${rNum}/${rDen}`);
    }

    const [sNum, sDen] = simplifyFraction(rNum, rDen);
    if (sNum !== rNum || sDen !== rDen) {
      const g = gcd(Math.abs(rNum), Math.abs(rDen));
      steps.push(`Simplification par ${g} : ${sNum}/${sDen}`);
    }

    setResult({ num: sNum, den: sDen, decimal: sNum / sDen, steps });
  };

  return (
    <div className="space-y-4">
      {/* Fraction inputs */}
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <p className="label text-center">Fraction 1</p>
          <div className="flex flex-col items-center gap-1">
            <input type="number" className="input-field text-center" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="1" />
            <div className="w-full h-0.5 bg-surface-300 rounded" />
            <input type="number" className="input-field text-center" value={den1} onChange={(e) => setDen1(e.target.value)} placeholder="2" />
          </div>
        </div>

        <div className="flex flex-col gap-1 mt-6">
          {(["add", "sub", "mul", "div"] as Operation[]).map((o) => (
            <button
              key={o}
              onClick={() => setOp(o)}
              className={`w-9 h-9 rounded-lg text-sm font-bold transition-colors ${
                op === o ? "bg-brand-600 text-white" : "bg-surface-100 text-surface-600 hover:bg-surface-200"
              }`}
            >
              {opLabels[o]}
            </button>
          ))}
        </div>

        <div className="flex-1">
          <p className="label text-center">Fraction 2</p>
          <div className="flex flex-col items-center gap-1">
            <input type="number" className="input-field text-center" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="1" />
            <div className="w-full h-0.5 bg-surface-300 rounded" />
            <input type="number" className="input-field text-center" value={den2} onChange={(e) => setDen2(e.target.value)} placeholder="3" />
          </div>
        </div>
      </div>

      <button onClick={calculate} className="btn-primary w-full justify-center">
        Calculer
      </button>

      {result && (
        <div className="space-y-3 pt-4 border-t border-surface-100">
          <div className="result-card text-center">
            <p className="text-xs text-brand-600 font-medium mb-2">Résultat</p>
            <div className="flex flex-col items-center gap-0.5">
              <p className="text-2xl font-display font-bold text-brand-700">{result.num}</p>
              <div className="w-12 h-0.5 bg-brand-400" />
              <p className="text-2xl font-display font-bold text-brand-700">{result.den}</p>
            </div>
            <p className="text-sm text-surface-500 mt-2">= {result.decimal.toFixed(6).replace(/\.?0+$/, "")}</p>
          </div>

          <div className="p-3 rounded-xl bg-surface-50 border border-surface-200">
            <p className="text-xs font-medium text-surface-600 mb-2">Étapes du calcul :</p>
            {result.steps.map((step, i) => (
              <p key={i} className="text-xs font-mono text-surface-600 leading-relaxed">{step}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
