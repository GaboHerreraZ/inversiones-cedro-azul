import Image from "next/legacy/image";
import logo from "../../../public/img/logo-cedro-azul.png";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import React from "react";

export const HomeHeader = React.memo(() => {
  const t = useTranslations("home");
  return (
    <article className="grid md:gap-5 md:flex items-center justify-center h-full md:mt-10 md:h-max text-center md:text-justify min-w-full">
      <motion.span
        initial={{
          x: -20,
          opacity: 0,
        }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className=" md:border-r-4 self-end px-8 border-cedro-900"
      >
        <Image src={logo} layout="intrinsic" height={250} width={250} />
      </motion.span>
      <motion.div
        initial={{
          x: 20,
          opacity: 0,
        }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="grid md:ml-5 md:mt-0 self-start md:self-center text-cedro-900 font-bold text-3xl  md:text-4xl"
      >
        <p>{t("slogan")},</p>
        <p>{t("slogan-2")}</p>
      </motion.div>
    </article>
  );
});
