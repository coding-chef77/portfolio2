import styled from "styled-components";
import PropTypes from "prop-types";

const NavBar = ({ onNavigate }) => {
  return (
    <Wrapper>
      <StyledList>
        <StyledListItem>
          <StyledButton onClick={() => onNavigate(null)}>Hjem</StyledButton>
        </StyledListItem>
        <StyledListItem>
          <StyledButton onClick={() => onNavigate("about")}>
            Om Meg
          </StyledButton>
        </StyledListItem>
        <StyledListItem>
          <StyledButton onClick={() => onNavigate("projects")}>
            Prosjekter
          </StyledButton>
        </StyledListItem>
        <StyledListItem>
          <StyledButton onClick={() => onNavigate("cv")}>CV</StyledButton>
        </StyledListItem>
        <StyledListItem>
          <StyledButton onClick={() => onNavigate("contact")}>
            ContactPage
          </StyledButton>
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

const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: var(--background-color);
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: var(--yellow-accent);
  }
`;

NavBar.propTypes = {
  onNavigate: PropTypes.func.isRequired,
};

export default NavBar;
