import Link from "next/link";
import { notFound } from "next/navigation";
import { CookiePreferences } from "@/components/CookiePreferences";
import { locales } from "@/i18n/guides";
import { policies } from "@/i18n/policies";
import { ui } from "@/i18n/ui";

const pages = ["privacy", "terms", "cookies"] as const;
type Props = { params: Promise<{ locale: string; policy: string }> };

async function resolve(params: Props["params"]) {
  const { locale, policy } = await params;
  const language = locales.find((value) => value === locale);
  const page = pages.find((value) => value === policy);
  if (!language || !page) notFound();
  return { language, page };
}

export function generateStaticParams() {
  return pages.map((policy) => ({ policy }));
}

export async function generateMetadata({ params }: Props) {
  const { language, page } = await resolve(params);
  return {
    title: ui[language][page],
    description: ui[language][page],
    alternates: {
      canonical: `/${language}/${page}`,
      languages: Object.fromEntries(locales.map((locale) => [locale, `/${locale}/${page}`])),
    },
  };
}

export default async function PolicyPage({ params }: Props) {
  const { language, page } = await resolve(params);
  const copy = policies[language];
  return (
    <main>
      <header className="guide-hero"><div className="guide-wrap"><h1>{ui[language][page]}</h1><p>{copy.updated}</p></div></header>
      <div className="guide-wrap guide-body">
        {page === "cookies" ? <CookiePreferences locale={language} /> : copy[page].map(([heading, detail, ...items]) => (
          <section key={heading}>
            <h2>{heading}</h2>
            <p>{detail}</p>
            {items.length > 0 && <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>}
          </section>
        ))}
        <Link href={`/${language}`}>{copy.back}</Link>
      </div>
    </main>
  );
}
