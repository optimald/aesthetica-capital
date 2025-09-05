import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aesthetica Capital',
  description: 'Aesthetica Capital offers fast, flexible funding solutions for aesthetic, wellness, and medical businesses. Get approved quickly with clear terms and no hidden fees.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="w-mod-js">
      <head>
        <link href="/webflow.css" rel="stylesheet" type="text/css" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#4f46e5" />
        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
        <script dangerouslySetInnerHTML={{
          __html: `WebFont.load({ google: { families: ["Inter:regular,600"] } });`
        }} />
        <script src="https://cdn.jsdelivr.net/npm/@flowbase-co/boosters-countup@1.0.2/dist/countup.js" type="text/javascript" integrity="sha384-0IP2pSZZj/RumnTPNdmVWVMghCUi8KomyEgtVRALUEK0dCfntimr1Ml1aBJtRED4" crossOrigin="anonymous"></script>
      </head>
      <body className={`${inter.className} body`}>
        {children}
      </body>
    </html>
  )
}
