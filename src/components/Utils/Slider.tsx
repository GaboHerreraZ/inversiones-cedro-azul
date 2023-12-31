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
    <div className="w-full h-[500px] m-auto  relative group">
      {images.map((image: any, index: number) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          } rounded-2xl  `}
        >
          <Image
            alt="imagen proyecto"
            src={image}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-10 bg-white rounded-full py-2  pl-1 pr-2 flex items-center bg-opacity-50"
      >
        <Image
          alt="Anterior"
          src={ArrowLeft}
          layout="fixed"
          width={20}
          height={20}
        />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-10 bg-white rounded-full py-2 pl-2 pr-1  flex items-center bg-opacity-50"
      >
        <Image
          alt="Siguiente"
          src={ArrowRight}
          layout="fixed"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
};
