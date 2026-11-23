import { SiteChrome } from "@/components/SiteChrome";
import { notFound } from "next/navigation";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import "../travel-fonts.css";
import "../globals.css";
import { siteUrl } from "@/i18n/guides";

const homeMetadata = {
  en: {
    title: "Guayaquil Historical Park | Hours, Tickets & What to See",
    description: "Plan your visit to Guayaquil Historical Park in Samborondón. Check opening hours and admission, find the entrance, and explore wildlife and historic houses.",
  },
  es: {
    title: "Parque Histórico de Guayaquil | Horarios, precios y qué ver",
    description: "Organiza tu visita al Parque Histórico de Samborondón. Consulta horarios y precios, ubica la entrada y descubre la zona de fauna y las casas históricas.",
  },
  zh: {
    title: "瓜亚基尔历史公园｜开放时间、门票与游览指南",
    description: "查询桑博龙东瓜亚基尔历史公园的开放时间、门票和入口位置，规划野生动植物区、历史建筑区与乡村传统区的行程。",
  },
};

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  const { title, description } = locale === "es" ? homeMetadata.es : locale === "zh" ? homeMetadata.zh : homeMetadata.en;
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: "%s | Guayaquil Historical Park",
    },
    description,
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
      url: `${siteUrl}/${locale}`,
      title,
      description,
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
      title,
      description,
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
  if (locale !== "zh" && locale !== "en" && locale !== "es") notFound();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="antialiased"><ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem><SiteChrome locale={locale}>{children}</SiteChrome></ThemeProvider></body>
    </html>
  );
}
