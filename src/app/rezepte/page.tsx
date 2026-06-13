"use client";
import { useState } from "react";
import Link from "next/link";
import { recipes } from "@/data/content";

export default function RezeptePage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <main className="min-h-screen px-6 py-10">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <Link href="/dashboard" className="text-xl">←</Link>
          <div>
            <div className="text-xs uppercase tracking-widest font-semibold" style={{ color: "#c4704a" }}>carbbye</div>
            <h1 className="text-xl font-bold" style={{ color: "#3d3530" }}>Energie-Rezepte</h1>
          </div>
        </div>
        <p className="text-sm mb-6 ml-9" style={{ color: "#9d948c" }}>
          Schnell, einfach, blutzuckerstabil — für Energie statt Mittagstief.
        </p>

        <div className="space-y-3">
          {recipes.map(recipe => (
            <div key={recipe.id} className="rounded-2xl overflow-hidden" style={{ backgroundColor: "#f0ebe3" }}>
              <button
                onClick={() => setOpen(open === recipe.id ? null : recipe.id)}
                className="w-full flex items-center gap-3 px-5 py-4 text-left"
              >
                <span className="text-2xl">{recipe.emoji}</span>
                <div className="flex-1">
                  <div className="font-semibold text-sm" style={{ color: "#3d3530" }}>{recipe.name}</div>
                  <div className="text-xs" style={{ color: "#9d948c" }}>⏱ {recipe.time}</div>
                </div>
                <span style={{ color: "#c4704a" }}>{open === recipe.id ? "▲" : "▼"}</span>
              </button>

              {open === recipe.id && (
                <div className="px-5 pb-5 border-t" style={{ borderColor: "#e0d5c5" }}>
                  <div className="pt-4">
                    <div className="font-semibold text-xs uppercase tracking-wide mb-2" style={{ color: "#c4704a" }}>
                      Zutaten
                    </div>
                    <ul className="space-y-1 mb-4">
                      {recipe.ingredients.map((ing, i) => (
                        <li key={i} className="text-sm flex items-center gap-2" style={{ color: "#3d3530" }}>
                          <span style={{ color: "#c4704a" }}>•</span> {ing}
                        </li>
                      ))}
                    </ul>

                    <div className="font-semibold text-xs uppercase tracking-wide mb-2" style={{ color: "#c4704a" }}>
                      Zubereitung
                    </div>
                    <ol className="space-y-1 mb-4">
                      {recipe.steps.map((step, i) => (
                        <li key={i} className="text-sm flex items-start gap-2" style={{ color: "#3d3530" }}>
                          <span className="font-bold" style={{ color: "#c4704a" }}>{i + 1}.</span> {step}
                        </li>
                      ))}
                    </ol>

                    <div className="rounded-xl p-4" style={{ backgroundColor: "#fdf0e8" }}>
                      <div className="text-xs font-semibold mb-1" style={{ color: "#c4704a" }}>Warum gut für dich</div>
                      <p className="text-xs leading-relaxed" style={{ color: "#6b6560" }}>{recipe.why}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
