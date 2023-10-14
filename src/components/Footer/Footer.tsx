import React from "react";
import logo from "../../../public/img/logo-cedro-azul.png";
import Image from "next/legacy/image";
import Link from "next/link";
import facebook from "../../../public/svg/facebook.svg";
import instagram from "../../../public/svg/instagram.svg";

export const Footer = React.memo(() => {
  return (
    <footer className="block bg-footer bg-center bg-cover h-[250px]">
      <div className="bg-black bg-opacity-70 h-full text-white text-center">
        <div className="pt-10">
          <Link href={"/"}>
            <Image src={logo} layout="fixed" width={250} height={100} />
          </Link>
          <p className="m-0">2023 @ Copyright Inversiones Cedro Azul S.A.S |</p>
          <p className="m-0">Cra 31 # 22 257 Of 502 Floridablanca, Colombia</p>
          <div className="flex justify-center mt-5 gap-4">
            <Link href={""} className="hover:scale-[1.5] duration-500">
              <Image src={facebook} layout="fixed" width={20} height={20} />
            </Link>
            <Link href={""} className="hover:scale-[1.5] duration-500">
              <Image src={instagram} layout="fixed" width={20} height={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
});
