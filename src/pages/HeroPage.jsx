import styled from "styled-components";
import PropTypes from "prop-types";

const HeroPage = ({ onNavigate }) => {
  return (
    <Wrapper>
      <h1>På jakt etter min neste utfordring som frontend-utvikler</h1>
      <p>
        Med en lidenskap for kreativ kode og moderne design, har jeg dedikert
        meg til å skape intuitive og engasjerende brukeropplevelser. La oss
        samarbeide for å bringe dine digitale prosjekter til liv!
      </p>
      <CTAButton onClick={() => onNavigate({ page: "contact" })}>
        Kontakt Meg
      </CTAButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const CTAButton = styled.button`
  background-color: var(--verdant-green);
  color: var(--background-color);
  margin-top: 25px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--yellow-accent);
  }
`;

HeroPage.propTypes = {
  onNavigate: PropTypes.func.isRequired,
};

export default HeroPage;
