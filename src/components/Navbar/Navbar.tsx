"use client";
import { motion, useCycle } from "framer-motion";
import { useRef, useState } from "react";
import { useDimensions } from "@/components/Navbar/UseDimensions";
import { MenuToggle } from "@/components/Navbar/MenuToogle";
import { Navigation } from "@/components/Navbar/Navigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Navbar = ({ menu }: { menu: any[] }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [clicked, setClicked] = useState(false);

  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const handleButton = () => {
    setClicked(!clicked);
    toggleOpen();
  };

  return (
    <motion.nav
      className={`${isOpen ? "absolute top-0 w-full left-0 bottom-0" : ""}`}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div
        className="absolute top-0 left-0 bottom-0 w-full bg-white opacity-80"
        variants={sidebar}
      />
      <Navigation clicked={clicked} menu={menu} />
      <MenuToggle toggle={() => handleButton()} />
    </motion.nav>
  );
};
