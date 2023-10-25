"use client";
import { useTranslations } from "next-intl";
import { ProjectHeader } from "@/components/Projects/ProjectHeader";
import { ProjectBody } from "@/components/Projects/ProjectBody";
import { Container } from "@/components/Container/Container";
import project from "../../../public/img/proyectos.png";

export const Projects = () => {
  const t = useTranslations("projects");
  const description = [t("slogan-1"), t("slogan-2")];

  const header = (
    <ProjectHeader
      title={t("title")}
      subtitle={t("subtitle")}
      description={description}
    />
  );
  const body = <ProjectBody />;

  return <Container bgImage={project} header={header} body={body} />;
};
