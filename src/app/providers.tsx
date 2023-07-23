"use client";

import { FC } from "react";
import { ThemeProvider as NextUiThemesProvider } from "next-themes";
import { lightTheme, darkTheme } from "./themes";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
export const Providers: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <NextUiThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{ light: lightTheme, dark: darkTheme }}
    >
      <NextUIProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </NextUIProvider>
    </NextUiThemesProvider>
  );
};
