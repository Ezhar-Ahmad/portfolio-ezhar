"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Ace-On Technology",
    period: "Jan 2024 - Present",
    description: `Built and deployed high-performance, cloud-ready web applications using React.js, Next.js, TypeScript, and GraphQL, improving load times by 30% and enabling scalability for thousands of active users. 
    Resolved 100+ production-critical bugs, improving system reliability by 25% and
enhancing customer satisfaction metrics. Implemented scalable front-end architecture and reusable React components, reducing
development cycle time by 15%. Collaborated with cross-functional teams (QA, backend, DevOps) in Agile sprints, boosting feature delivery speed and ensuring seamless API integrations.`,
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Redux", "TailwindCSS", "Material UI", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "API Integration", "Git & GitHub"],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Software Engineer",
    company: "MTBC CareCloud",
    period: "Jul 2022 - Jul 2023",
    description: `Designed and optimized Mirth JavaScript interfaces within Mirth Connector, improving ETL workflows and data exchange efficiency by 25%. 
    Contributed to Salesforce and CareCloud app integrations, automating clinical workflows and enhancing data interoperability in healthcare IT systems. 
    Troubleshot and resolved critical bugs in medical reporting pipelines, reducing system
downtime by 30%.`,
    skills: ["JavaScript", "ETL", "PostgreSQL", "CareCloud", "Salesforce", "Mirth", "API Integrations"],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: "Front End Developer",
    company: "Enabling Systems Limited",
    period: "August 2021 - Jun 2022",
    description: `Developed and optimized high-performance, full-stack applications with React.js, ASP.NET Core, SQL, and Bootstrap. 
    Enhanced system performance by refactoring inefficient code, reducing load times by
30% and improving UX/UI responsiveness. 
Built real-time chat features with React and WebSockets, increasing feature adoption
by 20%. 
Integrated REST APIs and delivered pixel-perfect UI designs from Figma, improving
customer engagement.`,
    skills: ["JavaScript", "React.js", "ASP.NET Core", "SQL", "Bootstrap", "WebSockets", "REST APIs", "jQuery", "HTML/CSS"],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 bg-white dark:bg-black">
      <div className="absolute top-0 right-0 w-full h-96 bg-gradient-to-b from-indigo-100/20 dark:from-indigo-900/20 via-transparent to-transparent" />

      <div className="container max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400"
          >
            Professional Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-600 dark:text-gray-300"
          >
            My journey as a developer and the professional experience I&apos;ve gained along the way
          </motion.p>
        </div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl dark:shadow-gray-900/10 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300"
            >
              <div className="lg:flex gap-8">
                {/* Left Side - Title and Company */}
                <div className="lg:w-1/3 mb-6 lg:mb-0">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="p-3 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-xl text-indigo-600 dark:text-indigo-400 ring-1 ring-indigo-500/20 dark:ring-indigo-500/30"
                    >
                      {experience.icon}
                    </motion.span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {experience.title}
                      </h3>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                        {experience.company}
                      </p>
                    </div>
                  </div>
                  <div className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-sm font-medium text-indigo-800 dark:text-indigo-300">
                    {experience.period}
                  </div>
                </div>

                {/* Right Side - Description and Skills */}
                <div className="lg:w-2/3">
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.2 }}
                    className="text-gray-700 dark:text-gray-300 mb-6"
                  >
                    {experience.description}
                  </motion.p>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.4 }}
                        className="px-3 py-1 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 rounded-full text-sm font-medium text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 dark:border-indigo-500/30"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}