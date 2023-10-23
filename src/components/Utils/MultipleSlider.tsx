"use client";
import Image from "next/legacy/image";
import { useState } from "react";
import ArrowLeft from "../../../public/svg/left-arrow.svg";
import ArrowRight from "../../../public/svg/right-arrow.svg";

export const MultipleSlider = ({ images }: { images?: any }) => {
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
    <div className="h-[300px] m-auto md:py-5 md:px-5 relative group">
      <div className="flex justify-center md:mx-40 md:justify-between items-center gap-5 h-full">
        <span className="hidden md:block">
          <Image
            alt={"proyectos"}
            src={
              images[currentIndex === 0 ? images.length - 1 : currentIndex - 1]
                .image
            }
            layout="intrinsic"
            width={
              images[currentIndex === 0 ? images.length - 1 : currentIndex - 1]
                .width
            }
            height={
              images[currentIndex === 0 ? images.length - 1 : currentIndex - 1]
                .height
            }
          />
        </span>
        <span className="hidden md:block">
          <Image
            alt={"proyectos"}
            src={images[currentIndex].image}
            layout="intrinsic"
            width={images[currentIndex].width}
            height={images[currentIndex].height}
          />
        </span>
        <span>
          <Image
            alt={"proyectos"}
            src={
              images[currentIndex === images.length - 1 ? 0 : currentIndex + 1]
                .image
            }
            layout="intrinsic"
            width={
              images[currentIndex === images.length - 1 ? 0 : currentIndex + 1]
                .width
            }
            height={
              images[currentIndex === images.length - 1 ? 0 : currentIndex + 1]
                .height
            }
          />
        </span>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-10  rounded-full py-2  pl-1 pr-2 flex items-center bg-opacity-10 hover:scale-125 duration-500"
      >
        <Image src={ArrowLeft} layout="fixed" width={20} height={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-10  rounded-full py-2 pl-2 pr-1  flex items-center bg-opacity-10  hover:scale-125 duration-500"
      >
        <Image src={ArrowRight} layout="fixed" width={20} height={20} />
      </button>
    </div>
  );
};
