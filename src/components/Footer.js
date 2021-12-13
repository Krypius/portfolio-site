import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
} from "../elements";

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "icon.png" }) {
        publicURL
      }
    }
  `);
  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          {/* Break these blocks into their own component. */}
          <a
            href="https://gatsbyjs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.logo.publicURL} alt="Gatsby.js logo" />
          </a>
          <a
            href="https://gatsbyjs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.logo.publicURL} alt="Gatsby.js logo" />
          </a>
          <a
            href="https://gatsbyjs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.logo.publicURL} alt="Gatsby.js logo" />
          </a>
          <a
            href="https://gatsbyjs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.logo.publicURL} alt="Gatsby.js logo" />
          </a>
        </FooterSocialIcons>
        <p>copyright tag.</p>
      </FooterSocialWrapper>
    </FooterWrapper>
  );
};
