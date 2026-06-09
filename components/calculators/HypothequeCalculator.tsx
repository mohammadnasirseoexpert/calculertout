"use client";
import { useState } from "react";
import { formatCurrency } from "@/lib/utils";

export function HypothequeCalculator() {
  const [prixBien, setPrixBien] = useState("300000");
  const [apport, setApport] = useState("60000");
  const [taux, setTaux] = useState("3.8");
  const [duree, setDuree] = useState("240");
  const [result, setResult] = useState<{ mensualite: number; pret: number; coutTotal: number; interets: number; tauxEndettement?: number; revenu?: number } | null>(null);
  const [revenu, setRevenu] = useState("");

  const calculate = () => {
    const prix = parseFloat(prixBien), ap = parseFloat(apport), r = parseFloat(taux) / 100 / 12, n = parseInt(duree);
    const P = prix - ap;
    const mensualite = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const rev = parseFloat(revenu) || 0;
    setResult({
      mensualite,
      pret: P,
      coutTotal: mensualite * n,
      interets: mensualite * n - P,
      tauxEndettement: rev > 0 ? (mensualite / rev) * 100 : undefined,
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="label">Prix du bien (€)</label>
        <input type="number" className="input-field" value={prixBien} onChange={(e) => setPrixBien(e.target.value)} placeholder="300 000" />
      </div>
      <div>
        <label className="label">Apport personnel (€)</label>
        <input type="number" className="input-field" value={apport} onChange={(e) => setApport(e.target.value)} placeholder="60 000" />
      </div>
      <div>
        <label className="label">Taux annuel (%)</label>
        <input type="number" step="0.05" className="input-field" value={taux} onChange={(e) => setTaux(e.target.value)} />
      </div>
      <div>
        <label className="label">Durée</label>
        <select className="select-field" value={duree} onChange={(e) => setDuree(e.target.value)}>
          <option value="120">10 ans</option>
          <option value="180">15 ans</option>
          <option value="240">20 ans</option>
          <option value="300">25 ans</option>
        </select>
      </div>
      <div>
        <label className="label">Revenus nets mensuels (optionnel)</label>
        <input type="number" className="input-field" value={revenu} onChange={(e) => setRevenu(e.target.value)} placeholder="3 500" />
      </div>
      <button onClick={calculate} className="btn-primary w-full justify-center">Simuler mon hypothèque</button>

      {result && (
        <div className="space-y-2 pt-4 border-t border-surface-100">
          <div className="result-card">
            <p className="text-xs text-brand-600 font-medium mb-1">Mensualité hypothécaire</p>
            <p className="result-value">{formatCurrency(result.mensualite)}</p>
          </div>
          {result.tauxEndettement !== undefined && (
            <div className={`p-3 rounded-xl border ${result.tauxEndettement <= 35 ? "bg-emerald-50 border-emerald-200" : "bg-red-50 border-red-200"}`}>
              <p className="text-xs font-medium mb-0.5">Taux d'endettement</p>
              <p className="font-semibold">{result.tauxEndettement.toFixed(1)}% {result.tauxEndettement <= 35 ? "✓ Conforme HCSF" : "⚠️ Dépasse 35%"}</p>
            </div>
          )}
          <div className="grid grid-cols-2 gap-2 text-sm">
            {[
              { label: "Montant emprunté", val: formatCurrency(result.pret) },
              { label: "Coût total", val: formatCurrency(result.coutTotal) },
              { label: "Total intérêts", val: formatCurrency(result.interets) },
            ].map((item) => (
              <div key={item.label} className="p-3 rounded-xl bg-surface-50 border border-surface-100">
                <p className="text-xs text-surface-500 mb-1">{item.label}</p>
                <p className="font-semibold">{item.val}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
