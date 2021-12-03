import styled from "styled-components";

const tablet = (props) => props.theme.breakpoints.tablet;
const mobile = (props) => props.theme.breakpoints.mobile;

export const ContainerWrapper = styled.div`
  height: 100%;
  display: grid;

  // idk about using minmax for the inner columns.
  // probably should just be 3 columns with the center being 12x the outer columns.
  grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;

  //                  nav    hero  overlap
  grid-template-rows: 7.8rem 20rem 5rem auto;
  gap: 0 2rem;

  @media ${tablet} {
    grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    grid-gap: 0 1rem;
  }

  @media ${mobile} {
    grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    grid-gap: 0 1rem;
  }
`;
