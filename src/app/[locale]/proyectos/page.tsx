import { Projects as ProjectsDefault } from "@/components/Projects/Projects";
import { Metadata } from "next";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export const metadata: Metadata = {
  title: "Proyectos",
  alternates: {
    canonical: `/proyectos`,
    languages: {
      en: "en/proyectos",
    },
  },
};

export default function Projects() {
  return <ProjectsDefault />;
}
