"use client";
import { useState, useCallback } from "react";

export function useCalculator<T>() {
  const [result, setResult] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculate = useCallback((fn: () => T) => {
    try {
      setError(null);
      const res = fn();
      setResult(res);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erreur de calcul");
      setResult(null);
    }
  }, []);

  const reset = useCallback(() => {
    setResult(null);
    setError(null);
  }, []);

  return { result, error, calculate, reset, setResult };
}
