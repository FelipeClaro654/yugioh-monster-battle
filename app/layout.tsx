import { Inter } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yu-Gi-Oh! Simplified Game",
  description: "Um jogo de Yu-Gi-Oh! simplificado usando Next.js",
};

interface RootLayout {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayout) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <main className="min-h-screen bg-linear-to-b from-blue-900 to-black">
          {children}
        </main>
      </body>
    </html>
  );
}
