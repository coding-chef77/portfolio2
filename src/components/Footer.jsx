import styled from "styled-components";

function Footer() {
  return (
    <FooterWrapper>
      <FooterText>Kodet av Heine Günther {new Date().getFullYear()}</FooterText>
      <FooterBar />
    </FooterWrapper>
  );
}
const FooterWrapper = styled.div`
  padding: 14px 0 10px 0;
  text-align: center;
`;

const FooterText = styled.p``;

const FooterBar = styled.div`
  height: 4px;
`;
export default Footer;
