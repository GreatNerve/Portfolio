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
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}