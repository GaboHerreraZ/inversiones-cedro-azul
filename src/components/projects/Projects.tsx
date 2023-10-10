import { Container } from "../container/container";
import { ProjectBody } from "./ProjectBody";
import { ProjectHeader } from "./ProjectHeader";

export const Projects = () => {
  const leftSide = <ProjectHeader />;
  const rightSide = <ProjectBody />;

  return (
    <Container
      bgImage={"bg-projects"}
      leftSide={leftSide}
      rightSide={rightSide}
    />
  );
};
