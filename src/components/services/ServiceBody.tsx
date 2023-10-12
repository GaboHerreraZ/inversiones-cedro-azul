import { motion } from "framer-motion";
import Image from "next/legacy/image";
export const ServiceBody = ({ services }: { services: any }) => {
  return (
    <section className="mx-10 mt-5 ">
      <ul className="grid grid-cols-3 gap-10 mt-10">
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
            className="basis-1/2  bg-black bg-opacity-50 rounded-md text-white"
            key={index}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex flex-col p-3 justify-center items-center text-base ">
              <span className="font-bold mb-1">{service.label}</span>
              <Image src={service.logo} layout="fixed" height={50} width={50} />
              <span className="mt-4  text-justify">{service.description}</span>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
