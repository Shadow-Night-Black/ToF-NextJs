'use client';

import { NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextUiThemesProvider } from "next-themes"
import { Character } from "./components/character"
import { Example } from "@/data/character/example"


import {lightTheme, darkTheme} from  "./themes"

export default function Home() {
  return (
   <NextUiThemesProvider defaultTheme="system" attribute="class" value={{light:lightTheme, dark:darkTheme}}>
    <NextUIProvider>
    <Character data={Example}/>
    </NextUIProvider>
    </NextUiThemesProvider>
  )
}
