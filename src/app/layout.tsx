import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" }
  ],
};

export const metadata: Metadata = {
  title: "Guayaquil Historical Park — Samborondón, Ecuador",
  description: "A travel guide to Guayaquil Historical Park (Parque Histórico de Guayaquil) in Samborondón, Ecuador. Explore the historical heritage, wildlife, and botanical gardens.",
  metadataBase: new URL(`https://${process.env.CURRENT_SITE_DOMAIN || 'guayaquilhistoricalpark.com'}`),
  alternates: {
    canonical: "/en",
    languages: {
      "en": "/en",
      "es": "/es",
      "zh": "/zh",
      "x-default": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_EC", "zh_CN"],
    title: "Guayaquil Historical Park — Samborondón, Ecuador",
    description: "A travel guide to Guayaquil Historical Park in Samborondón, Ecuador.",
    siteName: "Guayaquil Historical Park Travel Guide",
    images: [
      {
        url: "/gallery/guayaquil-historical-park (1).jpg",
        width: 1200,
        height: 630,
        alt: "Guayaquil Historical Park - Samborondón, Ecuador",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
