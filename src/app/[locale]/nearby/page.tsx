import gallery from "@/gallery-data.json";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { nearby, nearbyLabels, nearbyLanguages, nearbyPath, placeCity, placePhoto } from "@/content/nearby";
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
  const cities = [...new Set(nearby.map(placeCity))];
  return (
    <main>
      <header className="guide-hero" style={{ backgroundImage: `linear-gradient(#14281eb0, #14281edc), url("${gallery[0]}")` }}>
        <div className="guide-wrap">
          <h1 className="hero-title">{labels.title}</h1>
          <p>{labels.intro}</p>
        </div>
      </header>
      <div className="guide-wrap guide-body">
        {cities.map((city) => (
          <section key={city}>
            <h2>{city}</h2>
            <ul className="nearby-cards">
              {nearby.filter((place) => placeCity(place) === city).map((place) => (
                <li key={place.slug}>
                  <Link className="info-card nearby-card" href={nearbyPath(locale, place.slug)}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={placePhoto(place.slug)?.src} alt="" loading="lazy" />
                    <span className="info-card-title">{place.names[locale]}</span>
                    <p>{place.text[locale].history}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
