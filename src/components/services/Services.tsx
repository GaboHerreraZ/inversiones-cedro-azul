"use client";

import { useTranslations } from "next-intl";
import { Container } from "../container/container";
import { ServiceHeader } from "./ServiceHeader";
import comercial from "../../../public/img/construccion-comercial.png";
import diseno from "../../../public/img/diseno-arquitectonico.png";
import remodelacion from "../../../public/img/remodelacion-renovacion.png";
import consultoria from "../../../public/img/consultoria-construccion.png";
import residencial from "../../../public/img/construccion-residencial.png";
import infraestructura from "../../../public/img/construccion-infraestructura.png";
import { ServiceSimpleBody } from "./ServiceSimpleBody";

export const Services = () => {
  const t = useTranslations("services");

  const services = [
    {
      key: 1,
      label: t("design"),
      logo: diseno,
      description: t("designDescription"),
    },
    {
      key: 2,
      label: t("consultingBuilding"),
      logo: consultoria,
      description: t("consultingBuildingDescription"),
    },
    {
      key: 3,
      label: t("building"),
      logo: residencial,
      description: t("buildingDescription"),
    },
    {
      key: 4,
      label: t("infrastructureBuilding"),
      logo: infraestructura,
      description: t("infrastructureBuildingDescription"),
    },
    {
      key: 5,
      label: t("commercialBuilding"),
      logo: comercial,
      description: t("commercialBuildingDescription"),
    },
    {
      key: 6,
      label: t("remodeling"),
      logo: remodelacion,
      description: t("remodelingDescription"),
    },
  ];

  const leftSide = (
    <ServiceHeader title={t("title-1")} subtitle={t("title-2")} />
  );

  const rightSide = (
    <ServiceSimpleBody
      services={services}
      description={t("description")}
      labelButton={t("seeProjects")}
    />
  );

  return (
    <Container
      bgImage={"bg-service"}
      leftSide={leftSide}
      rightSide={rightSide}
      darkRightSide={false}
    />
  );
};
