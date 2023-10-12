import { useState } from "react";
import { Slider } from "../utils/Slider";
import Image from "next/legacy/image";
import ArrowLeft from "../../../public/svg/left-arrow.svg";
import ArrowRight from "../../../public/svg/right-arrow.svg";

export const Carousel = ({ projects }: { projects: any[] }) => {
  const title = "";
  const body = "";
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevProject = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextProject = () => {
    const isLastImage = currentIndex === projects.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative">
      <label>{title}</label>
      <Slider images={projects[0].images} />
      <article>{body}</article>
      <button
        onClick={prevProject}
        className="absolute top-1/2 left-10 bg-white rounded-full p-3 flex items-center bg-opacity-50"
      >
        <Image src={ArrowLeft} layout="intrinsic" width={20} height={20} />
      </button>
      <button
        onClick={nextProject}
        className="absolute top-1/2 right-10 bg-white rounded-full p-3 flex items-center bg-opacity-50"
      >
        <Image src={ArrowRight} layout="intrinsic" width={20} height={20} />
      </button>
    </div>
  );
};
