import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  return (
    <Wrapper>
      <StyledList>
        <StyledListItem>
          <StyledLink to="/">Hjem</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink to="/about">Om Meg</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink to="/projects">Prosjekter</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink to="/cv">CV</StyledLink>
        </StyledListItem>
      </StyledList>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background-color: var(--verdant-green);
  padding: 1rem 2rem;
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledListItem = styled.li`
  margin: 0 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--background-color);
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: var(--yellow-accent);
  }
`;

export default NavBar;
