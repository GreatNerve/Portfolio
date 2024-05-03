import { MetadataRoute } from 'next'
import {BASE_URL} from '@/lib/constants'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/*',
    },
    sitemap: new URL('/sitemap.xml', BASE_URL).toString(),
  }
}