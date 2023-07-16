
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Navbar, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextUiThemesProvider } from "next-themes";

import { lightTheme, darkTheme } from "./themes";

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
        <NextUiThemesProvider
          defaultTheme="system"
          attribute="class"
          value={{ light: lightTheme, dark: darkTheme }}
        >
          <NextUIProvider>
            <Navbar>
              <Navbar.Content>
                <Navbar.Link href="/">Sumary</Navbar.Link>
                <Navbar.Link href="/Blessings">Blessings</Navbar.Link>
                <Navbar.Link href="/skills">Skills</Navbar.Link>
                <Navbar.Link href="/Items">Items</Navbar.Link>
              </Navbar.Content>
            </Navbar>
            {children}
          </NextUIProvider>
        </NextUiThemesProvider>
      </body>
    </html>
  );
}
