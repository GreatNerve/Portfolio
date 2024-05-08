"use client";

import { ReactNode } from "react";
import NextUIProvider from "./NextUI";
import { StoreProvider } from "./StoreProvider";
import { ThemeProvider } from "./theme-provider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <NextUIProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
      >
        <StoreProvider>{children}</StoreProvider>
      </ThemeProvider>
    </NextUIProvider>
  );
}

