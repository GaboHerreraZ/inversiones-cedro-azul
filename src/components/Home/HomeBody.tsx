import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import React from "react";
import { Services } from "@/components/Services/Services";
import { Clients } from "@/components/Clients/Client";
import { Contact } from "@/components/Contact/Contact";

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
          className="bg-cedro-500 bg-opacity-20 mx-10 md:mx-30 p-3 md:p-4 rounded-2xl text-justify text-xl md:text-2xl"
        >
          <p className="text-cedro-900">
            {t("about-us-1")}
            <span className="font-bold">{t("about-us-2")}</span>
            {t("about-us-3")}
          </p>
        </motion.article>
      </section>

      <Services />
      <Contact />
      <Clients />
    </>
  );
});
