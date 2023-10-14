"use client";

import React from "react";
import { Container } from "@/components/Container/Container";
import { HomeBody } from "@/components/Home/HomeBody";
import { HomeHeader } from "@/components/Home/HomeHeader";

export const HomeDefault = React.memo(() => {
  const header = <HomeHeader />;
  const body = <HomeBody />;
  return <Container header={header} body={body} bgImage="bg-home" />;
});
