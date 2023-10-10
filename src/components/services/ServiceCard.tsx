import { motion } from "framer-motion";

export const ServiceCard = ({ service }: { service: any }) => {
  return (
    <section className="w-full h-full p-10 bg-gray-400 bg-opacity-30 px-5 text-justify text-base">
      <motion.h1
        initial={{
          y: -10,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="text-cedro-900 font-bold text-2xl text-center w-full "
      >
        {service.label}
      </motion.h1>

      <motion.p
        initial={{
          y: -5,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="self-start text-base text-justify my-10"
      >
        {service.footer}
      </motion.p>
      <section className="grid   md:justify-center">
        <ul className="grid grid-cols-2 gap-5">
          {service.steps.map((step: any, index: number) => (
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
                duration: 0.5 * index,
              }}
              className="p-4 bg-black bg-opacity-50 rounded-md text-white"
              key={index}
            >
              <span className="font-bold text-xl">{step.title}: </span>
              <span>{step.description}</span>
            </motion.li>
          ))}
        </ul>
      </section>
    </section>
  );
};
