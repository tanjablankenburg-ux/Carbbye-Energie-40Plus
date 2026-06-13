import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Energie-Check | carbbye",
  description: "Finde heraus, was dir Energie raubt — und was dir wieder Energie gibt.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="min-h-screen" style={{ backgroundColor: "#faf7f2" }}>
        {children}
      </body>
    </html>
  );
}
