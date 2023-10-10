import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export const Message = () => {
  const el: React.RefObject<HTMLSpanElement> = useRef(null);
  const t = useTranslations("home");

  useEffect(() => {
    const message = t("slogan");

    const typed = new Typed(el.current, {
      strings: [message],
      startDelay: 500,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <span
      className="whitespace-pre font-bold  w-full text-cedro-900 text-xl xs:text-lg md:text-3xl"
      ref={el}
    ></span>
  );
};
