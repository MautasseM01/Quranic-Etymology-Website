import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Noto_Sans_Arabic } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  fallback: ["system-ui", "arial"],
})

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
  fallback: ["system-ui", "arial"],
})

export const metadata: Metadata = {
  title: "Quranic Etymology Explorer | مستكشف علم الاشتقاق القرآني",
  description:
    "Discover the deep meanings behind every Quranic word through comprehensive etymology analysis | اكتشف المعاني العميقة وراء كل كلمة قرآنية",
  keywords: "Quran, etymology, Arabic, Islamic studies, linguistics, تفسير, قرآن, علم الاشتقاق",
  authors: [{ name: "Quranic Etymology Explorer Team" }],
  openGraph: {
    title: "Quranic Etymology Explorer",
    description: "Academic platform for studying Quranic word origins and meanings",
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quranic Etymology Explorer",
    description: "Discover the deep meanings behind every Quranic word",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e3a8a" />
      </head>
      <body className={`${inter.variable} ${notoSansArabic.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
