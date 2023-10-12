import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/legacy/image";
import Mision from "../../../public/img/mision.jpg";
import Vision from "../../../public/img/vision.jpg";

export const AboutUsBody = () => {
  const t = useTranslations("about-us");
  return (
    <section className="grid items-center p-10 md:p-10 h-full text-justify text-cedro-900">
      <motion.article
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        className="flex flex-col-reverse md:flex-row mb-10  justify-start"
      >
        <Image src={Mision} layout="intrinsic" width={400} height={350} />
        <div className="grid items-center w-full md:w-1/2">
          <span className="block self-end font-bold text-3xl">
            {t("titleMision")}
          </span>
          <p className="self-start md:text-lg">{t("mision")}</p>
        </div>
      </motion.article>
      <motion.article
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        className="grid md:flex justify-end gap-5 "
      >
        <div className="grid  items-center text-justify w-full md:w-1/2">
          <span className="block self-end  font-bold text-3xl">
            {t("titleVision")}
          </span>
          <p className="self-start md:text-lg">{t("vision")}</p>
        </div>
        <Image src={Vision} layout="intrinsic" width={400} height={350} />
      </motion.article>
    </section>
  );
};
