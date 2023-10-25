"use client";
import { useTranslations } from "next-intl";
import { Container } from "@/components/Container/Container";
import { AboutUsBody } from "@/components/AboutUs/AboutUsBody";
import { AboutUsHeader } from "@/components/AboutUs/AboutUsHeader";
import aboutUs from "../../../public/img/sobre-nosotros.png";

export const AboutUs = () => {
  const t = useTranslations("about-us");

  const description = [t("slogan-1"), t("slogan-2")];

  const header = (
    <AboutUsHeader
      title={t("title-1")}
      subtitle={t("title-2")}
      description={description}
    />
  );
  const body = <AboutUsBody />;

  return <Container bgImage={aboutUs} header={header} body={body} />;
};
