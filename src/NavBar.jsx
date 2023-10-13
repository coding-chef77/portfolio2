import styled from "styled-components";
import PropTypes from "prop-types";

const NavBar = ({ onNavigate }) => {
  return (
    <Wrapper>
      <StyledList>
        <StyledListItem>
          <StyledButton onClick={() => onNavigate({ page: null })}>
            Hjem
          </StyledButton>
        </StyledListItem>
        <StyledListItem>
          <StyledButton onClick={() => onNavigate({ page: "about" })}>
            Om Meg
          </StyledButton>
        </StyledListItem>
        <StyledListItem>
          <StyledButton onClick={() => onNavigate({ page: "projects" })}>
            Prosjekter
          </StyledButton>
        </StyledListItem>
        <StyledListItem>
          <StyledButton onClick={() => onNavigate({ page: "cv" })}>
            CV
          </StyledButton>
        </StyledListItem>
        <StyledListItem>
          <StyledButton onClick={() => onNavigate({ page: "contact" })}>
            Kontakt Meg
          </StyledButton>
        </StyledListItem>
      </StyledList>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  padding: 1rem 2rem;
  position: absolute; // Add this line
  top: 0; // Add this line
  left: 0; // Add this line
  right: 0; // Add this line
  z-index: 1000; // Add this line to ensure the navbar is always on top
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: center;
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
  color: var(--verdant-green);
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: var(--ccent-teal);
  }
`;

NavBar.propTypes = {
  onNavigate: PropTypes.func.isRequired,
};

export default NavBar;
