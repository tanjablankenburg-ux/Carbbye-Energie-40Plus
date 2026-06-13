"use client";
import { useState } from "react";
import Link from "next/link";
import { tips, tipCategoryLabels, tipCategoryIcons, type TipCategory } from "@/data/content";

const ALL_CATS: (TipCategory | "alle")[] = ["alle", "schlaf", "ernaehrung", "bewegung", "stress", "hormone"];

export default function TippsPage() {
  const [active, setActive] = useState<TipCategory | "alle">("alle");

  const filtered = active === "alle" ? tips : tips.filter(t => t.category === active);

  return (
    <main className="min-h-screen px-6 py-10">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/dashboard" className="text-xl">←</Link>
          <div>
            <div className="text-xs uppercase tracking-widest font-semibold" style={{ color: "#c4704a" }}>carbbye</div>
            <h1 className="text-xl font-bold" style={{ color: "#3d3530" }}>Deine Energie-Tipps</h1>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
          {ALL_CATS.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-medium transition-colors"
              style={{
                backgroundColor: active === cat ? "#c4704a" : "#f0ebe3",
                color: active === cat ? "#ffffff" : "#6b6560",
              }}
            >
              {cat === "alle" ? "Alle" : `${tipCategoryIcons[cat]} ${tipCategoryLabels[cat]}`}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filtered.map((tip, i) => (
            <div key={i} className="rounded-2xl p-5" style={{ backgroundColor: "#f0ebe3" }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{tipCategoryIcons[tip.category]}</span>
                <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#c4704a" }}>
                  {tipCategoryLabels[tip.category]}
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#3d3530" }}>{tip.text}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
