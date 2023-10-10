import styled from "styled-components";
import cvData from "./resumeData";
import avatar from "./avatar.png";

const Header = () => {
  return (
    <HeaderWrapper>
      <AvatarSection>
        <StyledImg src={avatar} alt={cvData.header.altText} />
        <div>
          <h1>{cvData.header.name}</h1>
          <p>{cvData.header.title}</p>
        </div>
      </AvatarSection>
      <StyledAddress>
        <AdressIcon>
          <i className="fas fa-home"></i>
          <p>{cvData.header.address.street}</p>
        </AdressIcon>
        <p>
          <i className="fas fa-envelope"></i>
          <a href={`mailto:${cvData.header.address.email}`}>
            {cvData.header.address.email}
          </a>
        </p>
        <p>
          <i className="fab fa-linkedin"></i>
          <a
            href={cvData.header.address.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profil
          </a>
        </p>
        <p>
          <i className="fas fa-phone-alt"></i>
          <a href={`tel:${cvData.header.address.phone.replace(/\s/g, "")}`}>
            {cvData.header.address.phone}
          </a>
        </p>
      </StyledAddress>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  margin-top: 25px;
  border-bottom: 2px solid #d8d8d8;
  padding-bottom: 20px;
`;

const AvatarSection = styled.section`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
`;

const StyledAddress = styled.address`
  flex: 1;
  align-self: center;
  padding-left: 60px;
  font-style: normal;
  line-height: 1.6;

  p {
    margin-bottom: 8px;
  }

  i {
    margin-right: 5px;
    color: #555;
  }

  i:first-of-type {
    margin-bottom: +8px;

  a {
    color: #0077cc;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #0055aa;
    }
  }
`;

const AdressIcon = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const StyledImg = styled.img`
  border-radius: 50%;
  width: 135px;
  height: 135px;
`;

export default Header;
