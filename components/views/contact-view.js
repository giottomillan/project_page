import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import profile from "@/data/profile.json";
import { copy } from "@/lib/i18n";

export default function ContactView({ lang }) {
  const t = copy[lang];

  return (
    <div className="main-grid min-h-screen">
      <SiteHeader lang={lang} copy={t} currentPath="/contact" />
      <main className="mx-auto w-full max-w-4xl px-4 py-14 md:px-6">
        <section className="rounded-3xl border border-ocean/10 bg-white p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-wide text-coral">{t.contact.title}</p>
          <h1 className="mt-2 font-heading text-4xl text-night md:text-5xl">{t.contact.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-ocean">{t.contact.body}</p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-2xl border border-ocean/20 bg-cloud p-4 transition hover:border-coral"
              aria-label={`Send email to ${profile.email}`}
            >
              <p className="text-xs uppercase tracking-wider text-ocean/80">Email</p>
              <p className="mt-1 font-semibold text-night">{profile.email}</p>
            </a>
            <a
              href={profile.socials.find((s) => s.label === "LinkedIn")?.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-ocean/20 bg-cloud p-4 transition hover:border-coral"
              aria-label="Open LinkedIn profile"
            >
              <p className="text-xs uppercase tracking-wider text-ocean/80">LinkedIn</p>
              <p className="mt-1 font-semibold text-night">/in/giotto-millan</p>
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
