# Carbbye Energie-Check 40+

Lead-Magnet App für Tanja Fanelli / Brand carbbye / @carbbye_schulzendorf.
Energie-Test speziell für Frauen ab 40.

## Besitzer & Kontext
- Entwicklerin: Tanja Fanelli (keine Programmierkenntnisse, baut mit Claude Code)
- Brand: carbbye — Keto & Ernährung für Frauen ab 40
- Instagram/Facebook/YouTube: @carbbye_schulzendorf
- GitHub: tanjablankenburg-ux/Carbbye-Energie-40Plus
- Deployed: carbbye-energie-40-plus.vercel.app (Vercel, automatisch bei git push)
- Eingebunden als Lead Magnet: carbbye.de/energie-check-40plus/

## Tech Stack
- Next.js App Router, TypeScript, Tailwind CSS
- Kein Backend, keine Datenbank — alles client-seitig
- Node.js PATH immer setzen: `$env:PATH = "C:\Program Files\nodejs;$env:APPDATA\npm;$env:PATH"`

## App-Funktionen
- 10 Fragen zum Energielevel
- Ampel-Auswertung: 🔴 erschöpft / 🟡 schwankend / 🟢 vital
- 30 verschiedene Motivationstexte je nach Score
- 20 Tipps + 10 Rezepte je nach Ergebnis
- Tägliches Energie-Tracking (Skala 1–5)
- CTA Button → carbbye.de/keto-guide/ (kostenloser Keto Guide)
- Footer: Instagram, Facebook, YouTube, carbbye.de

## Wichtige Regeln
- Das Produkt "Exogene Ketone" wird NIEMALS direkt genannt
- Nur angedeutet als "ein anderer Treibstoff" o.ä.
- Kein Login, keine E-Mail-Sammlung in der App selbst — das läuft über Fluent Forms auf carbbye.de
- Funnel: carbbye.de/energie-check-40plus/ → Fluent Forms (E-Mail) → App URL

## Wichtige Dateien
- `src/app/page.tsx` — Startseite / Intro
- `src/app/test/page.tsx` — Die 10 Fragen
- `src/app/ergebnis/page.tsx` — Auswertung mit Ampel, Tipps, Rezepten
- `src/app/tracking/page.tsx` — Tägliches Energie-Tracking
