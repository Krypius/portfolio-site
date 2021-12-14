import styled from "styled-components";

const light2 = (props) => props.theme.colors.light2;
const medium = (props) => props.theme.spacings.medium;
const large = (props) => props.theme.spacings.large;
const xLarge = (props) => props.theme.spacings.xLarge;
const xxLarge = (props) => props.theme.spacings.xxLarge;
const shadow1 = (props) => props.theme.shadows.shadow1;
const tablet = (props) => props.theme.breakpoints.tablet;
const mobile = (props) => props.theme.breakpoints.mobile;

export const ContentWrapper = styled.main`
  grid-column: 4 / span 8;
  grid-row: 3 / span 5;
  background-color: ${light2};
  padding: ${xLarge} ${xxLarge};
  box-shadow: ${shadow1};
  z-index: 10;

  @media ${tablet} {
    grid-column: 2 / span 6;
  }

  @media ${mobile} {
    padding: ${medium} ${large};
  }
`;
