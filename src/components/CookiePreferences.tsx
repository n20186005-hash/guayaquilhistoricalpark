"use client";

import { useEffect, useState } from "react";
import { policies } from "@/i18n/policies";
import type { Locale } from "@/i18n/translations";

const key = "guayaquil-cookie-preferences";
const defaults = [true, false, true, false];

export function CookiePreferences({ locale }: { locale: Locale }) {
  const copy = policies[locale];
  const [choices, setChoices] = useState(defaults);
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem(key);
    if (!stored) return;
    try {
      const values: unknown = JSON.parse(stored);
      if (Array.isArray(values) && values.length === defaults.length && values.every(value => typeof value === "boolean")) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setChoices([true, ...values.slice(1)]);
      }
    } catch {
      // Keep defaults if older preferences are invalid.
    }
  }, []);
  return (
    <>
      <p>{copy.intro}</p>
      {copy.categories.map(([name, description, provider], index) => (
        <section className="info-card" key={name}>
          <label><input type="checkbox" checked={choices[index]} disabled={index === 0}
            onChange={() => {
              setSaved(false);
              setChoices(choices.map((choice, i) => i === index ? !choice : choice));
            }} /> {name}</label>
          <p>{description}</p>
          <small>{copy.provider} · {provider}</small>
        </section>
      ))}
      <h2>{copy.consent}</h2><p>{copy.consentText}</p>
      <div className="policy-actions">
        <button type="button" className="google-maps-btn" onClick={() => {
          localStorage.setItem(key, JSON.stringify(choices)); setSaved(true);
        }}>{copy.save}</button>
        <button type="button" className="google-maps-btn" onClick={() => {
          const essential = [true, false, false, false];
          localStorage.setItem(key, JSON.stringify(essential)); setChoices(essential); setSaved(true);
        }}>{copy.reject}</button>
      </div>
      {saved && <p role="status">{copy.saved}</p>}
    </>
  );
}
