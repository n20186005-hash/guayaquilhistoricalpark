import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { nearby, nearbyLabels, nearbyLanguages, nearbyPath, placeAuthority, placeMap, placePhoto, placeSource, placeTransit } from "@/content/nearby";
import { areaTransit, areas, getVisit, kinds, visitAccess, visitLabels, visitNotice } from "@/content/nearby-visit";
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
  const copy = visitLabels[lang];
  const visit = getVisit(place.slug);
  const area = areas[lang][visit.area];
  const kind = kinds[lang][visit.kind];
  const { hours, price, operator } = visitAccess(lang, visit.access);
  const accessSource = operator ?? source;
  const city = place.manager === "theatre" ? "Samborondón" : "Guayaquil";
  const address = `${place.address}, ${city}, ${copy.countryName}`;
  const url = siteUrl + nearbyPath(lang, place.slug);
  const details = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name,
    url,
    description: text.history,
    hasMap: map,
    address: { "@type": "PostalAddress", streetAddress: place.address, addressLocality: city, addressCountry: "EC" },
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
          <p>{kind} · {area[0]}</p>
          <p><a href={map}>{copy.rating}</a></p>
          <p>{hours}</p>
          <p>{place.address}</p>
          <a href={map}>{labels.map}</a>
        </div>
      </header>
      <div className="guide-wrap guide-body">
        <section>
          <h2>{copy.intro} · {name}</h2>
          <p>{text.history}</p>
          <h3>{copy.advice}</h3>
          <p>{visit.text[lang].tip}</p>
          <h3>{copy.highlights}</h3>
          <ul>{visit.route.slice(1).map((stop) => <li key={stop} lang="es">{stop}</li>)}</ul>
        </section>
        <section>
          <h2>{labels.about} · {name}</h2>
          <p>{labels.authority} · <a href={manager.url}>{manager.name}</a></p>
        </section>
        <section>
          <h2>{labels.facts}</h2>
          <table className="guide-info-table">
            <tbody>
              <tr><th scope="row">{labels.officialName}</th><td lang="es">{place.names.es}</td></tr>
              <tr><th scope="row">{copy.kind}</th><td>{kind}</td></tr>
              <tr><th scope="row">{copy.country}</th><td>{copy.countryName}</td></tr>
              <tr><th scope="row">{copy.city}</th><td>{city}</td></tr>
              <tr><th scope="row">{copy.area}</th><td>{area[0]}</td></tr>
              <tr><th scope="row">{labels.address}</th><td>{address}</td></tr>
              <tr><th scope="row">{copy.manager}</th><td><a href={manager.url}>{manager.name}</a></td></tr>
              <tr><th scope="row">{copy.duration}</th><td>{visit.duration} {copy.minutes}. {copy.editorial}</td></tr>
              <tr><th scope="row">{labels.reviews}</th><td><a href={map}>{labels.reviewLink}</a></td></tr>
            </tbody>
          </table>
        </section>
        <section><h2>{copy.hour}</h2><p>{hours}</p><p>{copy.info} <a href={accessSource}>{labels.source}</a></p></section>
        <section><h2>{copy.ticket}</h2><p>{price}</p><a href={accessSource}>{labels.source}</a></section>
        <section><h2>{labels.transport}</h2><p>{placeTransit(lang, place)}</p><p>{areaTransit[lang][visit.area]}</p><a href={map}>{labels.map}</a></section>
        <section>
          <h2>{copy.discovery}</h2>
          <p>{visit.text[lang].detail}</p>
          <p><a href={source}>{labels.source}</a></p>
        </section>
        <section>
          <h2>{labels.route}</h2>
          <ol>{visit.route.map((stop) => <li key={stop} lang="es">{stop}</li>)}</ol>
          <p>{text.walk}</p>
        </section>
        <section>
          <h2>{copy.notice}</h2>
          <p>{visitNotice(lang, visit.kind)}</p>
          <h3>{copy.faq}</h3><p><strong>{text.question}</strong> {text.answer}</p>
        </section>
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
        <section><h2>{copy.stay}</h2><p>{area[1]}</p></section>
        <section><h2>{labels.reviews}</h2><p><a href={map}>{labels.reviewLink}</a></p></section>
        <section><h2>{copy.directions}</h2><p>{address}</p><a href={map}>{labels.map}</a></section>
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
