import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
import { NavWrapper } from "../elements";

const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "icon.png" }) {
        publicURL
      }
    }
  `);

  return (
    <NavWrapper>
      <Link to="/">
        <img src={data.logo.publicURL} alt="Logo" />
      </Link>
    </NavWrapper>
  );
};

export { Nav };
