import { BASE_URL, description, keywords, logo, name, og_image, short_name, theme_color } from '@/lib/constants';
import { Metadata } from "next";


export const templateMetadata: Metadata = {
    description: description,
    keywords: keywords,
    applicationName: name,
    creator: short_name,
    category: "Technology, Web Development",
    metadataBase : BASE_URL,
    alternates: {
      canonical: "/",
    },
    icons: {
      icon: [
        {
          url: logo,
          sizes: "48x48 96x96 144x144",
          type: "image/svg+xml",
        },
        {
          url: "/assets/logo/android-chrome-192x192.png",
          type: "image/png",
          sizes: "192x192",
        },
        {
          url: "/assets/logo/android-chrome-512x512.png",
          type: "image/png",
          sizes: "512x512",
        },
        {
          url: "/assets/logo/apple-touch-icon.png",
          type: "image/png",
          sizes: "180x180",
        },
        {
          url: "/assets/logo/favicon-16x16.png",
          type: "image/png",
          sizes: "16x16",
        },
        {
          url: "/assets/logo/favicon-24x24.png",
          type: "image/png",
          sizes: "24x24",
        },
        {
          url: "/assets/logo/favicon-32x32.png",
          type: "image/png",
          sizes: "32x32",
        },
        {
          url: "/assets/logo/favicon-48x48.png",
          type: "image/png",
          sizes: "48x48",
        },
        {
          url: "/assets/logo/mstile-150x150.png",
          type: "image/png",
          sizes: "150x150",
        },
        {
          url: "/assets/logo/favicon.ico",
          type: "image/x-icon",
        },
      ],
      shortcut : logo,
      apple : "assets/logo/apple-touch-icon.png",
      other: [{
        rel: "apple-touch-icon-precomposed",
        url: "/assets/logo/apple-touch-icon.png",
      },
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