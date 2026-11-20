import { nearby, nearbyLanguages, nearbyPath } from "@/content/nearby";
import type { MetadataRoute } from "next";
import { guideLanguages, guidePath, locales, siteUrl, slugs } from "@/i18n/guides";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const absolute = (path: string) => new URL(path, siteUrl).href;
  const homeLanguages = { en: "/en", es: "/es", zh: "/zh", "x-default": "/en" };
  const absoluteLanguages = (languages: Record<string, string>) => ({
    languages: Object.fromEntries(Object.entries(languages).map(([locale, path]) => [locale, absolute(path)])),
  });

  return locales.flatMap((locale) => [
    { url: absolute(`/${locale}`), alternates: absoluteLanguages(homeLanguages) },
    { url: absolute(nearbyPath(locale)), alternates: absoluteLanguages(nearbyLanguages()) },
    ...nearby.map(({ slug }) => ({
      url: absolute(nearbyPath(locale, slug)),
      alternates: absoluteLanguages(nearbyLanguages(slug)),
    })),
    ...slugs.map((slug) => ({
      url: absolute(guidePath(locale, slug)),
      alternates: absoluteLanguages(guideLanguages(slug)),
    })),
  ]);
}
