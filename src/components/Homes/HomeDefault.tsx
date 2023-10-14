"use client";

import React from "react";
import { Container } from "@/components/Containers/Container";
import { HomeBody } from "@/components/Homes/HomeBody";
import { HomeHeader } from "@/components/Homes/HomeHeader";

export const HomeDefault = React.memo(() => {
  const header = <HomeHeader />;
  const body = <HomeBody />;
  return <Container header={header} body={body} bgImage="bg-home" />;
});
