import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ i }: { i: any }) => {
  return (
    <motion.li
      className="m-0 mb-5 flex items-center cursor-pointer list-none "
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={i.link} className="text-cedro-900 text-3xl font-bold">
        {i.label}
      </Link>
    </motion.li>
  );
};
