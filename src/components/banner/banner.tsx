"use client";

import { Navbar } from "../navbar/navbar";
import { useTranslations } from "next-intl";
import { Message } from "./message";

export const Home = () => {
  const t = useTranslations("home");

  return (
    <section className="h-[600px] bg-home bg-cover bg-center">
      <Navbar isHome={true} />
      <article className="flex w-full h-full items-center">
        <div className="grid  items-center text-center h-52 bg-gray-100 bg-opacity-40 w-full px-4 md:w-3/4 origin-top-left -skew-x-12">
          <span className="text-cedro-900 font-bold w-full text-3xl md:text-5xl">
            {t("title")}
          </span>
          <div className="self-start">
            <Message />
          </div>
        </div>
      </article>
    </section>
  );
};
