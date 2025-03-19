import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

const ProjectsComponent = () => {
  return (
    <main className="bg-gradient-to-br from-blue-50 to-slate-100 dark:from-[#141414] dark:to-[#143927] hero-gradient font-satoshi">
      <section className="container mx-auto px-4 py-12 pt-24">
        <h1 className="text-4xl font-bold mb-2">All Projects</h1>
        <p className="dark:text-gray-400 mb-8 w-full md:max-w-3xl">
          Here are some of my works you can check out. I have worked on a
          variety of projects, from web applications to mobile apps, and I am
          always looking for new challenges and opportunities to learn.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group relative">
              <Link
                href={`/projects/${project.slug}`}
                className="block bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  width={640}
                  height={360}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"></div>
                <div className="p-4">
                  <h3 className="font-medium mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                    {project.shortDescription}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectsComponent;
