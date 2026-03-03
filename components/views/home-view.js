import Image from "next/image";
import profile from "@/data/profile.json";
import projects from "@/data/projects.json";
import ProjectCard from "@/components/project-card";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { copy, localizePath } from "@/lib/i18n";

export default function HomeView({ lang }) {
  const t = copy[lang];

  return (
    <div className="main-grid min-h-screen">
      <SiteHeader lang={lang} copy={t} currentPath="/" />
      <main>
        <section className="bg-hero-gradient">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 md:grid-cols-2 md:px-6 md:py-20">
            <div className="space-y-6">
              <p className="inline-flex rounded-full bg-mint px-4 py-1 text-sm font-semibold text-ocean">
                {t.role}
              </p>
              <h1 className="font-heading text-4xl leading-tight text-night md:text-6xl">
                {t.home.intro}
              </h1>
              <p className="max-w-xl text-lg text-ocean">{t.home.summary}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={localizePath("/contact", lang)}
                  className="rounded-full bg-ocean px-6 py-3 text-sm font-semibold text-cloud transition hover:bg-night"
                >
                  {t.cta.contact}
                </a>
                <a
                  href={localizePath("/projects", lang)}
                  className="rounded-full border border-ocean px-6 py-3 text-sm font-semibold text-ocean transition hover:border-coral hover:text-coral"
                >
                  {t.cta.projects}
                </a>
              </div>
            </div>
            <div className="relative mx-auto h-[360px] w-full max-w-sm overflow-hidden rounded-[2rem] border border-ocean/10 bg-white shadow-soft">
              <Image
                src={profile.heroImage}
                alt={`${profile.name} portrait`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 420px"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-14 md:px-6">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-coral">
                {t.projects.subtitle}
              </p>
              <h2 className="font-heading text-3xl text-night">{t.projects.title}</h2>
            </div>
            <a
              href={localizePath("/projects", lang)}
              className="text-sm font-semibold text-ocean underline-offset-4 hover:text-coral hover:underline"
            >
              {lang === "en" ? "Browse all" : "Ver todos"}
            </a>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.slug} project={project} lang={lang} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
