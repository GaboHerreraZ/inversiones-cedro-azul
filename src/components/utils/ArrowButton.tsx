"use client";
import Image from "next/legacy/image";
import Arrow from "../../../public/svg/right-arrow.svg";
import { useRouter } from "next/navigation";

export const ArrowButton = ({
  isDark,
  label,
  page,
}: {
  isDark: boolean;
  label: string;
  page: string;
}) => {
  const router = useRouter();

  const handleButton = () => {
    console.log("page");
    router.push(page);
  };

  return (
    <button
      onClick={() => handleButton()}
      className={`border-none w-max  flex items-center px-4 relative cursor-pointer  bg-white  rounded-lg font-bold before:absolute before:bg-800% before:blur-[3px] before:-z-10 before:w-full before:h-full  before:top-0 before:left-0 before:rounded-md before:bg-arrow before:animate-glowing  ${
        isDark ? " text-cedro-900" : "text-white"
      }`}
    >
      <span>{label}</span>
      <Image
        className="self-start"
        src={Arrow}
        layout="intrinsic"
        width={20}
        height={32}
      />
    </button>
  );
};
