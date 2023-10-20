import * as React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { MenuItem } from "@/components/Navbar/MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
};

export const Navigation = ({
  clicked,
  menu,
}: {
  clicked: boolean;
  menu: any[];
}) => {
  const t = useTranslations("navbar");

  return (
    <motion.ul variants={variants} className={`absolute m-0 p-6 top-24 w-full`}>
      {clicked && menu.map((i) => <MenuItem i={i} key={i.key} />)}
    </motion.ul>
  );
};
