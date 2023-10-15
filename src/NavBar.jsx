import styled from "styled-components";
import PropTypes from "prop-types";

const NavBar = ({ onNavigate }) => {
  return (
    <Wrapper>
      <Logo onClick={() => onNavigate({ page: null })}>HG</Logo>
      <StyledList>
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
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1001; // This ensures the navbar is above other content
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 0;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--verdant-green);
  cursor: pointer;
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledListItem = styled.li`
  margin: 0 1rem;
  font-weight: 700;
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
