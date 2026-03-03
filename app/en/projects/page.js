import ProjectsView from "@/components/views/projects-view";

export const metadata = {
  title: "Projects",
  description: "Data analytics, machine learning, and data engineering projects."
};

export default function EnglishProjectsPage() {
  return <ProjectsView lang="en" />;
}
