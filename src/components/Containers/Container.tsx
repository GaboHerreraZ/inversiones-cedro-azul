"use client";
import { useTranslations, useLocale } from "next-intl";
import { NavbarDesktop } from "@/components/Navbars/NavbarDesktop";
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbars/Navbar";

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
      link: `/${locale}`,
    },
    {
      key: "about-us",
      label: t("aboutUs"),
      link: `/${locale}/sobre-nosotros`,
    },
    {
      key: "projects",
      label: t("projects"),
      link: `/${locale}/proyectos`,
    },
  ];

  return (
    <>
      <section className={`w-full h-home ${bgImage} bg-center bg-cover `}>
        <div className="h-full bg-black bg-opacity-80">
          <NavbarDesktop menu={menuNavbar} />
          {header}
        </div>
        <span className="md:hidden">
          <Navbar />
        </span>
      </section>
      <section>{body}</section>
      <Footer />
    </>
  );
};
