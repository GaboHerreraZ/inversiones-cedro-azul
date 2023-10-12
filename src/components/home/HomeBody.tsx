import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import React from "react";
import { Services } from "../services/Services";

export const HomeBody = React.memo(() => {
  const t = useTranslations("home");

  return (
    <>
      <section className="w-full  mt-10">
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
          className="bg-black bg-opacity-5 mx-10 md:mx-30 p-3 md:p-4 rounded-2xl text-center text-xl md:text-2xl"
        >
          <p className="text-cedro-900">
            {t("about-us-1")}
            <span className="font-bold">{t("about-us-2")}</span>
            {t("about-us-3")}
          </p>
          <p className="text-cedro-900">{t("about-us-4")}</p>
        </motion.article>
      </section>

      <Services />
    </>
  );
});
