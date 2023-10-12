import React from "react";

export const ServiceHeader = React.memo(
  ({ title, description }: { title: string; description: string }) => {
    return (
      <article className="mx-10 text-justify text-cedro-900 ">
        <h1 className="w-full md:text-4xl text-center font-bold mb-5">
          {title}
        </h1>
        <p className="bg-white p-4 rounded-lg text-base md:text-lg font-white">
          {description}
        </p>
      </article>
    );
  }
);
