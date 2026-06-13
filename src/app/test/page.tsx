"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/data/content";

export default function TestPage() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [selected, setSelected] = useState<number | null>(null);

  const q = questions[current];
  const progress = ((current) / questions.length) * 100;

  function handleSelect(score: number, idx: number) {
    setSelected(idx);
    const next = [...answers];
    next[current] = score;
    setAnswers(next);
  }

  function handleNext() {
    if (selected === null) return;
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setSelected(answers[current + 1] >= 0 ? answers[current + 1] : null);
    } else {
      // Save result
      const totalScore = answers.reduce((sum, s) => sum + s, 0);
      const categoryScores: Record<string, number> = {};
      questions.forEach((question, i) => {
        const cat = question.category;
        if (!categoryScores[cat]) categoryScores[cat] = 0;
        categoryScores[cat] += answers[i];
      });
      localStorage.setItem("energiecheck_result", JSON.stringify({
        score: totalScore,
        categoryScores,
        date: new Date().toISOString(),
      }));
      router.push("/ergebnis");
    }
  }

  function handlePrev() {
    if (current > 0) {
      setCurrent(current - 1);
      setSelected(answers[current - 1] >= 0 ? answers[current - 1] : null);
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-lg w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-sm font-medium" style={{ color: "#9d948c" }}>
            Energie-Check
          </div>
          <div className="text-sm font-medium" style={{ color: "#9d948c" }}>
            {current + 1} / {questions.length}
          </div>
        </div>

        {/* Progress */}
        <div className="w-full h-2 rounded-full mb-8" style={{ backgroundColor: "#e0d5c5" }}>
          <div
            className="h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%`, backgroundColor: "#c4704a" }}
          />
        </div>

        {/* Category badge */}
        <div className="mb-4">
          <span
            className="text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full"
            style={{ backgroundColor: "#f0ebe3", color: "#c4704a" }}
          >
            Frage {current + 1}
          </span>
        </div>

        {/* Question */}
        <h2 className="text-xl font-bold mb-6" style={{ color: "#3d3530" }}>
          {q.text}
        </h2>

        {/* Options */}
        <div className="space-y-3 mb-8">
          {q.options.map((opt, idx) => {
            const isSelected = selected === idx;
            return (
              <button
                key={idx}
                onClick={() => handleSelect(opt.score, idx)}
                className="w-full text-left px-5 py-4 rounded-2xl border-2 transition-all"
                style={{
                  borderColor: isSelected ? "#c4704a" : "#e0d5c5",
                  backgroundColor: isSelected ? "#fdf0e8" : "#ffffff",
                  color: "#3d3530",
                }}
              >
                {opt.label}
              </button>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex gap-3">
          {current > 0 && (
            <button
              onClick={handlePrev}
              className="flex-1 py-3 rounded-2xl border-2 font-semibold transition-colors"
              style={{ borderColor: "#c4704a", color: "#c4704a" }}
            >
              ← Zurück
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={selected === null}
            className="flex-1 py-3 rounded-2xl font-semibold text-white transition-colors"
            style={{
              backgroundColor: selected !== null ? "#c4704a" : "#e0d5c5",
              color: selected !== null ? "#ffffff" : "#9d948c",
            }}
          >
            {current < questions.length - 1 ? "Weiter →" : "Auswertung ansehen →"}
          </button>
        </div>
      </div>
    </main>
  );
}
