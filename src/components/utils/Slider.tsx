import Image from "next/legacy/image";
import { useState } from "react";
import ArrowLeft from "../../../public/svg/left-arrow.svg";
import ArrowRight from "../../../public/svg/right-arrow.svg";

export const Slider = ({ images }: { images: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-4/6 h-[500px] m-auto py-5 px-5 relative group">
      <div
        className={`w-full h-full rounded-2xl ${images[currentIndex].url} bg-center bg-cover  duration-500 `}
      ></div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-10 bg-white rounded-full py-2  pl-1 pr-2 flex items-center bg-opacity-50"
      >
        {"◄"}
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-10 bg-white rounded-full py-2 pl-2 pr-1  flex items-center bg-opacity-50"
      >
        {"►"}
      </button>
    </div>
  );
};
