import { MetadataRoute } from "next";
import {
  name,
  short_name,
  description,
  theme_color,
  logo,
} from "@/lib/constants";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: name,
    short_name: short_name,
    description: description,
    start_url: "/",
    display: "standalone",
    background_color: theme_color,
    theme_color: theme_color,
    icons: [
      {
        src: "/assets/logo/android-chrome-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        src: "/assets/logo/android-chrome-512x512.png",
        type: "image/png",
        sizes: "512x512",
      },
      {
        src: "/assets/logo/favicon.ico",
        type: "image/x-icon",
        sizes: "64x64 32x32 24x24 16x16",
      },
    ],
  };
}
