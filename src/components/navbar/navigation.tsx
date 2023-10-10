import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menuItem";
import { useTranslations } from "next-intl";

const variants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
};

export const Navigation = ({ clicked }: { clicked: boolean }) => {
  const t = useTranslations("navbar");
  const menuNavbar = [
    {
      key: "home",
      label: t("home"),
      link: "/",
    },
    {
      key: "about-us",
      label: t("aboutUs"),
      link: "/sobre-nosotros",
    },
    {
      key: "service",
      label: t("service"),
      link: "/servicios",
    },
    {
      key: "projects",
      label: t("projects"),
      link: "/proyectos",
    },
  ];

  return (
    <motion.ul
      variants={variants}
      className={`absolute m-0 p-6 top-24  ${clicked ? "w-1/3" : "w-0"}`}
    >
      {clicked && menuNavbar.map((i) => <MenuItem i={i} key={i.key} />)}
    </motion.ul>
  );
};
