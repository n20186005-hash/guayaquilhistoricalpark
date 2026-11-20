import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { nearby, nearbyLabels, nearbyLanguages, nearbyPath } from "@/content/nearby";
import { locales } from "@/i18n/guides";

type Props = { params: Promise<{ locale: string }> };

async function getLocale(params: Props["params"]) {
  const { locale } = await params;
  return locales.find((lang) => lang === locale) ?? notFound();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await getLocale(params);
  const { title, intro } = nearbyLabels[locale];
  return {
    title,
    description: intro,
    alternates: { canonical: nearbyPath(locale), languages: nearbyLanguages() },
  };
}

export default async function NearbyPage({ params }: Props) {
  const locale = await getLocale(params);
  const labels = nearbyLabels[locale];
  return (
    <main>
      <header className="guide-hero">
        <div className="guide-wrap">
          <nav className="guide-links">
            <Link href={`/${locale}`}>{labels.back}</Link>
            {locales.map((lang) => (
              <Link key={lang} href={nearbyPath(lang)} hrefLang={lang} lang={lang} aria-current={lang === locale ? "page" : undefined}>
                {{ en: "English", es: "Español", zh: "中文" }[lang]}
              </Link>
            ))}
          </nav>
          <h1>{labels.title}</h1>
          <p>{labels.intro}</p>
        </div>
      </header>
      <div className="guide-wrap guide-body">
        <ul>
          {nearby.map((place) => (
            <li key={place.slug}><Link href={nearbyPath(locale, place.slug)}>{place.names[locale]}</Link></li>
          ))}
        </ul>
      </div>
    </main>
  );
}
