"use client";
import { useTranslations } from "next-intl";
import { Container } from "../Container/Container";
import { AboutUsBody } from "./AboutUsBody";
import { AboutUsHeader } from "./AboutUsHeader";
import quality from "../../../public/img/calidad.png";
import innovation from "../../../public/img/innovacion.png";
import respect from "../../../public/img/respeto.png";
import security from "../../../public/img/seguridad.png";
import service from "../../../public/img/servicio.png";

export const AboutUs = () => {
  const t = useTranslations("about-us");
  const worths = [
    {
      key: 1,
      label: t("quality"),
      image: quality,
      description: t("qualityDescription"),
    },
    {
      key: 2,
      label: t("security"),
      image: security,
      description: t("securityDescription"),
    },
    {
      key: 3,
      label: t("service"),
      image: service,
      description: t("serviceDescription"),
    },
    {
      key: 4,
      label: t("innovation"),
      image: innovation,
      description: t("innovationDescription"),
    },
    {
      key: 5,
      label: t("repect"),
      image: respect,
      description: t("repectDescription"),
    },
  ];

  const description = [t("slogan-1"), t("slogan-2")];

  const header = (
    <AboutUsHeader
      title={t("title-1")}
      subtitle={t("title-2")}
      description={description}
    />
  );
  const body = <AboutUsBody />;

  return <Container bgImage={"bg-about-us"} header={header} body={body} />;
};
