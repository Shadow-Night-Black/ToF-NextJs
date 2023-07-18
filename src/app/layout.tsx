"use client"

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Navbar } from "@nextui-org/react";
import { Providers } from "./providers";

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
          <Navbar>
            <Navbar.Content>
              <Navbar.Link href="/">Sumary</Navbar.Link>
              <Navbar.Link href="/blessings">Blessings</Navbar.Link>
              <Navbar.Link href="/skills">Skills</Navbar.Link>
              <Navbar.Link href="/items">Items</Navbar.Link>
            </Navbar.Content>
          </Navbar>
          {children}
        </Providers>
      </body>
    </html>
  );
}
