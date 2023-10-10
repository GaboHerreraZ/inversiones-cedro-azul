import { motion } from "framer-motion";
import Image from "next/legacy/image";
import { ArrowButton } from "../utils/ArrowButton";
export const ServiceSimpleBody = ({
  services,
  description,
  labelButton,
}: {
  services: any;
  description: string;
  labelButton: string;
}) => {
  return (
    <section className="mx-10 mt-5 ">
      <label className="text-justify text-lg">{description}</label>
      <ul className="grid grid-cols-2 gap-5 mt-10">
        {services.map((service: any, index: number) => (
          <motion.li
            initial={{
              y: -5,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            className="flex  flex-col justify-center items-center  p-3 bg-black bg-opacity-50 rounded-md text-white"
            key={index}
            whileHover={{ scale: 1.05 }}
          >
            <span className="font-bold mb-1">{service.label}</span>
            <Image src={service.logo} layout="fixed" height={50} width={50} />
            <span className="mt-4 text-sm text-justify">
              {service.description}
            </span>
          </motion.li>
        ))}
      </ul>
      <div className="flex w-full justify-end mt-10">
        <ArrowButton label={labelButton} isDark={true} page="/proyectos" />
      </div>
    </section>
  );
};
