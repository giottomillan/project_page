import Image from "next/image";
import { withBasePath } from "@/lib/paths";

export default function ProjectCard({ project, lang }) {
  const description = lang === "en" ? project.descriptionEn : project.descriptionEs;

  return (
    <article className="group overflow-hidden rounded-3xl border border-ocean/20 bg-sand/80 shadow-soft transition hover:-translate-y-1">
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={withBasePath(project.image)}
          alt={project.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="space-y-3 p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-coral">{project.category}</p>
        <h3 className="font-heading text-xl text-night">{project.title}</h3>
        <p className="text-sm text-ocean">{description}</p>
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center text-sm font-semibold text-ocean underline-offset-4 hover:text-coral hover:underline"
        >
          {lang === "en" ? "View project" : "Ver proyecto"}
        </a>
      </div>
    </article>
  );
}
