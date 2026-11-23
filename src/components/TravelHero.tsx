import type { ReactNode } from "react";
import Link from "next/link";

export function TravelHero({ photo, title, tagline, eyebrow, breadcrumb, action, children }: {
  photo?: string;
  title: string;
  tagline: string;
  eyebrow?: string;
  breadcrumb: { label: string; href: string };
  action?: { label: string; href: string };
  children?: ReactNode;
}) {
  return (
    <header className="hero travel-hero">
      <div className="hero-bg" aria-hidden="true" style={{ backgroundImage: photo ? `url("${photo}")` : "none" }} />
      <div className="hero-texture" aria-hidden="true" />
      <div className="hero-content travel-shell">
        <Link className="travel-back" href={breadcrumb.href}><span aria-hidden="true">←</span> {breadcrumb.label}</Link>
        {eyebrow && <p className="hero-tagline">{eyebrow}</p>}
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{tagline}</p>
        {action && <a className="hero-cta" href={action.href}>{action.label} <span aria-hidden="true">↗</span></a>}
        {children}
      </div>
    </header>
  );
}

export function TravelFacts({ items }: { items: { label: string; value: ReactNode }[] }) {
  return (
    <dl className="travel-shell travel-facts">
      {items.map(({ label, value }) => (
        <div className="info-card" key={label}>
          <dt className="info-card-title">{label}</dt>
          <dd className="info-card-content">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
