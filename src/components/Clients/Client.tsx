import { useTranslations } from "next-intl";
import React from "react";
import { MultipleSlider } from "@/components/Utils/MultipleSlider";
import fgc from "../../../public/img/clients/fgc.png";
import gbs from "../../../public/img/clients/gbs.png";
import stt from "../../../public/img/clients/stt.png";
import amma from "../../../public/img/clients/amma.png";
import gasco from "../../../public/img/clients/gasco.jpg";
import uvc from "../../../public/img/clients/uvc.png";

export const Clients = React.memo(() => {
  const t = useTranslations("client");

  const clients: any = [
    { image: fgc, height: 250, width: 300 },
    { image: gbs, height: 200, width: 350 },
    { image: amma, height: 250, width: 250 },
    { image: gasco, height: 180, width: 250 },
    { image: uvc, height: 250, width: 250 },
    { image: stt, height: 180, width: 250 },
  ];

  return (
    <section className="my-10 text-center text-cedro-900">
      <h1 className="font-bold text-4xl mb-8">{t("title")}</h1>
      <p className="p-4 mx-10 bg-black bg-opacity-5 rounded-md text-2xl">
        {t("description")}
      </p>

      <MultipleSlider images={clients} />
    </section>
  );
});
