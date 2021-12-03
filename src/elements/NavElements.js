import styled from "styled-components";

const tablet = (props) => props.theme.breakpoints.tablet;

const NavWrapper = styled.nav`
  grid-column: 2 / span 12;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;

  @media ${tablet} {
    grid-column: 2 / span 6;
  }
`;

export { NavWrapper };
