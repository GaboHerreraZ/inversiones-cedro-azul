import { Carousel } from "./carousel";

export const ProjectBody = () => {
  const projects = [
    {
      title:
        "PLACA HUELLA DE LA VÍA SECUNDARIA QUE COMUNICA A LOS MUNICIPIOS DE VÉLEZ Y GUAVATÁ",
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
  ];

  return (
    <section>
      <Carousel projects={projects} />
    </section>
  );
};
