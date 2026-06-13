"use client";
import Link from "next/link";

export default function StartPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-md w-full text-center">
        <div className="mb-6 text-5xl">⚡</div>
        <div className="mb-2 text-xs uppercase tracking-widest font-semibold" style={{ color: "#c4704a" }}>
          carbbye — Energie-Check
        </div>
        <h1 className="text-3xl font-bold mb-4" style={{ color: "#3d3530" }}>
          Warum bist du so erschöpft?
        </h1>
        <p className="text-lg mb-2" style={{ color: "#6b6560" }}>
          Du schläfst, aber erholt dich nicht. Du isst, aber hast trotzdem Heißhunger. Du versuchst aktiv zu sein — und bist danach noch müder.
        </p>
        <p className="text-base mb-8" style={{ color: "#6b6560" }}>
          Das hat einen Grund. Dieser Test zeigt dir in 5 Minuten, was wirklich hinter deiner Erschöpfung steckt — und was du konkret dagegen tun kannst.
        </p>

        <div className="rounded-2xl p-5 mb-8 text-left" style={{ backgroundColor: "#f0ebe3", border: "1px solid #e0d5c5" }}>
          <div className="text-sm font-semibold mb-3" style={{ color: "#3d3530" }}>Was dich erwartet:</div>
          <div className="space-y-2 text-sm" style={{ color: "#6b6560" }}>
            <div className="flex items-start gap-2">
              <span>📋</span>
              <span>10 Fragen zu Schlaf, Energie, Stimmung, Konzentration und Ernährung</span>
            </div>
            <div className="flex items-start gap-2">
              <span>📊</span>
              <span>Dein persönliches Energie-Profil mit konkreten Energieräubern</span>
            </div>
            <div className="flex items-start gap-2">
              <span>💡</span>
              <span>Erste Schritte, die du noch heute umsetzen kannst</span>
            </div>
            <div className="flex items-start gap-2">
              <span>📅</span>
              <span>Tägliche Motivation + Energie-Tracking in deinem Dashboard</span>
            </div>
          </div>
        </div>

        <Link
          href="/test"
          className="block w-full py-4 rounded-2xl text-white font-semibold text-lg transition-colors"
          style={{ backgroundColor: "#c4704a" }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#a85c38")}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#c4704a")}
        >
          Jetzt Test starten →
        </Link>

        <p className="mt-4 text-xs" style={{ color: "#9d948c" }}>
          Keine Anmeldung. Keine E-Mail. Keine Kosten. Alles bleibt auf deinem Gerät.
        </p>
      </div>
    </main>
  );
}
