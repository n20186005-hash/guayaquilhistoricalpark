import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guideLabels, guideLanguages, guidePath, guides, locales, municipalGuide, parkAuthority, parkMap, siteUrl, slugs } from "@/i18n/guides";
import gallery from "@/gallery-data.json";
import { nearbyLabels, nearbyPath } from "@/content/nearby";

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

const parkContext = {
  en: {
    management: "The Municipal Public Parks Company of Samborondón has managed the park since July 2022. On the banks of the Daule in La Puntilla, its three zones explore coastal wildlife, the wooden buildings of old Guayaquil and rural life shaped by cacao.",
    rating: "4.6 out of 5 from 11,700 Google Maps reviews, as recorded on the park homepage. See Maps for the current figure.",
    country: "Ecuador",
  },
  es: {
    management: "La Empresa Pública Municipal de Parques de Samborondón administra el parque desde julio de 2022. En La Puntilla, junto al Daule, sus tres zonas reúnen fauna costera, casas de madera del antiguo Guayaquil y tradiciones rurales ligadas al cacao.",
    rating: "4,6 de 5, con 11.700 reseñas de Google Maps, según el registro de la portada. Consulta Maps para ver la cifra actual.",
    country: "Ecuador",
  },
  zh: {
    management: "桑博龙东市公共公园管理机构自 2022 年 7 月起管理历史公园。公园位于拉蓬蒂利亚的道莱河畔，三个主题区分别介绍沿海动植物、老瓜亚基尔的木构建筑，以及与可可产业有关的乡村生活。",
    rating: "首页记录的 Google 地图评分为 4.6／5，共 11,700 条评价。当前数据请查看地图。",
    country: "厄瓜多尔",
  },
} as const;

export default async function GuidePage({ params }: Props) {
  const { language, topic, guide, labels } = resolve(await params);
  const home = `/${language}`;
  const nearbyText = nearbyLabels[language];
  const park = parkContext[language];
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
          <h1 className="hero-title">{guide.title}</h1>
          <p>{guide.description}</p>
          <p>{labels.time}</p>
          <p><a href={parkMap}>{park.rating}</a></p>
          <a className="hero-cta" href={parkMap}>{labels.map}</a>
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
          <p>{park.management}</p>
          <p><a href={parkAuthority}>{labels.operator}</a></p>
        </section>
        <section>
          <h2>{labels.facts}</h2>
          <dl className="info-card guide-facts">
            <dt>{labels.address}</dt><dd>Av. Río Esmeraldas, Samborondón 092301, {park.country}</dd>
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
        <section><h2>{nearbyText.reviews}</h2><p>{park.rating}</p><a href={parkMap}>{nearbyText.reviewLink}</a></section>
        <section><h2>{nearbyText.title}</h2><Link href={nearbyPath(language)}>{nearbyText.all}</Link></section>
        <section><h2>{labels.sources}</h2><ul><li><a href={parkAuthority}>{labels.operator}</a></li><li><a href={municipalGuide}>{labels.municipality}</a></li></ul></section>
      </div>
    </main>
  );
}
