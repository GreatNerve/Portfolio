"use client";
export const pexelsLoader = ({
    src,
    width,
    quality,
  }: {
    src: string;
    width: number;
    quality?: number;
  }) => {
    return `${src}?auto=compress&cs=tinysrgb&w=${width}&q=${quality || 75}`;
  };

  