import { Navbar } from "../navbar/navbar";
import { Header } from "./header";
import "./container.css";

export const Container = ({
  isHome = false,
  leftSide,
  rightSide,
  bgImage = "",
  darkRightSide = true,
}: {
  isHome?: boolean;
  leftSide: any;
  rightSide: any;
  bgImage: string;
  darkRightSide?: boolean;
}) => {
  return (
    <div className="relative">
      <section
        className={`grid  ${
          bgImage ? `${bgImage}  bg-cover bg-` : " "
        } grid-cols-1 md:grid-cols-container h-screen`}
      >
        <div
          className={`grid items-center ${
            !darkRightSide ? "bg-black" : "bg-white"
          } bg-opacity-70`}
        >
          {!isHome ? <Header /> : ""}
          {leftSide}
        </div>
        <div
          className={`right-side overflow-auto z-100 h-full ${
            darkRightSide ? "bg-black " : "bg-white"
          } bg-opacity-70 `}
        >
          {rightSide}
        </div>
      </section>
      <Navbar />
    </div>
  );
};
