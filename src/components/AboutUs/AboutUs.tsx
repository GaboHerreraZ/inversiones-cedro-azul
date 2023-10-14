"use client";
import { useTranslations } from "next-intl";
import { Container } from "../Container/Container";
import { AboutUsBody } from "./AboutUsBody";
import { AboutUsHeader } from "./AboutUsHeader";

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

  return <Container bgImage={"bg-about-us"} header={header} body={body} />;
};
