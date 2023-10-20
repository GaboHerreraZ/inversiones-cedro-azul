import Image from "next/legacy/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import facebook from "../../../public/svg/facebook-cedro.svg";
import instagram from "../../../public/svg/instagram-cedro.svg";
import phone from "../../../public/svg/phone-cedro-azul.svg";

export const NavbarDesktop = React.memo(({ menu }: { menu: any[] }) => {
  const path = usePathname();
  return (
    <nav className=" hidden  md:grid md:grid-cols-3 md:justify-between bg-white bg-opacity-30 ">
      <p className="flex items-center ml-5  font-bold ">
        <span className="text-cedro-700 mr-2 pr-2 text-center border-r-2 border-cedro-900 ">
          CEDRO AZUL
        </span>
        <Link href={"./"} className="text-cedro-900 text-center ">
          INVERSIONES & CONSTRUCCIONES
        </Link>
      </p>
      <ul className="flex justify-center gap-8 py-5 text-base font-bold text-cedro-900 w-full">
        {menu.map((m: any, index: number) => (
          <li
            key={index}
            className={` 
            ${path === m.link ? "bg-opacity-20  bg-black" : ""}
            rounded-md text-center  hover:bg-opacity-20 p-2 hover:bg-black duration-500 hover:scale-[1.1]`}
          >
            <Link href={m.link}>{m.label}</Link>
          </li>
        ))}
      </ul>
      <div className="flex  items-center justify-end mr-5   gap-5">
        <span className="flex gap-1 mb-1 items-center  text-cedro-900 font-bold">
          <Image
            alt="phone"
            src={phone}
            layout="fixed"
            width={20}
            height={20}
          />
          (+57) 317 703 8852
        </span>
        <Link href={""} className="hover:scale-105 duration-500">
          <Image
            alt="facebook"
            src={facebook}
            layout="fixed"
            width={25}
            height={25}
          />
        </Link>
        <Link href={""} className="hover:scale-105 duration-500">
          <Image
            alt="instagram"
            src={instagram}
            layout="fixed"
            width={20}
            height={20}
          />
        </Link>
      </div>
    </nav>
  );
});
