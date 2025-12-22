import { projects } from "@/data/projects";
import { ProjectsPageClient } from "@/components/projects/ProjectsPageClient";

export default function ProjectsPage() {
  return <ProjectsPageClient projects={projects} />;
}
