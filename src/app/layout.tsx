import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Le Ravito - Bar Café Trail",
  description: "Le lieu idéal pour les passionnés de trail : boissons saines, nourriture équilibrée et une communauté vibrante.",
  keywords: "trail, bar, café, nutrition, récupération, événements",
  authors: [{ name: "Le Ravito" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body className={`${inter.className} bg-background-primary text-text-primary antialiased`}>
        {children}
      </body>
    </html>
  );
}
