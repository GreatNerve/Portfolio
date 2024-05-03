import { MetadataRoute } from 'next'
import {name, short_name, description, theme_color, logo} from "@/lib/constants"
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: name,
    short_name: short_name,
    description: description,
    start_url: '/',
    display: 'standalone',
    background_color: theme_color,
    theme_color: theme_color,
    icons: [
      {
        src: logo,
        sizes: '192x192 512x512 64x64 48x48 128x128 256x256 384x384 1024x1024',
        type: 'image/svg+xml',
      },
      {
        src: "assets/icons/favicon.ico",
        sizes: '16x16 32x32 24x24',
        type: 'image/x-icon',
      }
    ],
  }
}