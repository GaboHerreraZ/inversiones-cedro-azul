"use client";
import { useTranslations } from "next-intl";
import { ProjectHeader } from "@/components/Projectss/ProjectHeader";
import { ProjectBody } from "@/components/Projectss/ProjectBody";
import { Container } from "@/components/Container/Container";

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

  return <Container bgImage={"bg-projects"} header={header} body={body} />;
};
