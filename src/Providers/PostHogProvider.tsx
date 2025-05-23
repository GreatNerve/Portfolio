"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    console.log("Initializing PostHog...");

    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST!,
      capture_pageview: false,
      capture_pageleave: true,
      loaded: (ph) => console.log("PostHog loaded", ph),
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
