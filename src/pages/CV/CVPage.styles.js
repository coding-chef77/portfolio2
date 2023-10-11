import styled from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 20px 20px;
  background-color: #f7f9fc;
`;

const HeaderWrapper = styled.div`
  display: flex;
  margin-top: 35px;
  border-bottom: 2px solid #d8d8d8;
  padding-bottom: 20px;
  padding-top: 20px;
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
    margin-bottom: 8px;
  }

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

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding-top: 20px;
`;

const ProfilContainer = styled.section`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  .profil h2 {
    margin-bottom: 25px;
  }
`;

const ProfileDescription = styled.article`
  padding-top: 40px;
`;

const UtdanningContainer = styled.article``;

const UtdanningHeader = styled.h3`
  margin-top: 30px;
`;

const EducationEntry = styled.div`
  padding: 15px 0;
  background-color: #f9f9f9; /* light gray */
  border-radius: 5px;
  margin-bottom: 20px;
`;

const KompetanseContainer = styled.article``;

const KompetanseList = styled.section.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== "hasTwoColumns",
})`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  h4 {
    flex-basis: 100px;
    flex-shrink: 0;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
    line-height: 1.6;
    column-count: 1;
    column-gap: 20px;

    ${({ hasTwoColumns }) =>
      hasTwoColumns &&
      `
      column-count: 2;
      flex-basis: 300px;
    `}
  }
`;

export const KompetanseHeader = styled.h3`
  margin-bottom: 20px;
`;

const OmmegContainer = styled.article`
  h3 {
    margin-top: 30px;
    margin-bottom: 20px;
  }

  #omMeg {
    margin-bottom: 30px;
  }
`;

const ErfaringContainer = styled.section`
  margin-top: 25px;
  border-left: 2px solid #d8d8d8;
  padding-left: 20px;

  h2 {
    margin-bottom: 25px;
  }
`;

const ReferanserContainer = styled.section`
  h3 {
    margin-top: 30px;
    margin-bottom: 20px;
  }
`;

const JobTemplate = styled.article`
  padding: 15px 0;
  background-color: #f9f9f9; /* light gray */
  border-radius: 5px;
  margin-bottom: 20px;
`;

export {
  AdressIcon,
  Wrapper,
  KompetanseContainer,
  HeaderWrapper,
  AvatarSection,
  StyledAddress,
  StyledImg,
  Main,
  ProfilContainer,
  ProfileDescription,
  UtdanningHeader,
  UtdanningContainer,
  EducationEntry,
  KompetanseList,
  OmmegContainer,
  ErfaringContainer,
  ReferanserContainer,
  JobTemplate,
};
