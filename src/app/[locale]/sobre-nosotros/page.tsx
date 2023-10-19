import { AboutUs as About } from "@/components/AboutUs/AboutUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  alternates: {
    canonical: `/sobre-nosotros`,
    languages: {
      en: "en/sobre-nosotros",
    },
  },
};

export default function AboutUs() {
  return <About />;
}
