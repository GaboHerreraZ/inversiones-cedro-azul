import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const NavbarDesktop = React.memo(({ menu }: { menu: any[] }) => {
  const path = usePathname();
  return (
    <nav className=" hidden md:block">
      <ul className="flex justify-center gap-12 py-5 text-base font-bold text-white w-full m-auto  ">
        {menu.map((m: any, index: number) => (
          <li
            key={index}
            className={` 
            ${path === m.link ? "bg-opacity-20 bg-white" : ""}
            rounded-md p-2 hover:bg-opacity-20 hover:bg-white duration-500 hover:scale-[1.1]`}
          >
            <Link href={m.link}>{m.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
});
