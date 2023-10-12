"use client";
import { useTranslations } from "next-intl";
import { ServiceHeader } from "./ServiceHeader";
import comercial from "../../../public/img/construccion-comercial.png";
import diseno from "../../../public/img/diseno-arquitectonico.png";
import remodelacion from "../../../public/img/remodelacion-renovacion.png";
import consultoria from "../../../public/img/consultoria-construccion.png";
import residencial from "../../../public/img/construccion-residencial.png";
import infraestructura from "../../../public/img/construccion-infraestructura.png";
import { ServiceBody } from "./ServiceBody";
import React from "react";

export const Services = React.memo(() => {
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

  const Header = (
    <ServiceHeader title={t("title")} description={t("description")} />
  );

  const body = <ServiceBody services={services} />;

  return (
    <section className="bg-service bg-center bg-cover  w-full mt-20 ">
      <div className="bg-white bg-opacity-80 py-8">
        {Header}
        {body}
      </div>
    </section>
  );
});
