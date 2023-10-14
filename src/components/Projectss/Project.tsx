import React from "react";
import { Slider } from "@/components/Utilss/Slider";

export const Project = React.memo(
  ({ project, dateLabel }: { project: any; dateLabel: string }) => {
    return (
      <article
        className={`flex flex-col-reverse my-10 md:grid md:grid-cols-2 ${
          project.inverse ? "" : ""
        }`}
      >
        <Slider images={project.images} />
        <div className="grid items-center text-center text-cedro-900 justify-center p-10">
          <h1 className="font-bold  text-2xl">{project.title}</h1>
          <p className="text-lg">
            <span className="font-bold ">{dateLabel}</span> {project.date}
          </p>
          <div className="grid justify-center text-center">
            <iframe
              src={project.location}
              width="350"
              height="300"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </article>
    );
  }
);
