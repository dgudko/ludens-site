import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/src/data/projects";
import { ProjectPageClient } from "@/components/projects/ProjectPageClient";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();
  return <ProjectPageClient project={project} />;
}
