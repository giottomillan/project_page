import projects from "@/data/projects.json";
import ProjectCard from "@/components/project-card";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { copy } from "@/lib/i18n";

export default function ProjectsView({ lang }) {
  const t = copy[lang];

  return (
    <div className="main-grid min-h-screen">
      <SiteHeader lang={lang} copy={t} currentPath="/projects" />
      <main className="mx-auto w-full max-w-6xl px-4 py-14 md:px-6">
        <div className="mb-10 max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-coral">
            {t.projects.subtitle}
          </p>
          <h1 className="font-heading text-4xl text-night md:text-5xl">{t.projects.title}</h1>
          <p className="text-lg text-ocean">
            {lang === "en"
              ? "Selected work across analytics, machine learning, and data engineering."
              : "Trabajo seleccionado en analitica, machine learning e ingenieria de datos."}
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} lang={lang} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
