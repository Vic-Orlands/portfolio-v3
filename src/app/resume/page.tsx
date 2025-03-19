"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExperienceCard, ProjectCard, WritingCard } from "./card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Phone,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Code,
  FileText,
  Globe,
} from "lucide-react";

const ResumePage = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <main className="bg-gradient-to-br from-blue-50 to-slate-100 dark:from-[#141414] dark:to-[#143927] hero-gradient pt-24">
      <div className="max-w-6xl mx-auto p-4 md:p-8 min-h-screen font-satoshi">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
            Chimezie Innocent
          </h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6"
          >
            Software Engineer
          </motion.h2>

          <motion.div
            className="flex flex-wrap justify-center gap-3 md:gap-6 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Badge className="flex items-center gap-1 px-3 py-1.5 text-sm bg-blue-100 hover:bg-blue-200 text-blue-800 border-none">
              <Phone size={14} /> <span>+2348051215760</span>
            </Badge>
            <Badge className="flex items-center gap-1 px-3 py-1.5 text-sm bg-blue-100 hover:bg-blue-200 text-blue-800 border-none">
              <Mail size={14} /> <span>chimezieinnocent39@gmail.com</span>
            </Badge>
            <Badge className="flex items-center gap-1 px-3 py-1.5 text-sm bg-blue-100 hover:bg-blue-200 text-blue-800 border-none">
              <Linkedin size={14} /> <span>LinkedIn</span>
            </Badge>
            <Badge className="flex items-center gap-1 px-3 py-1.5 text-sm bg-blue-100 hover:bg-blue-200 text-blue-800 border-none">
              <Github size={14} /> <span>GitHub</span>
            </Badge>
            <Badge className="flex items-center gap-1 px-3 py-1.5 text-sm bg-blue-100 hover:bg-blue-200 text-blue-800 border-none">
              <MapPin size={14} /> <span>PortHarcourt, Nigeria</span>
            </Badge>
          </motion.div>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-10"
        >
          <Card className="border shadow-sm hover:shadow-md transition-shadow dark:bg-accent-foreground">
            <CardContent className="p-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Passionate and dedicated professional with over 3 years of
                experience building scalable and robust web and mobile
                applications. Adept at using React, React Native, Expo,
                JavaScript, and TypeScript to create innovative solutions. Also
                an experienced technical writer with publications on LogRocket,
                Prismic, and Strapi. Committed to staying up-to-date with the
                latest technologies and best practices in frontend development.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Content */}
        <Tabs
          defaultValue={activeTab}
          onValueChange={setActiveTab}
          className="mb-6"
        >
          <TabsList className="grid grid-cols-4 w-full max-w-2xl mx-auto mb-8">
            <TabsTrigger value="experience" className="flex items-center gap-2">
              <Briefcase size={16} />
              <span className="hidden sm:inline">Experience</span>
            </TabsTrigger>
            <TabsTrigger value="skills" className="flex items-center gap-2">
              <Code size={16} />
              <span className="hidden sm:inline">Skills</span>
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center gap-2">
              <GraduationCap size={16} />
              <span className="hidden sm:inline">Education</span>
            </TabsTrigger>
            <TabsTrigger value="writing" className="flex items-center gap-2">
              <FileText size={16} />
              <span className="hidden sm:inline">Writing</span>
            </TabsTrigger>
          </TabsList>

          {/* Experience Tab */}
          <TabsContent value="experience" className="mt-0">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={activeTab === "experience" ? "visible" : "hidden"}
              className="space-y-6"
            >
              <motion.div variants={itemVariants}>
                <ExperienceCard
                  company="CloudPlexo"
                  position="Frontend Engineer"
                  period="March 2022 - Present"
                  location="Remote"
                  responsibilities={[
                    "Developing and maintaining CloudPlexo's React codebase that served thousands of users/companies daily.",
                    "Building WenduCCMP, a cloud security platform for monitoring cloud security issues.",
                    "Developing iLearnCloud, an e-learning platform with mobile applications for cloud technology training.",
                    "Working on Amazon Rekognition for image, video, and live stream detection using AWS and Python.",
                    "Building Wendu, a mobile application for both Android and iOS - an agentless cloud security and cost management platform.",
                  ]}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <ExperienceCard
                  company="Freelance Developer"
                  position="Mobile & Frontend Engineer"
                  period="October 2020 - Present"
                  location="Remote"
                  responsibilities={[
                    "Developed Cyber.ng, a data subscription app using React Native, Expo, and Django for iOS and Android.",
                    "Built a custom Image Editor app with React Native and Expo for mobile devices.",
                    "Co-developed the 'Nu-Size Sewing Pattern' app using React Native, Expo, Python, and Django.",
                    "Built LoveAfrica, a dating app with React Native, Firebase, Expo, and Agora.",
                    "Developed BLE-Manager, an application that connects to BLE devices like smartwatches and health monitors.",
                  ]}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <ExperienceCard
                  company="SpendWise.ng"
                  position="Frontend Developer"
                  period="October 2020 - May 2021"
                  location="Remote"
                  responsibilities={[
                    "Developed and maintained SpendWise - an expense management and payment solution for businesses.",
                    "Optimized web pages for speed, scalability, and best coding practices.",
                    "Collaborated with designers to transform visual concepts into functional pages.",
                  ]}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <ExperienceCard
                  company="LearnFactory Nigeria"
                  position="Software Developer Intern"
                  period="July 2019 - December 2019"
                  location="Aba, Nigeria"
                  responsibilities={[
                    "Designed and developed user-friendly web applications using HTML, CSS, and JavaScript.",
                    "Collaborated with designers to transform visual concepts into functional pages.",
                    "Worked with Linux and Node.js technologies and tools.",
                  ]}
                />
              </motion.div>
            </motion.div>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={activeTab === "skills" ? "visible" : "hidden"}
            >
              <Card className="border shadow-sm dark:bg-accent-foreground">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div variants={itemVariants}>
                      <h3 className="text-xl font-medium mb-4 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                        <Code size={20} className="text-blue-600" /> Languages
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "JavaScript",
                          "TypeScript",
                          "HTML",
                          "CSS",
                          "Python",
                        ].map((skill, index) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Badge className="px-3 py-1.5 text-sm">
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <h3 className="text-xl font-medium mb-4 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                        <Code size={20} className="text-blue-600" /> Libraries & Frameworks
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "React",
                          "React Native",
                          "Next.js",
                          "Remix",
                          "Redux",
                          "Expo",
                          "TailwindCSS",
                          "Framer Motion",
                          "GSAP",
                        ].map((skill, index) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Badge className="px-3 py-1.5 text-sm">
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <h3 className="text-xl font-medium mb-4 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                        <Code size={20} className="text-blue-600" /> Tools
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Git",
                          "GitHub",
                          "GitLab",
                          "Firebase",
                          "Supabase",
                          "Linux Ubuntu",
                          "macOS",
                          "Notion",
                          "Trello",
                        ].map((skill, index) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Badge className="px-3 py-1.5 text-sm">
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <h3 className="text-xl font-medium mb-4 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                        <Code size={20} className="text-blue-600" /> Testing & Other
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Jest",
                          "Cypress",
                          "Selenium",
                          "AWS",
                          "Problem Solving",
                          "AppCenter",
                          "Sentry",
                          "LogRocket",
                        ].map((skill, index) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Badge className="px-3 py-1.5 text-sm">
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education">
            <motion.div
              variants={fadeInVariants}
              initial="hidden"
              animate={activeTab === "education" ? "visible" : "hidden"}
            >
              <Card className="border shadow-sm hover:shadow-md transition-shadow dark:bg-accent-foreground">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="text-blue-600" size={24} />
                      <span>Federal University of Technology, Owerri</span>
                    </div>
                    <Badge>Nigeria</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-gray-700 dark:text-gray-300/80">
                    B.Tech. Information Technology
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Technical Writing Tab */}
          <TabsContent value="writing">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={activeTab === "writing" ? "visible" : "hidden"}
              className="space-y-6"
            >
              <motion.div variants={itemVariants}>
                <WritingCard
                  company="Prismic"
                  position="Technical Writer"
                  period="August 2023 - Present"
                  responsibilities={[
                    "Writing technical articles on integrating Prismic (Headless CMS) into frontend frameworks like React and Next.js.",
                    "Creating content on trends and concepts in Frontend and Headless CMS.",
                  ]}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <WritingCard
                  company="LogRocket"
                  position="Technical Writer"
                  period="October 2021 - Present"
                  responsibilities={[
                    "Writing technical articles on frontend technologies, frameworks, libraries, and concepts.",
                    "Making web and mobile concepts easier to understand for developers through tutorials.",
                    "Published over 24 articles focusing on React, React Native, Expo, and Remix.",
                  ]}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <WritingCard
                  company="Strapi"
                  position="Technical Writer"
                  period="October 2021 - Present"
                  responsibilities={[
                    "Producing technical articles demystifying Strapi CMS, covering advanced use cases and integrations.",
                    "Enhancing developer understanding of Headless CMS through detailed tutorials and resources.",
                  ]}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <WritingCard
                  company="IamOnDemand"
                  position="Technical Writer"
                  period="2021 - 2022"
                  responsibilities={[
                    "Ghostwriting for client companies of IOD, an Israel-based company.",
                    "Creating technical documentation and marketing content.",
                  ]}
                />
              </motion.div>

              <motion.div variants={itemVariants} className="mt-8">
                <Card className="border shadow-sm hover:shadow-md transition-shadow dark:bg-accent-foreground">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-blue-700">
                      <div className="flex items-center gap-2">
                        <Globe size={20} />
                        <span>Writing Portfolio</span>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <a
                        href="https://blog.logrocket.com/author/chimezieinnocent/"
                        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent hover:text-violet-600 transition-colors"
                      >
                        <ExternalLink size={14} className="text-blue-600" />{" "}
                        LogRocket Blog
                      </a>
                      <a
                        href="https://dev.to/mezieiv"
                        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent hover:text-violet-600 transition-colors"
                      >
                        <ExternalLink size={14} className="text-blue-600" />{" "}
                        Dev.to Profile
                      </a>
                      <a
                        href="https://hashnode.com/@genioAlfa"
                        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent hover:text-violet-600 transition-colors"
                      >
                        <ExternalLink size={14} className="text-blue-600" />{" "}
                        Hashnode Articles
                      </a>
                      <a
                        href="https://strapi.io/user/chimezie-innocent"
                        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent hover:text-violet-600 transition-colors"
                      >
                        <ExternalLink size={14} className="text-blue-600" />{" "}
                        Strapi Contributions
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* Projects Section - Could be expanded */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Briefcase size={24} className="text-blue-600" />
            <span>Notable Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="LoveAfrica"
              description="A dating app with swipe functionality, messaging, and video calls"
              tech={["React Native", "Firebase", "Expo", "Agora"]}
              color="bg-pink-100"
            />
            <ProjectCard
              title="Cyber.ng"
              description="Data and telecom subscription app for internet, TV, and utility bill payments"
              tech={["React Native", "Expo", "Python", "Django"]}
              color="bg-blue-100"
            />
            <ProjectCard
              title="WM-HAS"
              description="Waste Management and Hazard Alert System using IoT to monitor refuse dumps"
              tech={["Web Application", "IoT"]}
              color="bg-green-100"
            />
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default ResumePage;
