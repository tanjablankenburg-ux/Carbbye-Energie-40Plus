// All app content — questions, results, tips, recipes, motivations

export type Question = {
  id: number;
  text: string;
  options: { label: string; score: number }[];
  category: "schlaf" | "energie" | "konzentration" | "stimmung" | "ernaehrung";
};

export type CategoryKey = "schlaf" | "energie" | "konzentration" | "stimmung" | "ernaehrung";

export const CATEGORY_LABELS: Record<CategoryKey, string> = {
  schlaf: "Schlaf & Erholung",
  energie: "Energie & Antrieb",
  konzentration: "Konzentration & Klarheit",
  stimmung: "Stimmung & Stress",
  ernaehrung: "Ernährung & Blutzucker",
};

export const CATEGORY_ICONS: Record<CategoryKey, string> = {
  schlaf: "🌙",
  energie: "⚡",
  konzentration: "🧠",
  stimmung: "💛",
  ernaehrung: "🥑",
};

export const questions: Question[] = [
  {
    id: 1,
    text: "Wie fühlst du dich morgens beim Aufwachen?",
    category: "schlaf",
    options: [
      { label: "Erholt und bereit für den Tag", score: 3 },
      { label: "Ganz okay, komme langsam in Gang", score: 2 },
      { label: "Müde, bräuchte noch Stunden", score: 1 },
      { label: "Erschöpft, als hätte ich gar nicht geschlafen", score: 0 },
    ],
  },
  {
    id: 2,
    text: "Wie oft hast du ein Mittagstief (zwischen 13–15 Uhr)?",
    category: "energie",
    options: [
      { label: "Selten oder nie", score: 3 },
      { label: "Ein- bis zweimal pro Woche", score: 2 },
      { label: "Fast täglich", score: 1 },
      { label: "Täglich — ich könnte sofort einschlafen", score: 0 },
    ],
  },
  {
    id: 3,
    text: "Wie ist deine Konzentration über den Tag?",
    category: "konzentration",
    options: [
      { label: "Ich bleibe gut fokussiert", score: 3 },
      { label: "Mal gut, mal nicht", score: 2 },
      { label: "Ich verliere oft den Faden", score: 1 },
      { label: "Brain Fog ist mein ständiger Begleiter", score: 0 },
    ],
  },
  {
    id: 4,
    text: "Wie schläfst du?",
    category: "schlaf",
    options: [
      { label: "Gut — ich schlafe durch und wache erholt auf", score: 3 },
      { label: "Meistens okay, gelegentliche Probleme", score: 2 },
      { label: "Häufig schlecht, oft nachts wach", score: 1 },
      { label: "Kaum erholsamer Schlaf, fast jede Nacht", score: 0 },
    ],
  },
  {
    id: 5,
    text: "Wie ist deine Stimmung im Alltag?",
    category: "stimmung",
    options: [
      { label: "Ausgeglichen, meistens gut gelaunt", score: 3 },
      { label: "Mal so, mal so — Schwankungen sind normal", score: 2 },
      { label: "Oft gereizt oder niedergeschlagen", score: 1 },
      { label: "Ich erkenne mich selbst kaum noch", score: 0 },
    ],
  },
  {
    id: 6,
    text: "Wie reagierst du auf Stress?",
    category: "stimmung",
    options: [
      { label: "Ich bleibe meistens ruhig und komme schnell runter", score: 3 },
      { label: "Ich brauche etwas Zeit, aber es geht", score: 2 },
      { label: "Ich reagiere schnell über, erhol mich langsam", score: 1 },
      { label: "Kleinigkeiten bringen mich an meine Grenze", score: 0 },
    ],
  },
  {
    id: 7,
    text: "Wie sieht deine Ernährung aus?",
    category: "ernaehrung",
    options: [
      { label: "Ausgewogen, wenig Zucker, viel Gemüse und Protein", score: 3 },
      { label: "Meistens gut, aber mit Ausrutschern", score: 2 },
      { label: "Viel Kohlenhydrate, Süßes, unregelmäßige Mahlzeiten", score: 1 },
      { label: "Ich esse kaum, aber nehme trotzdem zu", score: 0 },
    ],
  },
  {
    id: 8,
    text: "Wie oft bist du körperlich aktiv?",
    category: "energie",
    options: [
      { label: "Mehrmals pro Woche, macht mir Spaß", score: 3 },
      { label: "Manchmal, wenn ich die Energie aufbringe", score: 2 },
      { label: "Selten — ich bin einfach zu müde", score: 1 },
      { label: "Fast nie — der Gedanke daran erschöpft mich schon", score: 0 },
    ],
  },
  {
    id: 9,
    text: "Wie ist dein Hungergefühl?",
    category: "ernaehrung",
    options: [
      { label: "Gleichmäßig, kein starkes Verlangen nach Süßem", score: 3 },
      { label: "Gelegentlich Heißhunger, meistens stabil", score: 2 },
      { label: "Heißhungerattacken, besonders auf Süßes", score: 1 },
      { label: "Ständig Hunger oder gar keinen — ich verstehe meinen Körper nicht", score: 0 },
    ],
  },
  {
    id: 10,
    text: "Wie oft hast du das Gefühl, im Nebel zu sein (Brain Fog)?",
    category: "konzentration",
    options: [
      { label: "Selten oder nie", score: 3 },
      { label: "Gelegentlich", score: 2 },
      { label: "Oft, besonders nachmittags", score: 1 },
      { label: "Fast immer — klares Denken ist die Ausnahme", score: 0 },
    ],
  },
];

export type ScoreLevel = "rot" | "gelb" | "gruen";

export function getScoreLevel(score: number): ScoreLevel {
  if (score <= 12) return "rot";
  if (score <= 22) return "gelb";
  return "gruen";
}

export const scoreResults = {
  rot: {
    emoji: "🔴",
    title: "Dein Körper sendet Hilferufe",
    color: "bg-red-50 border-red-200",
    textColor: "text-red-800",
    dotColor: "bg-red-400",
    text: "Deine Energie ist gerade auf dem absoluten Minimum. Das ist kein Zeichen von Schwäche — dein Körper kämpft gegen echte hormonelle und metabolische Veränderungen an. Die gute Nachricht: kleine, gezielte Veränderungen können sehr schnell einen Unterschied machen. Du bist an der richtigen Stelle.",
  },
  gelb: {
    emoji: "🟡",
    title: "Du funktionierst — aber auf Reserve",
    color: "bg-amber-50 border-amber-200",
    textColor: "text-amber-800",
    dotColor: "bg-amber-400",
    text: "Du schaffst deinen Alltag, aber du weißt selbst: so sollte sich Leben nicht anfühlen. Dein Körper hat sich still an einen Zustand gewöhnt, der eigentlich nicht normal ist. Ein paar gezielte Stellschrauben können deine Energie überraschend schnell verändern.",
  },
  gruen: {
    emoji: "🟢",
    title: "Deine Basis ist gut — jetzt feinjustieren",
    color: "bg-green-50 border-green-200",
    textColor: "text-green-800",
    dotColor: "bg-green-500",
    text: "Du machst schon vieles richtig. Trotzdem merkst du, dass da noch mehr geht. Dein Körper ist bereit für das nächste Level — mit gezielter Unterstützung wirst du den Unterschied deutlich spüren.",
  },
};

export const energyRobbers: Record<CategoryKey, { title: string; description: string; steps: string[] }> = {
  schlaf: {
    title: "Schlaf & Erholung",
    description: "Dein Schlaf ist nicht erholsam genug. Im Schlaf repariert sich dein Körper — wenn das nicht funktioniert, leidet alles andere darunter.",
    steps: [
      "Geh heute 30 Minuten früher ins Bett als sonst",
      "Kein Bildschirm 1 Stunde vor dem Schlafen",
      "Probiere Magnesium am Abend — viele Frauen sind mangelhaft versorgt",
    ],
  },
  energie: {
    title: "Energie & Antrieb",
    description: "Dein Energiehaushalt ist aus dem Gleichgewicht. Mittagstief und Antriebslosigkeit sind oft hormonelle Signale — keine Faulheit.",
    steps: [
      "10 Minuten Spaziergang nach dem Mittagessen",
      "Iss alle 4–5 Stunden — lass dich nicht aushungern",
      "Ein kurzer Spaziergang nach dem Essen stabilisiert deinen Blutzucker",
    ],
  },
  konzentration: {
    title: "Konzentration & Klarheit",
    description: "Brain Fog und Konzentrationsprobleme zeigen, dass dein Gehirn gerade nicht die Nährstoffe bekommt, die es braucht.",
    steps: [
      "Trink morgens ein großes Glas Wasser bevor der Kaffee kommt",
      "Probiere 20 Minuten Fokuszeit ohne Handy",
      "Gesunde Fette (Avocado, Eier, Nüsse) geben deinem Gehirn Kraft",
    ],
  },
  stimmung: {
    title: "Stimmung & Stress",
    description: "Stimmungsschwankungen und Stressempfindlichkeit sind oft direkte Folgen hormoneller Veränderungen — nicht deine Schuld.",
    steps: [
      "5 Minuten tiefes Atmen täglich — das ist keine Wellness, das ist Biochemie",
      "Setze eine klare Grenze pro Tag — Nein sagen ist Energie sparen",
      "Bewege dich täglich mindestens 20 Minuten draußen",
    ],
  },
  ernaehrung: {
    title: "Ernährung & Blutzucker",
    description: "Blutzuckerschwankungen rauben dir Energie. Was du isst (und wann), hat enormen Einfluss auf dein Energielevel.",
    steps: [
      "Starte den Tag mit Protein, nicht mit Kohlenhydraten",
      "Vermeide Zucker am Morgen — er setzt die Achterbahn in Gang",
      "Iss mehr gesunde Fette — sie halten deinen Blutzucker stabil",
    ],
  },
};

export const motivations: string[] = [
  "Dein Körper ist nicht kaputt — er kommuniziert. Hör heute auf ein Signal, das er dir sendet. Was braucht er von dir?",
  "Energie kommt nicht aus dem Nichts. Sie entsteht, wenn du deinem Körper gibst, was er wirklich braucht. Heute: ein Glas mehr Wasser.",
  "Ein schlechter Tag bedeutet nicht, dass du auf dem falschen Weg bist. Er bedeutet, dass dein Körper heute mehr Fürsorge braucht als gestern.",
  "Blutzucker hoch, Blutzucker runter — das kennt jede. Was, wenn du heute einfach das Frühstück änderst? Protein statt Brot. Probier es.",
  "Schlaf ist kein Luxus. Er ist die wichtigste Reparaturzeit deines Körpers. Heute Abend: 30 Minuten früher ins Bett.",
  "Deine Müdigkeit ist nicht in deinem Kopf. Sie hat echte biochemische Ursachen — und die lassen sich beeinflussen.",
  "Bewegung ist keine Bestrafung. 10 Minuten Spaziergang nach dem Essen kann deinen Blutzucker deutlich senken. Heute probieren?",
  "Du musst nicht alles auf einmal ändern. Eine kleine Sache pro Tag. Heute: ein großes Glas Wasser beim Aufwachen.",
  "Wechseljahre sind keine Krankheit. Dein Körper wechselt die Strategie — und du kannst ihm dabei helfen.",
  "Was du heute isst, fühlst du morgen. Gesunde Fette, gutes Protein, wenig Zucker — das ist dein Energie-Code.",
  "Stress frisst Magnesium. Wenn du dich erschöpft und gereizt fühlst, könnte das der Grund sein. Mandeln, Spinat, dunkle Schokolade.",
  "Dein Mittagstief ist kein Zeichen von Schwäche. Es ist ein Blutzuckertief. Was hast du mittags gegessen?",
  "Eine Sache, die du heute für deine Energie tun kannst: 5 Minuten an die frische Luft. Klingt wenig — wirkt viel.",
  "Hormone brauchen Zeit. Veränderungen passieren nicht über Nacht — aber sie passieren. Bleib dran.",
  "Du kennst deinen Körper besser als jeder Arzt. Hör auf das, was er dir sagt — und vertrau dir.",
  "Kaffee ist kein Ersatz für Schlaf. Er verschiebt die Erschöpfung nur. Was wäre heute ohne den zweiten Kaffee?",
  "Protein zum Frühstück ist kein Diät-Trick. Es ist Biochemie. Eier, Quark, Nüsse — dein Gehirn wird es dir danken.",
  "Nein sagen ist Energie sparen. Welche eine Sache kannst du heute ablehnen — ohne schlechtes Gewissen?",
  "Brain Fog hat oft eine einfache Ursache: zu wenig Wasser, zu wenig Schlaf, zu viel Zucker. Was davon trifft heute zu?",
  "Du bist nicht zu alt, um dich gut zu fühlen. Dein Körper wartet nur darauf, dass du ihm die richtigen Signale gibst.",
  "Heute eine Idee: iss zu jeder Mahlzeit etwas Grünes. Spinat, Rucola, Gurke — was du magst. Dein Körper liebt es.",
  "Chronische Erschöpfung ist der Körper im Reserve-Modus. Kein Drama — aber ein Signal zum Handeln.",
  "Was gibt dir Energie — wirklich? Nicht was du tun solltest. Was dir tatsächlich gut tut. Tu heute genau das.",
  "Dein Darm und dein Gehirn sprechen ständig miteinander. Wenn du dich mental erschöpft fühlst — schau auf deinen Bauch.",
  "Gewichtszunahme trotz wenig essen? Das ist oft Cortisol — das Stresshormon. Weniger Stress wirkt manchmal mehr als weniger Kalorien.",
  "Heute Abend: kein Handy nach 21 Uhr. Nicht für immer. Nur heute. Schau, wie du morgen früh aufwachst.",
  "Du machst das nicht falsch. Du machst es mit einem Körper, der sich verändert — und das braucht andere Strategien.",
  "Eier sind Superfood für Frauen ab 40. Gesunde Fette, Vitamin D, Protein. Heute zum Frühstück?",
  "Kleine Gewohnheiten summieren sich. 10 Tage lang ein Glas Wasser mehr pro Tag — und dein Körper dankt es dir.",
  "Du bist nicht allein damit. Millionen Frauen fühlen genau das, was du fühlst. Und viele haben einen Weg heraus gefunden.",
];

export type TipCategory = "schlaf" | "ernaehrung" | "bewegung" | "stress" | "hormone";

export const tipCategoryLabels: Record<TipCategory, string> = {
  schlaf: "Schlaf",
  ernaehrung: "Ernährung",
  bewegung: "Bewegung",
  stress: "Stress",
  hormone: "Hormone",
};

export const tipCategoryIcons: Record<TipCategory, string> = {
  schlaf: "🌙",
  ernaehrung: "🥑",
  bewegung: "🚶‍♀️",
  stress: "🧘‍♀️",
  hormone: "⚗️",
};

export type Tip = { category: TipCategory; text: string };

export const tips: Tip[] = [
  { category: "schlaf", text: "Geh jeden Tag zur gleichen Zeit ins Bett — auch am Wochenende. Dein Körper liebt Rhythmus und dankt es dir mit tieferem Schlaf." },
  { category: "schlaf", text: "Kein Handy, kein Netflix 1 Stunde vor dem Schlafen. Das Blaulicht bremst dein Schlafhormon Melatonin — und du liegst länger wach als nötig." },
  { category: "schlaf", text: "Magnesiumglycinat am Abend kann Wunder wirken — besonders für Frauen, die nachts aufwachen oder nicht einschlafen können." },
  { category: "schlaf", text: "Halte das Schlafzimmer kühl (16–18°C). Dein Körper schläft deutlich besser, wenn er sich beim Einschlafen abkühlen kann." },
  { category: "ernaehrung", text: "Starte den Tag mit Protein: Eier, Quark, Nüsse. Das hält deinen Blutzucker bis mittags stabil — kein Mittagstief, mehr Energie." },
  { category: "ernaehrung", text: "Iss alle 4–5 Stunden — nicht weniger. Langes Fasten stresst deinen Körper, erhöht Cortisol und bremst den Stoffwechsel." },
  { category: "ernaehrung", text: "Zucker am Morgen (Müsli, Saft, Weißbrot) setzt eine Energie-Achterbahn in Gang. Wechsle einmal auf ein Eieromelette und spür den Unterschied." },
  { category: "ernaehrung", text: "Avocado, Olivenöl, Nüsse, fetter Fisch — gesunde Fette sind Energie für Gehirn und Hormone. Kein Verzicht, bitte." },
  { category: "bewegung", text: "10 Minuten Spaziergang nach dem Mittagessen senkt deinen Blutzucker und verhindert das Nachmittagstief. Kein Fitnessstudio nötig." },
  { category: "bewegung", text: "Krafttraining 2x pro Woche ist das Beste für deine Hormone, deinen Stoffwechsel und deine Energie — ab 40 besonders wichtig." },
  { category: "bewegung", text: "Wenn du gar keine Energie hast: Fang mit 5 Minuten an. Draußen. Langsam. Das reicht als Anfang — und oft kommt mehr von selbst." },
  { category: "bewegung", text: "Bewegung morgens verbessert deinen Schlaf nachts. Ein kurzer Spaziergang nach dem Frühstück setzt die richtige Hormonkaskade in Gang." },
  { category: "stress", text: "4-7-8 Atmen: 4 Sek. einatmen, 7 Sek. halten, 8 Sek. ausatmen. 3x wiederholen. Dein Nervensystem beruhigt sich sofort — kein Witz." },
  { category: "stress", text: "Schreibe jeden Abend 3 Dinge auf, die heute gut waren. Das ist keine Naivität — es verändert nachweislich deine Stressreaktion." },
  { category: "stress", text: "Plane täglich 20 Minuten nur für dich — ohne Aufgabe, ohne Handy. Das ist keine Faulheit, das ist notwendige Erholung." },
  { category: "stress", text: "Cortisol (das Stresshormon) sabotiert Schlaf, Gewicht und Energie. Stress reduzieren wirkt oft mehr als jede Diät oder jedes Supplement." },
  { category: "hormone", text: "Vitamin D ist für Frauen ab 40 fast immer zu niedrig. Lass es testen — es beeinflusst Energie, Stimmung und Immunsystem direkt." },
  { category: "hormone", text: "Dein Körper braucht Cholesterin um Hormone herzustellen. Gesunde Fette weglassen ist das Gegenteil von hilfreich." },
  { category: "hormone", text: "Östrogen sinkt, Cortisol steigt — so läuft es in den Wechseljahren oft ab. Weniger Stress ist daher direkt hormonell wirksam." },
  { category: "hormone", text: "1 EL Leinsamen täglich enthält Phytoöstrogene, die deinen Hormonspiegel sanft unterstützen können. Einfach über Joghurt oder Salat." },
];

export type Recipe = {
  id: number;
  name: string;
  time: string;
  ingredients: string[];
  steps: string[];
  why: string;
  emoji: string;
};

export const recipes: Recipe[] = [
  {
    id: 1,
    emoji: "🍳",
    name: "Power-Frühstückseier",
    time: "10 Min",
    ingredients: ["3 Eier", "1 Handvoll Spinat", "1 EL Olivenöl"],
    steps: [
      "Olivenöl in der Pfanne erhitzen",
      "Spinat kurz anwilken (1 Min)",
      "Eier drüber geben, stocken lassen, salzen",
    ],
    why: "Eier liefern alle 9 essentiellen Aminosäuren und Cholin für dein Gehirn. Spinat gibt Magnesium. Olivenöl macht die Nährstoffe verfügbar. Das Ergebnis: stabiler Blutzucker bis mittags — kein Tief, kein Heißhunger.",
  },
  {
    id: 2,
    emoji: "🥑",
    name: "Avocado-Lachs-Bowl",
    time: "10 Min",
    ingredients: ["1 Avocado", "100g Räucherlachs", "1 Zitrone", "Rucola"],
    steps: [
      "Rucola auf dem Teller verteilen",
      "Avocado in Scheiben schneiden und drauflegen",
      "Lachs dazugeben, mit Zitrone beträufeln",
    ],
    why: "Lachs ist vollgepackt mit Omega-3-Fettsäuren, die Entzündungen reduzieren und dein Gehirn nähren. Avocado gibt gesunde Fette für stabile Energie. Zusammen: ein Mittagessen das nicht ins Koma schickt.",
  },
  {
    id: 3,
    emoji: "💚",
    name: "Grüner Energie-Smoothie",
    time: "5 Min",
    ingredients: ["1 Handvoll Spinat", "1 Banane", "200ml Mandelmilch", "1 EL Mandelmus"],
    steps: [
      "Alle Zutaten in den Mixer",
      "30 Sekunden mixen",
      "Fertig",
    ],
    why: "Spinat liefert Magnesium und Eisen. Mandelmus gibt gesunde Fette und Protein. Die Banane für schnelle Energie — die Fette verlangsamen die Aufnahme. Kein Blutzuckercrash, nur gleichmäßige Energie.",
  },
  {
    id: 4,
    emoji: "🫐",
    name: "Protein-Quark mit Beeren",
    time: "5 Min",
    ingredients: ["200g Magerquark", "1 Handvoll Beeren", "1 EL Leinsamen"],
    steps: [
      "Quark in eine Schüssel",
      "Beeren drüber geben",
      "Leinsamen drüberstreuen",
    ],
    why: "Quark liefert Casein — ein langsam verdauliches Protein das dich stundenlang satt hält. Beeren sind vollgepackt mit Antioxidantien die Entzündungen reduzieren. Leinsamen gibt Phytoöstrogene und Omega-3.",
  },
  {
    id: 5,
    emoji: "🐟",
    name: "Lachs mit Zitronen-Rucola",
    time: "15 Min",
    ingredients: ["150g Lachsfilet", "Rucola", "Zitrone"],
    steps: [
      "Lachs in der Pfanne 4 Min von jeder Seite braten",
      "Rucola auf dem Teller anrichten",
      "Lachs drauf, Zitrone drüber pressen",
    ],
    why: "Lachs 2x pro Woche kann deinen Omega-3-Spiegel deutlich verbessern — was sich direkt auf Konzentration, Stimmung und Entzündungen auswirkt. Rucola liefert dazu Folsäure und Kalzium.",
  },
  {
    id: 6,
    emoji: "🥚",
    name: "Ei-Avocado auf Saatenbrot",
    time: "10 Min",
    ingredients: ["2 Eier", "½ Avocado", "1 Scheibe Saatenbrot"],
    steps: [
      "Eier hart oder weich kochen (6–9 Min)",
      "Avocado auf dem Brot zerdrücken, salzen",
      "Eier drauf — fertig",
    ],
    why: "Saatenbrot hat einen niedrigen glykämischen Index — kein Blutzuckersprung. Die Kombination aus Ei-Protein und Avocado-Fett macht satt und gibt dem Gehirn genau das, was es für klares Denken braucht.",
  },
  {
    id: 7,
    emoji: "🥦",
    name: "Hähnchen-Brokkoli-Pfanne",
    time: "15 Min",
    ingredients: ["150g Hähnchenbrust", "1 Brokkoli", "2 EL Olivenöl", "Knoblauch"],
    steps: [
      "Hähnchen in Streifen schneiden, in Öl anbraten (5 Min)",
      "Brokkoli und Knoblauch dazu, weitere 8 Min braten",
      "Salzen, fertig",
    ],
    why: "Hähnchen liefert das Aminosäure-Profil das dein Körper für Hormon- und Muskelaufbau braucht. Brokkoli enthält Sulforaphan — ein Stoff der nachweislich beim Östrogen-Abbau hilft. Perfekt für Frauen ab 40.",
  },
  {
    id: 8,
    emoji: "🫙",
    name: "Mandel-Dattel-Energiebällchen",
    time: "10 Min",
    ingredients: ["100g Mandeln", "6 Datteln", "1 EL Kakaopulver", "1 Prise Salz"],
    steps: [
      "Alle Zutaten in den Mixer und zu einer Masse verarbeiten",
      "Zu kleinen Bällchen formen",
      "Im Kühlschrank aufbewahren",
    ],
    why: "Datteln geben schnelle Energie, Mandeln verlangsamen die Zuckeraufnahme. Kakao enthält Magnesium und macht echte gute Laune. Perfekter Snack wenn der Nachmittagshunger kommt — keine Achterbahn.",
  },
  {
    id: 9,
    emoji: "🥗",
    name: "Blitzschneller Feta-Gurken-Salat",
    time: "5 Min",
    ingredients: ["1 Gurke", "100g Feta", "Olivenöl", "Zitrone"],
    steps: [
      "Gurke in Scheiben schneiden",
      "Feta drüberbröckeln",
      "Mit Olivenöl und Zitrone beträufeln",
    ],
    why: "Gurke besteht zu 95% aus Wasser — perfekte Hydration für dein Gehirn. Feta liefert Kalzium und Protein. Olivenöl macht die fettlöslichen Vitamine verfügbar. Einfacher geht es nicht.",
  },
  {
    id: 10,
    emoji: "🍳",
    name: "Blumenkohl-Reis mit Ei",
    time: "15 Min",
    ingredients: ["½ Blumenkohl", "2 Eier", "2 EL Sojasauce", "Sesamöl"],
    steps: [
      "Blumenkohl in der Küchenmaschine zu Reis-Stücken zerkleinern",
      "In Öl 5 Min anbraten",
      "Eier dazu, verrühren, mit Sojasauce abschmecken",
    ],
    why: "Blumenkohlreis hat 90% weniger Kohlenhydrate als normaler Reis — dein Blutzucker bleibt stabil. Trotzdem fühlt es sich wie ein richtiges Gericht an. Für Frauen die Pasta und Reis vermissen, aber die Energie-Achterbahn nicht.",
  },
];