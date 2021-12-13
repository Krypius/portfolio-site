import styled from "styled-components";

const tablet = (props) => props.theme.breakpoints.tablet;

export const FeatureImageWrapper = styled.div`
  grid-column: 3 / span 10;
  grid-row: 2 / 4;
  overflow: hidden;
  position: relative;

  @media ${tablet} {
    grid-column: 2 / span 6;
  }
`;
