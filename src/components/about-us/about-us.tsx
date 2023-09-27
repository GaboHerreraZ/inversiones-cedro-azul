"use client";
import { Navbar } from "@/components/navbar/navbar";
import { useTranslations } from "next-intl";

export const AboutUs = () => {
  const t = useTranslations("about-us");

  return (
    <section className="h-[400px] md:h-[600px] bg-sobre-nosotros bg-cover bg-center  ">
      <Navbar isHome={true} />
      <section className="grid h-full items-start md:items-center justify-end md:mx-auto w-full ">
        <article className=" w-1/2 text-justify p-4 md:p-10 md:mr-10 md:mb-40  leading-[2] justify-self-end text-xl  md:text-4xl font-bold  text-white">
          <span>{t("title1")}</span>
          <div className="inline-flex mb-1 origin-top-left -skew-x-12 bg-gray-200 bg-opacity-30 ">
            <span className="  text-center p-1 mx-1 text-cedro-900  ">
              {t("title2")}
            </span>
          </div>
          <span>{t("title3")}</span>
          <span>{t("title4")}</span>
          <div className="inline-flex origin-top-left -skew-x-12 bg-gray-200 bg-opacity-30 ">
            <span className="  text-center p-1 mx-1 text-cedro-900  ">
              {t("title5")}
            </span>
          </div>
          <span>{t("title6")}</span>
        </article>
      </section>
    </section>
  );
};
