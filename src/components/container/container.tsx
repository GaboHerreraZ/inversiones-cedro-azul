"use client";
import { useTranslations, useLocale } from "next-intl";
import { NavbarDesktop } from "../navbar/NavbarDesktop";
import { Footer } from "../Footer/Footer";

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
    {
      key: "contact",
      label: t("contact"),
      link: `/${locale}/contacto`,
    },
  ];

  return (
    <>
      <section className={`w-full h-home ${bgImage} bg-center bg-cover `}>
        <div className="h-full bg-black bg-opacity-80">
          <NavbarDesktop menu={menuNavbar} />
          {header}
        </div>
      </section>
      <section>{body}</section>
      <Footer />
    </>
  );
};
