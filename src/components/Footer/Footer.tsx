import React from "react";
import logo from "../../../public/img/logo-cedro-azul-claro.png";
import Image from "next/legacy/image";
import Link from "next/link";
import facebook from "../../../public/svg/facebook.svg";
import youtube from "../../../public/svg/youtube.svg";
import instagram from "../../../public/svg/instagram.svg";
import { useTranslations } from "next-intl";

export const Footer = React.memo(() => {
  const t = useTranslations("footer");

  return (
    <footer className="block bg-footer  bg-center bg-cover ">
      <div className="bg-black bg-opacity-70 h-full text-white text-center">
        <div className="py-5">
          <Link href={"/"}>
            <Image
              alt="Grupo cedro azul"
              src={logo}
              layout="fixed"
              width={150}
              height={150}
            />
          </Link>
          <p className="m-0">2023 @ Copyright Grupo Cedro Azul |</p>
          <div className="flex justify-center mt-5 gap-4">
            <Link
              href={""}
              target="_blank"
              className="hover:scale-[1.5] duration-500"
            >
              <Image
                alt="YouTube"
                src={youtube}
                layout="fixed"
                width={20}
                height={20}
              />
            </Link>
            <Link
              href={"https://www.facebook.com/profile.php?id=61552664671472"}
              target="_blank"
              className="hover:scale-[1.5] duration-500"
            >
              <Image
                alt="facebook"
                src={facebook}
                layout="fixed"
                width={20}
                height={20}
              />
            </Link>
            <Link
              href={"https://www.instagram.com/grupocedroazul/"}
              target="_blank"
              className="hover:scale-[1.5] duration-500"
            >
              <Image
                alt="instagram"
                src={instagram}
                layout="fixed"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
        <div className="p-2 border-t-[1px] text-[12px] self-end border-white">
          {t("designed")}
          <Link
            className="mx-2 underline"
            href={"https://gabrielherrerazdev.com/"}
            target="_blank"
          >
            GabrielHerreraDev
          </Link>
        </div>
      </div>
    </footer>
  );
});
