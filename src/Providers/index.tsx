import { ReactNode } from "react";
import NextUIProvider from "./NextUI";
import { ThemeProvider } from "./theme-provider";
import { PostHogProvider } from "./PostHogProvider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <PostHogProvider>
      <NextUIProvider>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </NextUIProvider>
    </PostHogProvider>
  );
}
