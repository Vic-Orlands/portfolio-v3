import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import { Metadata } from "next";
import ProjectDetail from "./project-detail";
import { notFound } from "next/navigation";

type paramsType = Promise<{ slug: string }>;

// Generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: paramsType;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.shortDescription,
  };
}

// Generate static paths
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function Page({ params }: { params: paramsType }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  const relatedProjects = projects
    .filter(
      (p) =>
        p.id !== project.id && p.tags.some((tag) => project.tags.includes(tag))
    )
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 dark:from-[#141414] dark:to-[#143927] hero-gradient">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24">
        {/* Back button */}
        <Link
          href="/projects"
          className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={16} className="mr-1" />
          Back to Projects
        </Link>

        <ProjectDetail project={project} relatedProjects={relatedProjects} />
      </div>
    </main>
  );
}
