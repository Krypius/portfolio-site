import React from "react";
import { ContainerWrapper } from "../elements";
import { Nav } from "../components";

const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      <Nav />
      {children}
    </ContainerWrapper>
  );
};

export { Container };
