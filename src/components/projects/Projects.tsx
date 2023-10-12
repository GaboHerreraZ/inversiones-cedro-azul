"use client";
import { useTranslations } from "next-intl";
import { Container } from "../container/container";
import { ProjectBody } from "./ProjectBody";
import { ProjectHeader } from "./ProjectHeader";

export const Projects = () => {
  const t = useTranslations("projects");

  const leftSide = (
    <ProjectHeader title={t("title")} subtitle={t("subtitle")} />
  );
  const rightSide = <ProjectBody />;

  return (
    <Container
      darkRightSide={false}
      bgImage={"bg-projects"}
      leftSide={leftSide}
      rightSide={rightSide}
    />
  );
};
