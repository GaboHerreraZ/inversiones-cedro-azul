import Image from "next/legacy/image";
import { motion } from "framer-motion";

export const Worth = ({
  title,
  image,
  description,
}: {
  title: string;
  image: any;
  description: any;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.6,
      }}
      whileHover={{
        scale: 1.1,
      }}
      className="p-5 m-2 rounded-md text-center border-2 shadow-lg bg-white"
    >
      <Image
        alt={title}
        src={image}
        layout="intrinsic"
        width={130}
        height={130}
      />
      <span className="block text-cedro-900 font-bold">{title}</span>
      <p className="text-lg">{description}</p>
    </motion.div>
  );
};
