import { BASE_URL, description, keywords, logo, name, og_image, short_name, theme_color } from '@/lib/constants';
import { Metadata } from "next";


export const templateMetadata: Metadata = {
    description: description,
    keywords: keywords,
    applicationName: name,
    creator: short_name,
    category: "Technology, Web Development",
    metadataBase : BASE_URL,
    icons: {
      icon: [
        {
          url: "/assets/logo/favicon.ico",
          type: "image/x-icon",
          sizes: "16x16",
        },
        {
          url: logo,
          sizes: "any",
          type: "image/svg+xml",
        },
        
      ],
      shortcut : logo,
      apple : "assets/logo/apple-touch-icon.png",
      other: [
      {
        rel: "mask-icon",
        color: theme_color,
        url: logo,
      },  
      ]
    },
    openGraph: {
      title: {
        default: name,
        template: "%s | Dheeraj Sharma",
      },
      description: description,
      type: 'website',
      url: BASE_URL,
      images: [
        {
          url: og_image,
          width: 256,
          height: 256,
          alt: name,
        },
      ],
      },
    twitter: {
      card: "summary_large_image",
      title: {
        default: name,  
        template: "%s | Dheeraj Sharma",
      },
      description: description,
      creator: "@GreatNerve",
      images : {
        url: og_image,
        alt: name,
        height: 256,
        width: 256,
      }
    },
    other: {
      "msapplication-config" : "/assets/logo/browserconfig.xml",
      "msapplication-TileColor" : theme_color,
    }
  }