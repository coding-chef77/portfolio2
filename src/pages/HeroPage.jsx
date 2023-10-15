import styled from "styled-components";
import PropTypes from "prop-types";
import myImage from "../assets/hero.jpg";

const HeroPage = ({ onNavigate }) => {
  return (
    <ImageWrapper>
      <Wrapper>
        <HeroContainerWrapper>
          <Heading>
            På jakt etter min neste utfordring som frontend-utvikler
          </Heading>
          <HeroText>
            Med en lidenskap for kreativ kode og moderne design, har jeg
            dedikert meg til å skape intuitive og engasjerende
            brukeropplevelser. La oss samarbeide for å få dine digitale
            prosjekter til liv!
          </HeroText>
          <CTAButton onClick={() => onNavigate({ page: "contact" })}>
            Kontakt Meg
          </CTAButton>
        </HeroContainerWrapper>
      </Wrapper>
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  background-image: linear-gradient(
      rgba(250, 243, 224, 0.6),
      rgba(34, 34, 34, 0.2)
    ),
    url(${myImage});
  background-size: cover;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroContainerWrapper = styled.div`
  width: 50%;
`;

const Heading = styled.h1`
  // text-shadow: 3px 4px 0 rgba(0, 0, 0, 0.2);
  font-size: 52px;
  margin-bottom: 32px;
  line-height: 1.05;
`;

const HeroText = styled.p`
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 48px;
`;

const CTAButton = styled.button`
  background-color: var(--verdant-green);
  color: var(--background-color);

  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--accent-teal);
    color: black;
  }
`;

HeroPage.propTypes = {
  onNavigate: PropTypes.func.isRequired,
};

export default HeroPage;
