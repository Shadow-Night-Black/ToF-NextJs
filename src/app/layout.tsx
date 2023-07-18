import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Providers } from "./providers";
import { Navigation } from "./components/navigation/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ToF - Character Sheet",
  description: "Character Sheet for use with the Tales of the Fated RPG system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navigation></Navigation>
          {children}
        </Providers>
      </body>
    </html>
  );
}
