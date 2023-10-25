import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Project } from "@/components/Projects/Project";
import { PROJECTS } from "@/components/Projects/const";

export const ProjectBody = () => {
  const t = useTranslations("projects");
  return (
    <section className="mx-10">
      <motion.article
        initial={{
          y: -20,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="bg-cedro-500 bg-opacity-20 my-10  md:mx-30 p-3 md:p-4 rounded-2xl text-center text-xl md:text-2xl"
      >
        <p className="text-cedro-900">
          {t("project-1")}
          <span className="font-bold">{t("project-2")}</span>
          {t("project-3")}
        </p>
      </motion.article>
      <section>
        {PROJECTS.map((project, index) => (
          <Project key={index} project={project} dateLabel={t("labelDate")} />
        ))}
      </section>
    </section>
  );
};

/**
 *
 *
 */
