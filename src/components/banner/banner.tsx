"use client";

import { Navbar } from "../navbar/navbar";
import { useTranslations } from "next-intl";
import { Message } from "./message";

export const Home = () => {
  const t = useTranslations("home");

  return (
    <header className="h-screen bg-bg-image bg-cover bg-center">
      <Navbar isHome={true} />
      <article className="flex w-full h-full items-center overflow-hidden ">
        <div className="text-cedro-900 h-52 bg-gray-400 bg-opacity-40 -skew-x-12 origin-top-left from  md:w-2/3 w-full box-content  animate-fade">
          <div className="w-full text-center my-10 mx-0 md:mx-10 ">
            <h2 className="text-cedro-900 text-4xl md:text-5xl">
              {t("title")}
            </h2>
            <Message />
          </div>
        </div>
      </article>
    </header>
  );
};
