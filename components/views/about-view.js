import Image from "next/image";
import profile from "@/data/profile.json";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { copy } from "@/lib/i18n";
import { withBasePath } from "@/lib/paths";

export default function AboutView({ lang }) {
  const t = copy[lang];

  return (
    <div className="main-grid min-h-screen">
      <SiteHeader lang={lang} copy={t} currentPath="/about" />
      <main className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:px-6">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-coral">{t.about.title}</p>
          <h1 className="font-heading text-4xl leading-tight text-night md:text-5xl">
            {profile.name}
          </h1>
          <p className="text-lg text-ocean">{t.about.body}</p>
          <p className="text-sm text-ocean/90">
            {lang === "en" ? "Location" : "Ubicacion"}:{" "}
            {lang === "en" ? profile.locationEn : profile.locationEs}
          </p>
          <ul className="flex flex-wrap gap-2 pt-2">
            {profile.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-ocean/30 bg-sand/80 px-3 py-1 text-sm text-ocean"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mx-auto h-[420px] w-full max-w-md overflow-hidden rounded-[2rem] border border-ocean/25 bg-sand shadow-soft">
          <Image
            src={withBasePath(profile.aboutImage)}
            alt={`${profile.name} profile`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 460px"
          />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
