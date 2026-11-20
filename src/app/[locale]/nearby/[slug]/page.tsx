import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { nearby, nearbyLabels, nearbyLanguages, nearbyPath, placeAdmission, placeAuthority, placeMap, placePhoto, placeSource, placeTransit } from "@/content/nearby";
import { locales, siteUrl } from "@/i18n/guides";

type Props = { params: Promise<{ locale: string; slug: string }> };

async function resolve(params: Props["params"]) {
  const { locale, slug } = await params;
  const lang = locales.find((value) => value === locale);
  const place = nearby.find((value) => value.slug === slug);
  if (!lang || !place) notFound();
  return { lang, place };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return nearby.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, place } = await resolve(params);
  const url = nearbyPath(lang, place.slug);
  const title = place.names[lang];
  const description = place.text[lang].history;
  const photo = placePhoto(place.slug);
  return {
    title, description,
    alternates: { canonical: url, languages: nearbyLanguages(place.slug) },
    openGraph: { type: "article", title, description, url, images: photo ? [photo.src] : [] },
    twitter: { card: photo ? "summary_large_image" : "summary", title, description, images: photo ? [photo.src] : [] },
  };
}

export default async function NearbyAttraction({ params }: Props) {
  const { lang, place } = await resolve(params);
  const labels = nearbyLabels[lang];
  const text = place.text[lang];
  const manager = placeAuthority(place);
  const map = placeMap(place);
  const source = placeSource(place);
  const photo = placePhoto(place.slug);
  const name = place.names[lang];
  const url = siteUrl + nearbyPath(lang, place.slug);
  const details = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name,
    url,
    description: text.history,
    hasMap: map,
    address: place.address,
    ...(photo && { image: siteUrl + photo.src }),
  };
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(details).replace(/</g, "\\u003c") }} />
      <header className="guide-hero" style={photo ? { backgroundImage: `linear-gradient(#14281ee8, #14281ebb), url("${photo.src}")` } : undefined}>
        <div className="guide-wrap">
          <nav className="guide-links">
            <Link href={nearbyPath(lang)}>{labels.title}</Link>
            {locales.map((locale) => (
              <Link key={locale} href={nearbyPath(locale, place.slug)} hrefLang={locale} lang={locale} aria-current={locale === lang ? "page" : undefined}>
                {{ en: "English", es: "Español", zh: "中文" }[locale]}
              </Link>
            ))}
          </nav>
          <h1>{name}</h1>
          <p>{text.history}</p>
          <p>{place.address}</p>
          <a href={map}>{labels.map}</a>
        </div>
      </header>
      <div className="guide-wrap guide-body">
        <section>
          <h2>{labels.about} · {name}</h2>
          <p>{labels.authority} · <a href={manager.url}>{manager.name}</a></p>
        </section>
        <section>
          <h2>{labels.facts}</h2>
          <dl className="info-card guide-facts">
            <dt>{labels.officialName}</dt><dd lang="es">{place.names.es}</dd>
            <dt>{labels.address}</dt><dd>{place.address}, {place.manager === "theatre" ? "Samborondón" : "Guayaquil"}, Ecuador</dd>
            <dt>{labels.hours}</dt><dd>{placeAdmission(lang, place.slug) ?? labels.current} <a href={source}>{labels.source}</a></dd>
          </dl>
        </section>
        <section><h2>{labels.transport}</h2><p>{placeTransit(lang, place)}</p><a href={map}>{labels.map}</a></section>
        <section><h2>{labels.route}</h2><p>{text.walk}</p></section>
        <section>
          <h2>{labels.photo}</h2><p>{text.photo}</p>
          {photo && (
            <figure className="nearby-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo.src} alt={name} loading="lazy" />
              <figcaption><a href={photo.source}>{labels.photoSource}</a></figcaption>
            </figure>
          )}
        </section>
        <section><h2>{labels.faq}</h2><h3>{text.question}</h3><p>{text.answer}</p></section>
        <section><h2>{labels.reviews}</h2><p><a href={map}>{labels.reviewLink}</a></p></section>
        {place.related.length > 0 && (
          <section>
            <h2>{labels.title}</h2>
            <ul>
              {nearby.filter(({ slug }) => place.related.includes(slug)).map((related) => (
                <li key={related.slug}><Link href={nearbyPath(lang, related.slug)}>{related.names[lang]}</Link></li>
              ))}
            </ul>
          </section>
        )}
        <p><Link href={`/${lang}`}>{labels.back}</Link></p>
      </div>
    </main>
  );
}
