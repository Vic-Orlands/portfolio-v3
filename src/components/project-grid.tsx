import ProjectCard from "./project-card";
import { projects } from "@/data/projects";
import * as motion from "motion/react-client";

const ProjectGrid: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="work"
      className="bg-gradient-to-r from-[#d5dee9] to-[#a8d4ff] dark:from-[#141414] dark:to-[#143927] hero-gradient py-24 px-6 md:px-12"
    >
      <div className="container mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm dark:text-gray-400 block mb-3">
            Selected Work
          </span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
            Featured Projects
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.slice(0, 6).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a
            href="/projects"
            className="inline-flex items-center text-gray-300 font-medium border-b-2 border-gray-300 pb-1 transition-all"
            whileHover={{
              paddingBottom: "0.2rem",
              transition: { duration: 0.2 },
            }}
          >
            View All Projects
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectGrid;
