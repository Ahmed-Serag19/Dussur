"use client";

import { useLocale, useTranslations } from "next-intl";
import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function ProjectsSection() {
  const locale = useLocale();
  const t = useTranslations();

  const projects = [
    {
      name: "DWash",
      nameAr: "دي واش",
      link: "https://dw.dussur.sa/",
      image: "/images/dwash-icon.webp",
      lightBg: false,
    },
    {
      name: "Aqaar",
      nameAr: "عقار",
      link: "https://aqaar.dussur.sa/",
      image: "/images/aqar-icon.webp",
      lightBg: false,
    },
    {
      name: "Mehna",
      nameAr: "مهنة",
      link: null, // No link yet
      image: "/images/mehna-icon.png",
      lightBg: true, // Lighter background for dark logo
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-neutral-950 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400 mb-6">
            {t("our_projects")}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            {t("projects_description")}
          </p>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} locale={locale} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({
  project,
  index,
  locale,
  t,
}: {
  project: {
    name: string;
    nameAr: string;
    link: string | null;
    image: string;
    lightBg?: boolean;
  };
  index: number;
  locale: string;
  t: (key: string) => string;
}) => {
  const projectName = locale === "en" ? project.name : project.nameAr;
  const isMehna = project.name === "Mehna";
  
  const content = (
    <m.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      className={`group relative h-full ${
        project.link ? "cursor-pointer" : "cursor-default"
      }`}
    >
      <m.div
        className={`h-full relative overflow-hidden rounded-2xl p-8 border transition-all duration-300 ${
          project.lightBg
            ? "bg-gray-100 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700"
            : "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800"
        } ${
          project.link
            ? "hover:shadow-2xl hover:border-primary/50 dark:hover:border-primary/50"
            : ""
        }`}
        whileHover={project.link ? { scale: 1.02 } : {}}
        transition={{ duration: 0.3 }}
      >
        {/* Hover Highlight Gradient */}
        {project.link && (
          <m.div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-primary/5 via-transparent to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
        )}

        <div className="relative z-10 flex flex-col h-full items-center text-center">
          <m.div 
            className={`mb-6 p-4 rounded-xl shadow-sm w-32 h-32 flex items-center justify-center transition-all duration-300 ${
              project.lightBg
                ? "bg-white dark:bg-neutral-700"
                : "bg-neutral-50 dark:bg-neutral-800"
            }`}
            whileHover={{ 
              scale: 1.15,
              rotate: [0, -5, 5, -5, 0],
              transition: { duration: 0.5 }
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.15 + 0.2,
              type: "spring",
              stiffness: 150
            }}
          >
            <m.div
              animate={isMehna ? {
                y: [0, -5, 0],
              } : {}}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5
              }}
            >
              <Image
                src={project.image}
                alt={projectName}
                width={120}
                height={120}
                className="object-contain"
              />
            </m.div>
          </m.div>

          <m.h3 
            className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-3 group-hover:text-primary transition-colors duration-300"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.15 + 0.3 
            }}
          >
            {projectName}
          </m.h3>

          {project.link && (
            <m.p 
              className="text-sm text-blue-600 dark:text-blue-400 mt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.15 + 0.4 
              }}
              whileHover={{ scale: 1.1 }}
            >
              {t("visit_project")}
            </m.p>
          )}
        </div>
      </m.div>
    </m.div>
  );

  if (project.link) {
    return (
      <Link href={project.link} target="_blank" rel="noopener noreferrer">
        {content}
      </Link>
    );
  }

  return content;
};
