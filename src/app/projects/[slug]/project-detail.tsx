"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Github, ExternalLink, Calendar, ArrowLeft } from "lucide-react";
import { Project } from "@/types/project";
import Image from "next/image";

interface ProjectDetailProps {
  project: Project;
  relatedProjects: Project[];
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  relatedProjects,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {/* Main content */}
      <div className="md:col-span-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            {project.title}
          </h1>

          <div className="aspect-video rounded-lg overflow-hidden mb-8 shadow-lg">
            <Image
              src={project.cover}
              alt={project.title}
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />
          </div>

          <div className="mb-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-sm shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 mb-8 text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span>{project.date}</span>
            </div>

            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-black dark:hover:text-white transition-colors"
              >
                <Github size={16} className="mr-1" />
                <span>GitHub</span>
              </Link>
            )}

            {project.demoUrl && (
              <Link
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-black dark:hover:text-white transition-colors"
              >
                <ExternalLink size={16} className="mr-1" />
                <span>Live Demo</span>
              </Link>
            )}

            {project.externalUrl && (
              <Link
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-black dark:hover:text-white transition-colors"
              >
                <ExternalLink size={16} className="mr-1" />
                <span>External Link</span>
              </Link>
            )}
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: project.description }} />
          </div>
        </motion.div>
      </div>

      {/* Sidebar */}
      <motion.aside
        className="space-y-8"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Project Info */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium mb-4">Project Details</h3>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm text-gray-500 dark:text-gray-400">
                Tech Stack
              </h4>
              <ul className="mt-2 space-y-1">
                {project.stack.map((tech) => (
                  <li key={tech} className="flex items-center">
                    <div className="w-1 h-1 bg-green-500 rounded-full mr-2"></div>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm text-gray-500 dark:text-gray-400">
                Project Scope
              </h4>
              <ul className="mt-2 space-y-1">
                {project.scope.map((item) => (
                  <li key={item} className="flex items-center">
                    <div className="w-1 h-1 bg-blue-500 rounded-full mr-2"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium mb-4">Other Projects</h3>

          <div className="space-y-4">
            {relatedProjects.map((relatedProject) => (
              <Link
                key={relatedProject.id}
                href={`/projects/${relatedProject.slug}`}
                className="block group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                    <Image
                      src={relatedProject.thumbnail}
                      alt={relatedProject.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div>
                    <h4 className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {relatedProject.title}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                      {relatedProject.shortDescription}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="/projects"
            className="mt-6 inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            View all projects
            <ArrowLeft size={14} className="ml-1 rotate-180" />
          </Link>
        </div>
      </motion.aside>
    </div>
  );
};

export default ProjectDetail;
