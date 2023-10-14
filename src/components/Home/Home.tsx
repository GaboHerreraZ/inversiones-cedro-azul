"use client";

import React from "react";
import { Container } from "../Container/Container";
import { HomeBody } from "./HomeBody";
import { HomeHeader } from "./HomeHeader";

export const Home = React.memo(() => {
  const header = <HomeHeader />;
  const body = <HomeBody />;
  return <Container header={header} body={body} bgImage="bg-home" />;
});
