"use client";
import { useTranslations, useLocale } from "next-intl";
import { NavbarDesktop } from "@/components/Navbar/NavbarDesktop";
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";

export const Container = ({
  header,
  body,
  bgImage,
}: {
  header: any;
  body: any;
  bgImage: string;
}) => {
  const t = useTranslations("navbar");
  const locale = useLocale();

  const menuNavbar = [
    {
      key: "home",
      label: t("home"),
      link: `/${locale === "es" ? "" : locale}`,
    },
    {
      key: "about-us",
      label: t("aboutUs"),
      link: `/${locale === "es" ? "" : locale + "/"}sobre-nosotros`,
    },
    {
      key: "projects",
      label: t("projects"),
      link: `/${locale === "es" ? "" : locale + "/"}proyectos`,
    },
  ];

  return (
    <>
      <section
        className={`w-full h-home ${bgImage} bg-center bg-cover animation duration-1000 `}
      >
        <div className="h-full bg-white bg-opacity-60">
          <NavbarDesktop menu={menuNavbar} />
          {header}
        </div>
        <span className="md:hidden">
          <Navbar menu={menuNavbar} />
        </span>
      </section>
      <section>{body}</section>
      <Footer />
    </>
  );
};
