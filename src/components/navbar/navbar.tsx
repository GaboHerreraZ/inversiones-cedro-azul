"use client"; ///TODO  pendiente de revisar para eliminar y que sea full server side rendering
import { useTranslations } from "next-intl";
import Link from "next/link";
import logo from "../../../public/svg/gabriel-herrera-z-logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRef } from "react";

export const Navbar = ({ isHome = false }: { isHome?: boolean }) => {
  const t = useTranslations("navbar");
  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);
  const pathName = usePathname().split("/")[2]
    ? `/${usePathname().split("/")[2]}`
    : "/";

  const setMenu = () => {
    inputRef?.current?.click();
  };

  const menuNavbar = [
    {
      key: "home",
      label: t("home"),
      link: "/",
    },
    {
      key: "about-us",
      label: t("aboutUs"),
      link: "/sobre-nosotros",
    },
    {
      key: "projects",
      label: t("projects"),
      link: "/proyectos",
    },
    {
      key: "service",
      label: t("service"),
      link: "/nuestros-servicios",
    },
  ];

  return (
    <header className="wrapper  py-3 hover:bg-gray-300 hover:bg-opacity-5">
      <nav className="h-50 p-2 flex items-center justify-between rounded-lg mx-4">
        <a className="flex  ">
          <Image
            src={logo}
            height={70}
            width={140}
            alt="Inversiones Cedro Azul"
          />
        </a>

        <input
          className="peer hidden"
          type="checkbox"
          id="menu"
          ref={inputRef}
        ></input>
        <label
          htmlFor="menu"
          className="bg-open-menu w-6 h-5 bg-cover bg-center cursor-pointer peer-checked:bg-close-menu transition-all z-50 md:hidden "
        ></label>

        <div className="fixed inset-0 z-100 bg-gradient-to-b md:flex items-center translate-x-full peer-checked:translate-x-0 transition-transform md:static md:bg-none md:translate-x-0 ">
          <ul className="absolute inset-x-0 z-100 top-24 p-12  bg-white w-[90%] mx-auto rounded-md h-max text-center grid gap-10 shadow-2xl md:w-max md:bg-transparent md:grid-flow-col md:static md:p-0">
            {menuNavbar.map((menu) => {
              return (
                <li key={menu.key} className="text-sm font-bold">
                  <Link
                    onClick={setMenu}
                    href={menu.link}
                    className={
                      pathName === menu.link
                        ? "border-b-2 text-cedro-800 md:text-cedro-900 border-cedro-800"
                        : `${
                            !isHome
                              ? "text-cedro-800"
                              : "text-cedro-800 md:text-white hover:text-cedro-800 hover:border-b-2 hover:border-cedro-800"
                          }`
                    }
                  >
                    {menu.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <Link
          className="button text-white  shadow-sm hidden md:flex shadow-cedro-500/30 hover:bg-cedro-400"
          href="/contacto"
        >
          {t("contact")}
        </Link>
      </nav>
      <div></div>
    </header>
  );
};
