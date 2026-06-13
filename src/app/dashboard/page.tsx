"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  getScoreLevel,
  scoreResults,
  motivations,
  type CategoryKey,
  type ScoreLevel,
} from "@/data/content";

type Result = {
  score: number;
  categoryScores: Record<CategoryKey, number>;
  date: string;
};

type CheckIn = {
  date: string; // YYYY-MM-DD
  value: number; // 1-5
};

const EMOJI_SCALE = ["😴", "😕", "😐", "😊", "⚡"];
const SCALE_LABELS = ["Sehr erschöpft", "Müde", "Okay", "Gut", "Voller Energie"];

function todayKey() {
  return new Date().toISOString().split("T")[0];
}

function getDayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

export default function DashboardPage() {
  const router = useRouter();
  const [result, setResult] = useState<Result | null>(null);
  const [checkins, setCheckins] = useState<CheckIn[]>([]);
  const [todayCheckin, setTodayCheckin] = useState<number | null>(null);
  const [checkInSaved, setCheckInSaved] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("energiecheck_result");
    if (!saved) { router.replace("/start"); return; }
    setResult(JSON.parse(saved));

    const savedCheckins: CheckIn[] = JSON.parse(localStorage.getItem("energiecheck_checkins") || "[]");
    setCheckins(savedCheckins);
    const today = savedCheckins.find(c => c.date === todayKey());
    if (today) { setTodayCheckin(today.value); setCheckInSaved(true); }
  }, [router]);

  function saveCheckin(value: number) {
    setTodayCheckin(value);
    const today = todayKey();
    const existing = checkins.filter(c => c.date !== today);
    const updated = [...existing, { date: today, value }];
    setCheckins(updated);
    localStorage.setItem("energiecheck_checkins", JSON.stringify(updated));
    setCheckInSaved(true);
  }

  if (!result) return null;

  const level: ScoreLevel = getScoreLevel(result.score);
  const res = scoreResults[level];
  const motivation = motivations[getDayOfYear() % motivations.length];

  // Last 7 days for trend
  const last7: (CheckIn | null)[] = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const key = d.toISOString().split("T")[0];
    last7.push(checkins.find(c => c.date === key) || null);
  }
  const dayNames = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
  const today = new Date();

  return (
    <main className="min-h-screen px-6 py-10 pb-24">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="text-xs uppercase tracking-widest font-semibold mb-1" style={{ color: "#c4704a" }}>
              carbbye Energie-Dashboard
            </div>
            <h1 className="text-xl font-bold" style={{ color: "#3d3530" }}>Hallo ⚡</h1>
          </div>
          <Link href="/ergebnis" className="text-xs px-3 py-1 rounded-full border"
            style={{ color: "#c4704a", borderColor: "#c4704a" }}>
            Mein Ergebnis
          </Link>
        </div>

        {/* Motivation card */}
        <div className="rounded-2xl p-5 mb-6" style={{ backgroundColor: "#fdf0e8" }}>
          <div className="text-xs uppercase tracking-wide font-semibold mb-2" style={{ color: "#c4704a" }}>
            Dein Impuls heute
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "#3d3530" }}>
            {motivation}
          </p>
        </div>

        {/* Today check-in */}
        <div className="rounded-2xl p-5 mb-6" style={{ backgroundColor: "#f0ebe3" }}>
          <div className="font-semibold mb-3" style={{ color: "#3d3530" }}>
            Wie ist deine Energie heute?
          </div>
          <div className="flex justify-between gap-2 mb-3">
            {EMOJI_SCALE.map((emoji, idx) => {
              const val = idx + 1;
              const isSelected = todayCheckin === val;
              return (
                <button
                  key={val}
                  onClick={() => saveCheckin(val)}
                  className="flex-1 flex flex-col items-center py-3 rounded-xl transition-all border-2"
                  style={{
                    borderColor: isSelected ? "#c4704a" : "transparent",
                    backgroundColor: isSelected ? "#fdf0e8" : "#ffffff",
                  }}
                >
                  <span className="text-2xl">{emoji}</span>
                  <span className="text-xs mt-1" style={{ color: "#9d948c" }}>{val}</span>
                </button>
              );
            })}
          </div>
          {checkInSaved && todayCheckin !== null && (
            <p className="text-xs text-center" style={{ color: "#7a9e7e" }}>
              ✓ Gespeichert: {SCALE_LABELS[todayCheckin - 1]}
            </p>
          )}
        </div>

        {/* 7-day trend */}
        {checkins.length > 0 && (
          <div className="rounded-2xl p-5 mb-6" style={{ backgroundColor: "#f0ebe3" }}>
            <div className="font-semibold mb-4" style={{ color: "#3d3530" }}>Deine Energie-Kurve (7 Tage)</div>
            <div className="flex items-end gap-2 h-20">
              {last7.map((checkin, i) => {
                const d = new Date(today);
                d.setDate(d.getDate() - (6 - i));
                const label = dayNames[d.getDay() === 0 ? 6 : d.getDay() - 1];
                const height = checkin ? `${(checkin.value / 5) * 100}%` : "4px";
                return (
                  <div key={i} className="flex-1 flex flex-col items-center justify-end h-full gap-1">
                    <div
                      className="w-full rounded-t-lg transition-all"
                      style={{
                        height,
                        backgroundColor: checkin
                          ? checkin.value >= 4 ? "#7a9e7e" : checkin.value === 3 ? "#f59e0b" : "#ef4444"
                          : "#e0d5c5",
                      }}
                    />
                    <span className="text-xs" style={{ color: "#9d948c" }}>{label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Score chip */}
        <div className="rounded-2xl p-4 mb-6 flex items-center gap-3" style={{ backgroundColor: "#f0ebe3" }}>
          <span className="text-2xl">{res.emoji}</span>
          <div>
            <div className="font-semibold text-sm" style={{ color: "#3d3530" }}>{res.title}</div>
            <div className="text-xs" style={{ color: "#9d948c" }}>Score: {result.score}/30</div>
          </div>
          <Link href="/ergebnis" className="ml-auto text-xs px-3 py-1 rounded-full"
            style={{ backgroundColor: "#c4704a", color: "#ffffff" }}>
            Details
          </Link>
        </div>

        {/* Nav links */}
        <div className="grid grid-cols-2 gap-3">
          <Link href="/tipps"
            className="rounded-2xl p-4 text-center font-semibold text-sm"
            style={{ backgroundColor: "#f0ebe3", color: "#3d3530" }}>
            🌿 Meine Tipps
          </Link>
          <Link href="/rezepte"
            className="rounded-2xl p-4 text-center font-semibold text-sm"
            style={{ backgroundColor: "#f0ebe3", color: "#3d3530" }}>
            🍳 Energie-Rezepte
          </Link>
        </div>

        {/* Repeat test */}
        <div className="mt-6">
          <button
            onClick={() => {
              localStorage.removeItem("energiecheck_result");
              router.push("/test");
            }}
            className="w-full py-3 rounded-2xl border-2 font-semibold text-sm transition-colors"
            style={{ borderColor: "#c4704a", color: "#c4704a", backgroundColor: "transparent" }}
          >
            🔄 Test wiederholen
          </button>
          <p className="text-xs text-center mt-2" style={{ color: "#c8bdb5" }}>
            Dein Check-in Verlauf bleibt erhalten
          </p>
        </div>
      </div>
    </main>
  );
}
