"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "./LangProvider";

const languages = { zh: "中文", en: "EN", es: "ES" } as const;

export function LanguageSwitcher() {
  const { locale } = useLang();
  const pathname = usePathname();
  const suffix = pathname.split("/").slice(2).join("/");
  return (
    <div className="lang-switcher">
      {(["zh", "en", "es"] as const).map((language) => (
        <Link key={language} href={suffix ? `/${language}/${suffix}` : `/${language}`}
          className={`lang-btn ${locale === language ? "active" : ""}`}
          hrefLang={language} lang={language} aria-current={locale === language ? "page" : undefined}
          onClick={(event) => {
            if (window.location.hash && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
              event.preventDefault();
              window.location.assign(event.currentTarget.href + window.location.hash);
            }
          }}>
          {languages[language]}
        </Link>
      ))}
    </div>
  );
}
