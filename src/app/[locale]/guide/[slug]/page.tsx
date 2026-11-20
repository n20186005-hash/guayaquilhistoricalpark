import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guideLabels, guideLanguages, guidePath, guides, locales, municipalGuide, parkAuthority, parkMap, siteUrl, slugs } from "@/i18n/guides";
import gallery from "@/gallery-data.json";

type Params = { locale: string; slug: string };
type Props = { params: Promise<Params> };

function resolve({ locale, slug }: Params) {
  const language = locales.find((value) => value === locale);
  const topic = slugs.find((value) => value === slug);
  if (!language || !topic) notFound();
  return { language, topic, guide: guides[language][topic], labels: guideLabels[language] };
}

export function generateStaticParams({ params }: { params: { locale: string } }) {
  return locales.some((locale) => locale === params.locale) ? slugs.map((slug) => ({ slug })) : [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { language, topic, guide } = resolve(await params);
  const url = guidePath(language, topic);
  return {
    title: { absolute: guide.title },
    description: guide.description,
    alternates: { canonical: url, languages: guideLanguages(topic) },
    openGraph: { type: "article", title: guide.title, description: guide.description, url, images: [gallery[0]] },
    twitter: { card: "summary_large_image", title: guide.title, description: guide.description, images: [gallery[0]] },
  };
}

export default async function GuidePage({ params }: Props) {
  const { language, topic, guide, labels } = resolve(await params);
  const home = `/${language}`;
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: labels.home, item: siteUrl + home },
      { "@type": "ListItem", position: 2, name: guide.title, item: siteUrl + guidePath(language, topic) },
    ],
  };
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs).replace(/</g, "\\u003c") }} />
      <header className="guide-hero" style={{ backgroundImage: `linear-gradient(#14281ee0, #14281eba), url("${gallery[0]}")` }}>
        <div className="guide-wrap">
          <nav className="guide-links">
            <Link href={home}>{labels.home}</Link>
            {locales.map((locale) => <Link key={locale} href={guidePath(locale, topic)} hrefLang={locale} lang={locale} aria-current={locale === language ? "page" : undefined}>{{ en: "English", es: "Español", zh: "中文" }[locale]}</Link>)}
          </nav>
          <h1>{guide.title}</h1>
          <p>{guide.description}</p>
          <p>{labels.time}</p>
          <a href={parkMap}>{labels.map}</a>
        </div>
      </header>
      <div className="guide-wrap guide-body">
        <section>
          <h2>{labels.explore}</h2>
          <h3>{guide.sections[0][0]}</h3>
          <p>{guide.sections[0][1]}</p>
        </section>
        <section>
          <h2>{labels.about}</h2>
          <p><a href={parkAuthority}>{labels.operator}</a></p>
        </section>
        <section>
          <h2>{labels.facts}</h2>
          <dl className="info-card guide-facts">
            <dt>{labels.address}</dt><dd>Av. Río Esmeraldas, Samborondón 092301, Ecuador</dd>
            <dt>{labels.hours}</dt><dd>{labels.time}</dd>
            <dt>{labels.fees}</dt><dd>{labels.price}</dd>
          </dl>
          <p>{labels.check}</p>
        </section>
        <section><h2>{labels.transport}</h2><p>{labels.directions}</p><a href={parkMap}>{labels.map}</a></section>
        <section><h2>{labels.route}</h2><ol>{guide.route.map((step) => <li key={step}>{step}</li>)}</ol></section>
        <section><h2>{guide.sections[1][0]}</h2><p>{guide.sections[1][1]}</p></section>
        {topic === "photo-guide" && (
          <section>
            <h2>{labels.photos}</h2>
            <div className="gallery-grid">
              {gallery.slice(0, 4).map((image, index) => (
                <a className="gallery-item" key={image} href={image}>
                  {/* Existing local gallery photos retain their original files. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={image} alt={`${labels.photos} ${index + 1}`} loading="lazy" />
                </a>
              ))}
            </div>
            <Link href={`${home}#gallery`}>{labels.photos}</Link>
          </section>
        )}
        <section><h2>{labels.faq}</h2><h3>{guide.faq[0]}</h3><p>{guide.faq[1]}</p></section>
        <section>
          <h2>{labels.guides}</h2>
          <ul>{slugs.filter((slug) => slug !== topic).map((slug) => <li key={slug}><Link href={guidePath(language, slug)}>{guides[language][slug].title}</Link></li>)}</ul>
        </section>
        <section><h2>{labels.sources}</h2><ul><li><a href={parkAuthority}>{labels.operator}</a></li><li><a href={municipalGuide}>{labels.municipality}</a></li></ul></section>
      </div>
    </main>
  );
}
