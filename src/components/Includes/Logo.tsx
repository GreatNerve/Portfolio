"use client";
import { Skeleton } from "@/components/ui/skeleton";

import { cn } from "@/lib/utils";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";




const Logo = ({
  darkSrc = "/assets/logo/logo-dark.svg",
  lightSrc = "/assets/logo/logo-light.svg",
  size = "size-48",
  fontSize = "text-5xl",
  alt = "Dheeraj Sharma Logo",
  className = "",
  ...props
}) => {
  const { theme } = useTheme();
  const [src_logo, setSrcLogo] = useState(darkSrc ? darkSrc : lightSrc);

  useEffect(() => {
    if (theme === "dark") {
      setSrcLogo(darkSrc ? darkSrc : lightSrc);
    } else if (theme === "light") {
      setSrcLogo(lightSrc ? lightSrc : darkSrc);
    } else {
      let systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      setSrcLogo(
        systemTheme === "dark"
          ? darkSrc
            ? darkSrc
            : lightSrc
          : lightSrc
          ? lightSrc
          : darkSrc
      );
    }
  }, [theme, lightSrc, darkSrc]);

  const [loading, setLoading] = useState(true);
  

  return (
    <div className={cn("relative",className, size)}>
        <Image src={src_logo} alt={alt} fill priority 
          onLoad={() => setLoading(false)} 
          className={cn(  loading ? "hidden" : "block")}
        />
        <Skeleton className={cn("rounded-3xl", size, loading ? "block" : "hidden")} />
    </div>
  );
};

export default Logo;
