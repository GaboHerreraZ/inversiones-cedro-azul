"use client";

import { Navbar } from "../navbar";
import { useTranslations } from "next-intl";
import { Message } from "./message";

export const Home = () => {
  const t = useTranslations("home");

  return (
    <header className="h-screen bg-bg-image bg-cover bg-center">
      <Navbar />
      <div className=" flex w-full  h-full overflow-hidden ">
        <div className="text-cedro-900 h-52 bg-white opacity-40 mx-auto w-2/3 box-content absolute bottom-0 right-[15%] animate-fade">
          <h2>{t("title")}</h2>
          <Message />
        </div>
      </div>
    </header>
  );
};
