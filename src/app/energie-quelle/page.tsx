"use client";
import Link from "next/link";

export default function EnergieQuellePage() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-lg mx-auto">

        {/* Zurück */}
        <Link href="/ergebnis" className="text-sm mb-8 inline-block" style={{ color: "#9d948c" }}>
          ← Zurück zu meinem Ergebnis
        </Link>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-4xl mb-3">⚡</div>
          <h1 className="text-2xl font-bold mb-3" style={{ color: "#3d3530" }}>
            Was wenn dein Körper einfach den falschen Treibstoff bekommt?
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "#6b6560" }}>
            Ich hab das lange nicht verstanden — bis ich es selbst ausprobiert habe.
          </p>
        </div>

        {/* Persönliche Geschichte */}
        <div className="rounded-2xl p-5 mb-6" style={{ backgroundColor: "#f0ebe3" }}>
          <div className="font-semibold mb-3" style={{ color: "#3d3530" }}>Meine Geschichte</div>
          <p className="text-sm leading-relaxed mb-3" style={{ color: "#6b6560" }}>
            Ich hab alles versucht. Früher ins Bett, weniger Kaffee, mehr Bewegung. Und trotzdem war ich ab dem frühen Nachmittag einfach weg. Nicht krank — nur leer.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#6b6560" }}>
            Irgendwann bin ich auf das Thema exogene Ketone gestoßen. Ich war skeptisch — klingt nach einem dieser Produkte die zu viel versprechen. Aber ich hab es trotzdem ausprobiert. Und ich war überrascht.
          </p>
        </div>

        {/* Was sind Ketone */}
        <div className="rounded-2xl p-5 mb-6" style={{ backgroundColor: "#fdf0e8", border: "1px solid #f0d5bc" }}>
          <div className="font-semibold mb-3" style={{ color: "#3d3530" }}>Was sind exogene Ketone?</div>
          <p className="text-sm leading-relaxed mb-3" style={{ color: "#6b6560" }}>
            Dein Körper kann zwei verschiedene Treibstoffe nutzen — Zucker (aus Kohlenhydraten) und Ketone (aus Fett). Die meisten von uns laufen ihr ganzes Leben nur auf Zucker.
          </p>
          <p className="text-sm leading-relaxed mb-3" style={{ color: "#6b6560" }}>
            Das Problem: Zucker verbrennt schnell und ungleichmäßig. Du kennst das — nach dem Essen kurz fit, dann wieder müde. Auf und ab den ganzen Tag.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#6b6560" }}>
            Ketone liefern dem Gehirn und den Muskeln eine gleichmäßigere, sauberere Energie — ohne den Absturz danach. Exogene Ketone bedeuten: du gibst deinem Körper diesen Treibstoff von außen, ohne erst wochenlang Diät zu halten.
          </p>
        </div>

        {/* Was das bewirken kann */}
        <div className="rounded-2xl p-5 mb-6" style={{ backgroundColor: "#f0ebe3" }}>
          <div className="font-semibold mb-3" style={{ color: "#3d3530" }}>Was viele Frauen berichten</div>
          <div className="space-y-3">
            {[
              "Mehr mentale Klarheit — weniger Gehirnnebel",
              "Gleichmäßigere Energie ohne das Nachmittagstief",
              "Weniger Heißhunger auf Süßes",
              "Besser erholt aufwachen",
              "Mehr Antrieb ohne extra Koffein",
            ].map((punkt, i) => (
              <div key={i} className="flex items-start gap-2 text-sm" style={{ color: "#3d3530" }}>
                <span style={{ color: "#c4704a" }}>→</span>
                <span>{punkt}</span>
              </div>
            ))}
          </div>
          <p className="text-xs mt-4" style={{ color: "#9d948c" }}>
            Das sind Erfahrungsberichte — jeder Körper ist anders und individuelle Ergebnisse können variieren.
          </p>
        </div>

        {/* Kein Druck */}
        <div className="rounded-2xl p-5 mb-8" style={{ backgroundColor: "#fdf0e8", border: "1px solid #f0d5bc" }}>
          <p className="text-sm leading-relaxed" style={{ color: "#6b6560" }}>
            Ich zeige dir das nicht weil ich dir etwas verkaufen will. Ich zeige es dir weil es für mich einen Unterschied gemacht hat — und weil ich denke dass du selbst entscheiden kannst ob es für dich interessant ist.
          </p>
          <p className="text-sm leading-relaxed mt-3" style={{ color: "#6b6560" }}>
            Wenn du neugierig bist, schau einfach mal rein. Kein Druck, keine Verpflichtung.
          </p>
        </div>

        {/* CTA zum Shop */}
        <a
          href="https://pruvit.com/de-de?ref=carbbye"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-4 rounded-2xl font-semibold text-white text-center mb-4"
          style={{ backgroundColor: "#c4704a" }}
        >
          Ich schau mal rein →
        </a>

        <Link
          href="/dashboard"
          className="block w-full py-3 rounded-2xl text-center text-sm"
          style={{ color: "#9d948c" }}
        >
          Zurück zu meinem Dashboard
        </Link>

      </div>
    </main>
  );
}
