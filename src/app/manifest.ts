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
        src: logo,
        sizes: "48x48 96x96 144x144",
        type: "image/svg+xml",
      },
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
        src: "/assets/logo/apple-touch-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
      {
        src: "/assets/logo/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        src: "/assets/logo/favicon-24x24.png",
        type: "image/png",
        sizes: "24x24",
      },
      {
        src: "/assets/logo/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        src: "/assets/logo/favicon-48x48.png",
        type: "image/png",
        sizes: "48x48",
      },
      {
        src: "/assets/logo/mstile-150x150.png",
        type: "image/png",
        sizes: "150x150",
      },
      {
        src: "/assets/logo/favicon.ico",
        type: "image/x-icon",
      },
    ],
  };
}
