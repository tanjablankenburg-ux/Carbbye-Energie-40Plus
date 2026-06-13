import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Energie-Check | carbbye 40+",
  description: "Finde heraus, was dir Energie raubt — und was dir wieder Energie gibt. Für Frauen ab 40.",
  icons: {
    icon: "/favicon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="min-h-screen" style={{ backgroundColor: "#faf7f2" }}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
