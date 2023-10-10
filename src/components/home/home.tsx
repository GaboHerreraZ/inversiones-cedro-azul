import { Container } from "@/components/container/container";
import { HomeHeader } from "@/components/home/home-header";
import { HomeBody } from "@/components/home/home-body";

export const Home = () => {
  //pendiente usar useMEMO
  const leftSide = <HomeHeader />;
  const rightSide = <HomeBody />;

  return (
    <Container
      isHome={true}
      bgImage={"bg-home"}
      leftSide={leftSide}
      rightSide={rightSide}
    />
  );
};
