import { useTranslations } from "next-intl";
import { animate, motion } from "framer-motion";

export const AboutUsBody = () => {
  const t = useTranslations("about-us");
  return (
    <section className="grid items-center p-10 md:p-10 h-full text-justify text-white">
      <article className="text-justify">
        <span className="font-bold text-3xl text-center">{t("whoWeAre")}</span>
        <p>
          <span className="font-bold"> INVERSIONES CEDRO AZUL </span>
          {t("whoWeAreDescription")}
        </p>
      </article>
      <article className="flex p-10  mt-5 bg-gray-400 bg-opacity-40 rounded-md">
        <motion.div
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
        >
          <span className="block font-bold text-3xl">{t("titleMision")}</span>
          <p>{t("mision")}</p>
        </motion.div>
      </article>
      <article className="p-10 mt-5 bg-gray-400 bg-opacity-40 rounded-md">
        <span className="block font-bold text-3xl">{t("titleVision")}</span>
        <p>{t("vision")}</p>
      </article>
    </section>
  );
};
