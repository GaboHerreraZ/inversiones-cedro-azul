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
      startDelay: 1000,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span className="whitespace-pre" ref={el}></span>;
};
