import React, { useState, useRef, useEffect } from "react";
import { Project } from "@/types/project";
import { motion } from "motion/react";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Stagger effect for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    // Preload the video but don't play it yet
    videoElement.load();
    videoElement.onloadeddata = () => {
      setIsVideoLoaded(true);
    };

    // Reset video when not hovering
    return () => {
      if (videoElement) {
        videoElement.currentTime = 0;
      }
    };
  }, [project.demoUrl]);

  const handleMouseEnter = () => {
    if (videoRef.current && isVideoLoaded) {
      videoRef.current.play().catch((error) => {
        console.error("Video play failed:", error);
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.a
      href={`/projects/${project.slug}`}
      className="project-card block rounded-xl"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
        {/* Image */}
        <div className="image-container absolute inset-0 bg-gray-1000">
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 image-shimmer">
              <span className="sr-only">Loading...</span>
            </div>
          )}
          <Image
            src={project.thumbnail}
            alt={project.title}
            className={`project-image w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
            width={1000}
            height={1000}
          />

          {/* Video that plays on hover */}
          <video
            ref={videoRef}
            src={project.demoUrl}
            className="project-video"
            muted
            playsInline
            loop
            preload="metadata"
          />

          {/* Overlay gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Project info overlay */}
        <motion.div
          className="bg-accent-foreground dark:project-info absolute inset-0 p-6 flex flex-col justify-end text-white"
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-xs uppercase tracking-wider mb-1 text-gray-300">
            {project.tags[0]}
          </span>
          <h3 className="text-xl font-medium">{project.title}</h3>
          {project.description.includes("<p>") ? (
            <div
              className="text-sm text-gray-200 mt-1 line-clamp-2"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
          ) : (
            <p className="text-sm text-gray-200 mt-1 line-clamp-2">
              {project.description}
            </p>
          )}
        </motion.div>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
