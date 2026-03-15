"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-white dark:bg-black">
      <div className="absolute bottom-0 right-0 w-full h-96 bg-gradient-to-t from-purple-100/20 dark:from-purple-900/20 via-transparent to-transparent" />

      <div className="container max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <div className="relative group max-h-[650px] overflow-hidden rounded-lg">
              <div className="relative rounded-lg overflow-hidden bg-transparent h-full">
                <Image
                  src="/Images/me.png"
                  alt="Ezhar Ahmad"
                  width={600}
                  height={650}
                  className="w-full h-full object-cover object-top transition duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              About Me
            </h2>

            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p>
                Passionate web developer crafting modern, responsive websites
                and web applications. Skilled in front-end and back-end
                development, delivering high-quality digital solutions.
                Let&apos;s bring your ideas to life with clean and efficient
                code!
              </p>

              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new
                technologies, contributing to open-source projects, or sharing
                knowledge with the developer community.
              </p>
            </div>
          </motion.div> */}

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              About Me
            </h2>

            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p>
                Front-end focused Full Stack Developer with 5+ years of experience building scalable, high
                performance web applications using React.js, Next.js, Typescript, and modern front-end
                architecture principles. Strong expertise in component-based architecture, state
                management, performance optimization, responsive design, and UI scalability. Experienced
                in improving load times by up to 30%, resolving production issues, and delivering pixel-
                perfect, accessible interfaces aligned with design systems. Additionally experienced in back-
                end development using Node Js, Express Js, MongoDB, and Nest Js, building secure RESTful
                APIs and scalable back-end systems.
              </p>
            </div>
            {/* Skills Section */}
            <div className="mt-16">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-6">
                Technologies I Work With
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "React.js",
                  "Next.js",
                  "TypeScript",
                  "JavaScript (ES6+)",
                  "Material UI",
                  "Tailwind CSS",
                  "Node.js",
                  "Express.js",
                  "Nest.js",
                  "RESTful APIs",
                  "JWT Auth",
                  "MongoDB",
                  "Mongoose",
                  "PostgreSQL",
                  "Prisma ORM",
                  "Git & GitHub",
                  "GitHub Actions",
                  "CI/CD",
                  "Azure",
                  "Agile/Scrum",
                  "Jira",
                  "Unit Testing",
                ].map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-white dark:bg-gray-800 ring-1 ring-purple-500/20 
                    text-gray-700 dark:text-gray-300 rounded-lg text-sm hover:ring-purple-500/40 
                    shadow-sm hover:shadow transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-12">
              {[
                {
                  number: "5+",
                  label: "Years",
                  color: "from-purple-600 to-indigo-600",
                },
                {
                  number: "10+",
                  label: "Projects",
                  color: "from-blue-600 to-cyan-600",
                },
                // {
                //   number: "3+",
                //   label: "Clients",
                //   color: "from-emerald-600 to-teal-600",
                // },
                // {
                //   number: "99%",
                //   label: "Success",
                //   color: "from-orange-600 to-amber-600",
                // },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -5 }}
                  className="p-4 rounded-lg bg-white dark:bg-gray-800 ring-1 ring-gray-200/50 
                  dark:ring-gray-800/50 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div
                    className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
