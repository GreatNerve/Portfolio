"use client";

import { ReactNode } from "react";
import NextUIProvider from "./NextUI";

export default function Providers({ children }: { children: ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
