import React from "react";
import { ContainerWrapper } from "../elements";
import { Nav, Footer } from "../components";

const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      <Nav />
      {children}
      <Footer />
    </ContainerWrapper>
  );
};

export { Container };
