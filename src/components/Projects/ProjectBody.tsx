import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Project } from "@/components/Projects/Project";

export const ProjectBody = () => {
  const t = useTranslations("projects");
  const projects = [
    {
      title:
        "DISEÑO Y CONSTRUCCIÓN SALA DE VENTAS UVC – DRCTG EN EL INTERIOR DE LAS INSTALACIONES DEL HOTEL DREAMS KARIBANA CARTAGENA BEACH & GOLF RESORT (“DRCTG”) CON DIRECCIÓN EN ZONA NORTE, KM. 8, MANZANILLO DEL MAR, CARTAGENA, BOLÍVAR, COLOMBIA.",
      date: "2023",
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31681.444145714293!2d-73.0745982101409!3d6.988006099883644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6847af37e0be91%3A0x66e8281d38a19920!2sPiedecuesta%2C%20Santander!5e0!3m2!1ses-419!2sco!4v1697294064196!5m2!1ses-419!2sco",
      images: [
        { url: "bg-piedecuesta1" },
        { url: "bg-piedecuesta2" },
        { url: "bg-piedecuesta3" },
        { url: "bg-piedecuesta4" },
        { url: "bg-piedecuesta5" },
        { url: "bg-piedecuesta6" },
        { url: "bg-piedecuesta7" },
        { url: "bg-piedecuesta8" },
        { url: "bg-piedecuesta9" },
        { url: "bg-piedecuesta10" },
        { url: "bg-piedecuesta11" },
        { url: "bg-piedecuesta12" },
      ],
    },
    {
      title:
        "DISEÑO Y CONSTRUCCIÓN SALA DE VENTAS UVC – DRCTG EN EL INTERIOR DE LAS INSTALACIONES DEL HOTEL DREAMS KARIBANA CARTAGENA BEACH & GOLF RESORT (“DRCTG”) CON DIRECCIÓN EN ZONA NORTE, KM. 8, MANZANILLO DEL MAR, CARTAGENA, BOLÍVAR, COLOMBIA.",
      date: "2023",
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62788.28715204249!2d-75.54972515645733!3d10.40028054243118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef625e7ae9d1351%3A0xb161392e033f26ca!2sCartagena%20de%20Indias%2C%20Provincia%20de%20Cartagena%2C%20Bol%C3%ADvar!5e0!3m2!1ses-419!2sco!4v1697293617425!5m2!1ses-419!2sco",
      images: [
        { url: "bg-cartagena1" },
        { url: "bg-cartagena2" },
        { url: "bg-cartagena3" },
        { url: "bg-cartagena4" },
        { url: "bg-cartagena5" },
        { url: "bg-cartagena6" },
        { url: "bg-cartagena7" },
        { url: "bg-cartagena8" },
      ],
    },
    {
      title:
        "CONSTRUCCIÓN MONTAJE Y MANTENIMIENTO DE CUBIERTAS DE LAS OFICINAS DE LA PLANTA DE UNIGAS-VIDAGAS UBICADA EN BELLO, ANTIOQUIA",
      date: "2023",
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31723.832665893184!2d-75.57354111029355!3d6.331922298139079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442fa6958e1777%3A0x837c07a666cf50f0!2sBello%2C%20Antioquia!5e0!3m2!1ses-419!2sco!4v1697293495599!5m2!1ses-419!2sco",
      images: [
        { url: "bg-bello1" },
        { url: "bg-bello2" },
        { url: "bg-bello3" },
        { url: "bg-bello4" },
        { url: "bg-bello5" },
        { url: "bg-bello6" },
        { url: "bg-bello7" },
        { url: "bg-bello8" },
      ],
    },
    {
      title:
        " DISEÑO Y CONSTRUCCION DE VIVIENDA MULTIFAMILIAR, PROYECTO UBICADO EN BUCARMANGA, SANTANDER",
      date: "2022/2023",
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63344.92635106765!2d-73.17417771167388!3d7.119289349326647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e68157af751c0ed%3A0x75a0e4551148c36c!2sBucaramanga%2C%20Santander!5e0!3m2!1ses-419!2sco!4v1697293095834!5m2!1ses-419!2sco",
      images: [{ url: "bg-bucaramanga1" }, { url: "bg-bucaramanga2" }],
    },
    {
      title:
        "MEJORAMIENTO MEDIANTE PLACA HUELLA DE LA VÍA SECUNDARIA QUE COMUNICA A LOS MUNICIPIOS DE VÉLEZ Y GUAVATÁ, DEPARTAMENTO DE SANTANDER",
      date: "2022/2023",
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.2863365838!2d-73.7042160244786!3d5.955230829505004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e41efacd6bc772d%3A0x196e84a4cf2f6e8a!2sGuavat%C3%A1%2C%20Santander!5e0!3m2!1ses-419!2sco!4v1697290140601!5m2!1ses-419!2sco",
      images: [
        { url: "bg-placa1" },
        { url: "bg-placa2" },
        { url: "bg-placa3" },
        { url: "bg-placa4" },
        { url: "bg-placa5" },
        { url: "bg-placa6" },
        { url: "bg-placa7" },
        { url: "bg-placa8" },
      ],
    },
    {
      title: "CONSTRUCCION DE PLACA HUELLA EN EL MUNICIPIO DE YONDO, ANTIOQUIA",
      date: "2019/2020",
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d506931.88187546266!2d-74.51117119427695!3d6.961420129890333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e42fd11b7b557c7%3A0x2ac0004f6eeefc7e!2sYond%C3%B3%2C%20Antioquia!5e0!3m2!1ses-419!2sco!4v1697290263957!5m2!1ses-419!2sco",
      images: [
        { url: "bg-yondo1" },
        { url: "bg-yondo2" },
        { url: "bg-yondo3" },
        { url: "bg-yondo4" },
        { url: "bg-yondo5" },
        { url: "bg-yondo6" },
        { url: "bg-yondo7" },
        { url: "bg-yondo8" },
      ],
    },
  ];

  return (
    <section className="mx-10">
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
        className="bg-black bg-opacity-5 my-10  md:mx-30 p-3 md:p-4 rounded-2xl text-center text-xl md:text-2xl"
      >
        <p className="text-cedro-900">
          {t("project-1")}
          <span className="font-bold">{t("project-2")}</span>
          {t("project-3")}
        </p>
      </motion.article>
      <section>
        {projects.map((project, index) => (
          <Project key={index} project={project} dateLabel={t("labelDate")} />
        ))}
      </section>
    </section>
  );
};
