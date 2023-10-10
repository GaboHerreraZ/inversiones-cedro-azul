"use client";
import Image from "next/legacy/image";
import logo from "../../../public/img/logo-cedro-azul.png";
import { Message } from "./message";

export const HomeHeader = () => {
  return (
    <article className="grid items-center text-center  mt-10 md:mt-0 p-1 md:p-10 min-w-full">
      <Image src={logo} layout="intrinsic" height={200} width={480} />
      <div>
        <Message />
      </div>
    </article>
  );
};
