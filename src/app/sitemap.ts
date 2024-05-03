import { MetadataRoute } from 'next'
import { BASE_URL } from '@/lib/constants'
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL.toString(),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: new URL('/projects', BASE_URL).toString(),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: new URL('/contact', BASE_URL).toString(),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}