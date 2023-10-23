import { useTranslations } from "next-intl";
import React from "react";
import quality from "../../../public/img/calidad.jpg";
import innovation from "../../../public/img/innovacion.jpg";
import respect from "../../../public/img/respeto.jpg";
import security from "../../../public/img/seguridad.png";
import { Worth } from "@/components/AboutUs/Worth";
import { motion } from "framer-motion";

export const AboutUsWorths = React.memo(() => {
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
  return (
    <div className="my-10">
      <motion.article
        initial={{
          y: -20,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="bg-cedro-500 bg-opacity-20  md:mx-30 p-3 md:p-4 rounded-2xl text-center text-xl md:text-2xl"
      >
        <p className="text-cedro-900">
          {t("about-us-1")}
          <span className="font-bold">{t("about-us-2")}</span>
          {t("about-us-3")}
        </p>
      </motion.article>
      <h1 className="text-center text-3xl font-bold mt-20">
        {t("titleWorth")}
      </h1>

      <div className="grid grid-cols-1 mt-20 md:grid-cols-4 ">
        {worths.map((worth: any) => (
          <Worth
            key={worth.key}
            title={worth.label}
            image={worth.image}
            description={worth.description}
          />
        ))}
      </div>
    </div>
  );
});
