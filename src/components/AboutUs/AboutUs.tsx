"use client";
import { useTranslations } from "next-intl";
import { Container } from "@/components/Containers/Container";
import { AboutUsBody } from "@/components/AboutUs/AboutUsBody";
import { AboutUsHeader } from "@/components/AboutUs/AboutUsHeader";

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
