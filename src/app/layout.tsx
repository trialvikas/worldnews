import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Geopolitics News Hub",
  description: "Stay informed with the latest developments in global politics, conflicts, international relations, and economic affairs from trusted sources worldwide.",
  keywords: "geopolitics, international relations, world news, conflicts, global affairs, economics, diplomacy",
  authors: [{ name: "Geopolitics News Hub" }],
  openGraph: {
    title: "Geopolitics News Hub",
    description: "Latest global affairs and international relations news",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
