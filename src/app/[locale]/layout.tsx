import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "../globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "guayaquilhistoricalpark.com"}`;

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: "Guayaquil Historical Park — Samborondón, Ecuador",
      template: "%s | Guayaquil Historical Park",
    },
    description:
      "A travel guide to Guayaquil Historical Park (Parque Histórico de Guayaquil) in Samborondón, Ecuador. Explore the historical heritage, wildlife, and botanical gardens.",
    keywords: [
      "Guayaquil Historical Park",
      "Parque Histórico de Guayaquil",
      "Samborondón tourism",
      "Guayaquil attractions",
      "Ecuador historical sites",
      "Parque Histórico",
    ],
    authors: [{ name: "Guayaquil Historical Park Travel Guide" }],
    creator: "Guayaquil Historical Park Travel Guide",
    publisher: "Guayaquil Historical Park Travel Guide",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: locale === 'es' ? 'es_EC' : locale === 'zh' ? 'zh_CN' : 'en_US',
      alternateLocale: ["en_US", "es_EC", "zh_CN"].filter(l => !l.startsWith(locale)),
      url: `${baseUrl}/${locale}`,
      title: "Guayaquil Historical Park — Samborondón, Ecuador",
      description:
        "A travel guide to Guayaquil Historical Park in Samborondón, Ecuador. Explore the historical heritage, wildlife, and botanical gardens.",
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
    twitter: {
      card: "summary_large_image",
      title: "Guayaquil Historical Park — Samborondón, Ecuador",
      description:
        "A travel guide to Guayaquil Historical Park in Samborondón, Ecuador.",
      images: ["/gallery/guayaquil-historical-park (1).jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "en": "/en",
        "es": "/es",
        "zh": "/zh",
        "x-default": "/en",
      },
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "zh" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale} className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
