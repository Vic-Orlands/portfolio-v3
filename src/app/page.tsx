"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Hero from "@/components/hero";
import ProjectGrid from "@/components/project-grid";
import { motion } from "motion/react";
import { BlogPost, getBlogPosts } from "@/data/blog";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Home: React.FC = () => {
  const [allBlogs, setAllBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      const posts = await getBlogPosts();
      setAllBlogs(posts);
    };

    fetchRelatedPosts();
  }, []);

  // Add page load animation
  useEffect(() => {
    document.body.classList.add("animate-fade-in");

    return () => {
      document.body.classList.remove("animate-fade-in");
    };
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <main className="font-satoshi bg-gradient-to-br from-blue-50 to-slate-100 dark:from-[#141414] dark:to-[#143927] hero-gradient min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100 dark:from-[#141414] dark:to-[#143927] hero-gradient -z-10" />
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-200 dark:bg-accent/10 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-30 animate-pulse"
        style={{ animationDuration: "8s" }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-200 dark:bg-secondary/10 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-30 animate-pulse"
        style={{ animationDuration: "12s" }}
      />

      <Hero />
      <ProjectGrid />

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-12">
        <div className="container mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <motion.div>
              <motion.span
                className="text-sm text-gray-500 dark:text-gray-400 block mb-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                About
              </motion.span>
              <motion.h2
                className="text-3xl md:text-4xl font-medium tracking-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Chimezie Innocent
              </motion.h2>
              <motion.p
                className="text-gray-600 dark:text-gray-200 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                I&apos;m a Software Engineer passionate about creating
                exceptional digital experiences that are both beautiful and
                functional.
              </motion.p>
              <motion.p
                className="text-gray-600 dark:text-gray-200 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                With over 8 years of experience working with startups and
                established brands, I bring a unique blend of strategic
                thinking, technical expertise, and creative vision to every
                project.
              </motion.p>
              <div>
                <p className="text-gray-600 dark:text-gray-200 mb-8">
                  I&apos;m currently available for both freelance work and
                  fulltime role. If you have a project that needs some
                  collaboration, I&apos;d love to hear from you.
                </p>
              </div>

              <motion.button
                className="flex items-center bg-black text-white px-8 py-3 rounded-full text-sm tracking-wide hover:bg-gray-800 dark:bg-accent dark:text-secondary transition-all transform"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="mr-2" />
                <a href="mailto:chimezieinnocent39@gmail.com">
                  Let&apos;s work together
                </a>
              </motion.button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.div
                className="aspect-square rounded-xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
                  alt="Designer"
                  className="w-full h-full object-cover"
                  height={1000}
                  width={1000}
                />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg glass-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="flex items-center space-x-4">
                  <motion.div
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-black dark:bg-accent dark:text-secondary text-white"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </motion.div>
                  <div>
                    <p className="text-sm font-medium">
                      99% Client Satisfaction
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-300">
                      Based on 100+ projects
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* blogs section */}
      <section className="w-full py-12 dark:text-white bg-gradient-to-r from-[#d5dee9] to-[#a8d4ff] dark:from-[#141414] dark:to-[#143927] hero-gradient">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold">Latest</h2>
            <Link href="/blog" className="text-blue-400 hover:underline">
              <Button variant="secondary">View all</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allBlogs.slice(0, 3).map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} passHref>
                <div className="bg-zinc-900 rounded-lg overflow-hidden flex flex-col h-full hover:bg-zinc-800 transition-colors">
                  {post.image && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={post.image}
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-sm text-gray-400 mb-2">
                      {post.category}
                    </span>
                    <h3 className="text-xl text-white dark:text-gray-400 font-semibold mb-3">{post.title}</h3>
                    <p className="text-gray-400 mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center space-x-2">
                        <div className="flex -space-x-3">
                          {post.authors.map((author, index) => (
                            <div
                              key={index}
                              className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-zinc-900"
                            >
                              <Image
                                src={author.image}
                                alt={author.name}
                                layout="fill"
                                objectFit="cover"
                              />
                            </div>
                          ))}
                        </div>
                        <span className="text-sm text-white dark:text-gray-400">
                          {post.authors.map((a) => a.name).join(", ")}
                        </span>
                      </div>
                      <span className="text-sm text-gray-400">{post.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
