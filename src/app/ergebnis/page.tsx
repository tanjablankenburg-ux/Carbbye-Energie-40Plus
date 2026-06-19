"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  getScoreLevel,
  scoreResults,
  energyRobbers,
  CATEGORY_LABELS,
  CATEGORY_ICONS,
  type CategoryKey,
  type ScoreLevel,
} from "@/data/content";

type Result = {
  score: number;
  categoryScores: Record<CategoryKey, number>;
  date: string;
};

export default function ErgebnisPage() {
  const router = useRouter();
  const [result, setResult] = useState<Result | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("energiecheck_result");
    if (!saved) { router.replace("/start"); return; }
    setResult(JSON.parse(saved));
  }, [router]);

  if (!result) return null;

  const level: ScoreLevel = getScoreLevel(result.score);
  const res = scoreResults[level];
  const maxScore = 30;

  // Sort categories by worst score first
  const categoryEntries = Object.entries(result.categoryScores) as [CategoryKey, number][];
  const maxPerCategory = 6; // 2 questions × 3 points each
  const sorted = categoryEntries.sort((a, b) => a[1] - b[1]);
  const worstCategories = sorted.slice(0, 3) as [CategoryKey, number][];

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-4xl mb-3">{res.emoji}</div>
          <h1 className="text-2xl font-bold mb-2" style={{ color: "#3d3530" }}>
            {res.title}
          </h1>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: "#f0ebe3", color: "#c4704a" }}>
            Dein Score: {result.score} / {maxScore} Punkte
          </div>
          <div className="w-full h-3 rounded-full mb-6" style={{ backgroundColor: "#e0d5c5" }}>
            <div
              className="h-3 rounded-full transition-all"
              style={{
                width: `${(result.score / maxScore) * 100}%`,
                backgroundColor: level === "rot" ? "#ef4444" : level === "gelb" ? "#f59e0b" : "#22c55e",
              }}
            />
          </div>
          <p className="text-base leading-relaxed" style={{ color: "#6b6560" }}>
            {res.text}
          </p>
        </div>

        {/* Lead magnet CTA */}
        <div className="rounded-2xl p-5 mb-8 text-center" style={{ backgroundColor: "#fdf0e8", border: "2px solid #c4704a" }}>
          <div className="text-2xl mb-2">🎁</div>
          <div className="font-bold mb-1" style={{ color: "#3d3530" }}>
            Mein kostenloser Keto-Guide für dich
          </div>
          <p className="text-sm mb-4" style={{ color: "#6b6560" }}>
            Was ist Keto, wie wendest du es an — mit vielen Rezepten und Wochenplänen. Komplett kostenlos.
          </p>
          <a
            href="https://carbbye.de/keto-guide/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 rounded-2xl font-semibold text-white text-sm"
            style={{ backgroundColor: "#c4704a" }}
          >
            Jetzt kostenlosen Keto-Guide holen →
          </a>
        </div>

        {/* Energy robbers */}
        <div className="mb-8">
          <h2 className="font-bold text-lg mb-4" style={{ color: "#3d3530" }}>
            Deine stärksten Energieräuber
          </h2>
          <div className="space-y-4">
            {worstCategories.map(([cat, score]) => {
              const robber = energyRobbers[cat];
              const pct = (score / maxPerCategory) * 100;
              return (
                <div key={cat} className="rounded-2xl p-5" style={{ backgroundColor: "#f0ebe3" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{CATEGORY_ICONS[cat]}</span>
                    <span className="font-semibold" style={{ color: "#3d3530" }}>{robber.title}</span>
                    <span className="ml-auto text-xs font-medium px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: pct < 40 ? "#fecaca" : "#fed7aa", color: "#3d3530" }}>
                      {score}/{maxPerCategory} Pkt.
                    </span>
                  </div>
                  <p className="text-sm mb-3" style={{ color: "#6b6560" }}>{robber.description}</p>
                  <div className="space-y-1.5">
                    {robber.steps.map((step, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm" style={{ color: "#3d3530" }}>
                        <span className="font-bold" style={{ color: "#c4704a" }}>→</span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Anderer Treibstoff Sektion */}
        <div className="rounded-2xl p-5 mb-8" style={{ backgroundColor: "#fdf0e8", border: "1px solid #f0d5bc" }}>
          <div className="text-2xl mb-2">⚡</div>
          <div className="font-bold mb-2" style={{ color: "#3d3530" }}>
            Was wenn dein Körper einfach den falschen Treibstoff bekommt?
          </div>
          <p className="text-sm mb-3 leading-relaxed" style={{ color: "#6b6560" }}>
            Viele Frauen ab 40 tun alles richtig — und fühlen sich trotzdem leer. Nicht weil sie zu wenig schlafen oder zu viel Stress haben. Sondern weil der Körper in dieser Lebensphase effizienter mit einem anderen Treibstoff läuft.
          </p>
          <p className="text-sm mb-4 leading-relaxed" style={{ color: "#6b6560" }}>
            Ich habe das selbst erlebt — und es hat mich überrascht wie schnell sich etwas verändert hat. Wenn du neugierig bist was ich damit meine, schau gerne mal rein.
          </p>
          <a
            href="https://pruvit.com/de-de?ref=carbbye"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 rounded-2xl font-semibold text-center text-sm"
            style={{ backgroundColor: "#f0ebe3", color: "#c4704a", border: "1px solid #c4704a" }}
          >
            Mehr erfahren →
          </a>
        </div>

        {/* CTA */}
        <div className="space-y-3">
          <Link
            href="/dashboard"
            className="block w-full py-4 rounded-2xl text-white font-semibold text-center transition-colors"
            style={{ backgroundColor: "#c4704a" }}
          >
            Zu meinem Energie-Dashboard →
          </Link>
          <button
            onClick={() => {
              localStorage.removeItem("energiecheck_result");
              localStorage.removeItem("energiecheck_checkins");
              router.push("/start");
            }}
            className="block w-full py-3 rounded-2xl text-center text-sm"
            style={{ color: "#9d948c" }}
          >
            Test neu starten
          </button>
        </div>
      </div>
    </main>
  );
}
