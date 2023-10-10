"use client";
import { useTranslations } from "next-intl";
import { Button } from "../utils/Button";
import { ArrowButton } from "../utils/ArrowButton";

export const HomeBody = () => {
  const t = useTranslations("home");

  const goToContact = () => {
    console.log("Go to contact");
  };

  return (
    <section className="h-full grid items-center justify-center p-4 md:p-10">
      <span className="text-2xl text-white  md:text-5xl font-bold">
        Sobre Nosotros
      </span>
      <article className="text-sm  text-white  md:text-xl text-justify">
        <p>
          {t("about-us-1")} <span className="font-bold">{t("about-us-2")}</span>
          {t("about-us-3")}
        </p>
        <p className="mt-4">{t("about-us-4")}</p>
      </article>
      <div className="flex w-full justify-between">
        <Button onClick={goToContact} label={t("contact")} />
        <ArrowButton
          isDark={true}
          label={t("seeAboutUs")}
          page="/sobre-nosotros"
        />
      </div>
    </section>
  );
};
