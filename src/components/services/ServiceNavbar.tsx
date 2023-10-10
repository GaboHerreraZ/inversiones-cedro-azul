import Image from "next/legacy/image";
import { motion } from "framer-motion";
export const ServiceNavbar = ({
  services,
  selected,
  selectedTab,
}: {
  services: any[];
  selected: any;
  selectedTab: any;
}) => {
  return (
    <nav className="h-screen w-full">
      <ul className="grid h-full list-none p-0 m-0">
        {services.map((service: any) => (
          <li
            onClick={() => selected(service)}
            key={service.key}
            className={`flex  w-full relative rounded-t-md flex-col justify-evenly items-center cursor-pointer text-center   ${
              service.key === selectedTab.key ? "bg-gray-400 bg-opacity-30" : ""
            }`}
          >
            <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
              <Image
                className="self-center "
                src={service.logo}
                layout="intrinsic"
                height={50}
                width={50}
              />
            </motion.div>

            {service.key === selectedTab.key ? (
              <motion.div
                className="absolute bg-cedro-900 h-[4px] right-0 left-0 bottom-[-1px]"
                layoutId="underline"
              ></motion.div>
            ) : (
              <div className="absolute bg-cedro-900 h-[1px] right-0 left-0 bottom-[-1px]"></div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
