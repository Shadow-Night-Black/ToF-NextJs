"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextUiThemesProvider } from "next-themes";
import { Character } from "./components/character";
import { exampleGlobalState } from "@/data/character/example";

import { lightTheme, darkTheme } from "./themes";
import { useState } from "react";
import { getCharacterFromState } from "@/data/globalState";
import { lensToUpdate } from "./state/updateLens";

export default function Home() {
  const [state, updateState]  = useState(exampleGlobalState);
  return (
    <NextUiThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{ light: lightTheme, dark: darkTheme }}
    >
      <NextUIProvider>
        <Character character={getCharacterFromState.get(state)} updateCharacter={lensToUpdate(getCharacterFromState, updateState)} />
      </NextUIProvider>
    </NextUiThemesProvider>
  );
}
