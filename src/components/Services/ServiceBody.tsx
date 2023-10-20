import { motion } from "framer-motion";
import Image from "next/legacy/image";
export const ServiceBody = ({ services }: { services: any }) => {
  return (
    <section className="mx-10 mt-5 ">
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
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
            className="basis-1/2  rounded-md text-cedro-900 border-2 shadow-xl"
            key={index}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex flex-col p-4 justify-center items-center text-lg ">
              <Image
                alt={service.label}
                src={service.logo}
                layout="fixed"
                height={150}
                width={200}
              />
              <span className="font-bold mb-1 text-center">
                {service.label}
              </span>
              <span className="mt-4  text-justify">{service.description}</span>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
