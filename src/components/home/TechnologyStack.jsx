import React from "react";
import {
  FaReact,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaAws,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiPostgresql,
  SiFastapi,
  SiDjango,
  SiSqlite,
  SiMysql,
  SiVite,
  SiFirebase,
  SiVercel,
  SiLangchain,
} from "react-icons/si";

const techCategories = [
  {
    title: "Frontend",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Vite", icon: <SiVite /> },
    ],
  },

  {
    title: "Backend",
    technologies: [
      { name: "Python", icon: <FaPython /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "Langchain", icon: <SiLangchain /> },
    ],
  },

  {
    title: "Databases",
    technologies: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "SQLite", icon: <SiSqlite /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },

  {
    title: "Tools & Version Control",
    technologies: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "AWS", icon: <FaAws /> },
    ],
  },
];

function TechnologyStack() {
  return (
    <section className="px-1 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <span className="font-medium text-primary">
            Our Technology Expertise
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl dark:text-text-light">
            Technologies We Use
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-text-secondary">
            We leverage modern technologies, frameworks, and tools to build
            scalable, secure, and high-performing digital solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 overflow-hidden">
          <div className="marquee-track">
            {[...techCategories, ...techCategories].map((category, idx) => (
              <div
                key={`${category.title}-${idx}`}
                className="marquee-card
                rounded-3xl
                border
                border-border-light
                bg-bg-light
                p-6
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
                dark:border-border-dark
                dark:bg-secondary
              "
              >
                <h3 className="mb-6 text-xl font-semibold dark:text-text-light">
                  {category.title}
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {category.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="
                        flex
                        flex-col
                        items-center
                        gap-2
                        rounded-xl
                        bg-bg-soft
                        p-3
                        transition-all
                        hover:bg-primary/10
                      "
                    >
                      <span className="text-3xl text-primary">{tech.icon}</span>

                      <span className="text-center text-xs font-medium ">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechnologyStack;
