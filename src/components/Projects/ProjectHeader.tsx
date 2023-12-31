import { motion } from "framer-motion";
export const ProjectHeader = ({
  title,
  subtitle,
  description,
}: {
  title: string;
  subtitle: string;
  description: string[];
}) => {
  return (
    <section className="grid md:flex w-full justify-center items-center h-[400px]  p-5 text-cedro-900 font-bold ">
      <motion.article
        initial={{
          y: -20,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="flex w-full md:w-auto justify-center self-end md:self-center  md:flex-col px-4 md:border-r-4 md:border-cedro-900 text-4xl md:text-6xl  "
      >
        <p>{title}</p>
        <p className="ml-3 md:ml-0">{subtitle}</p>
      </motion.article>
      <motion.article
        initial={{
          y: 20,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="ml-5 text-2xl md:text-4xl text-cedro-900"
      >
        <p>{description[0]}</p>
        <p>{description[1]}</p>
      </motion.article>
    </section>
  );
};
