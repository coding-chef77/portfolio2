import styled from "styled-components";
import cvData from "./resumeData";
import avatar from "./avatar.png";

const CVPage = () => {
  return (
    <Wrapper>
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
      <Main>
        <ProfilContainer>
          <h2>Profil</h2>
          <ProfileDescription>
            <p>{cvData.profil.profileDescription.trim()}</p>
          </ProfileDescription>

          <UtdanningContainer>
            <UtdanningHeader>Utdanning</UtdanningHeader>
            {cvData.profil.utdanning.map((education, index) => (
              <EducationEntry key={index}>
                <header>
                  <h4>{education.title}</h4>
                  <div>
                    <time dateTime={education.startDate.replace(".", "-")}>
                      {education.startDate}
                    </time>
                    <span className="date-separator">-</span>
                    <time dateTime={education.endDate.replace(".", "-")}>
                      {education.endDate}
                    </time>
                  </div>
                </header>
                <p>{education.description.trim()}</p>
              </EducationEntry>
            ))}
          </UtdanningContainer>
          <KompetanseContainer>
            <h3>Kompetanse</h3>
            <KompetanseSection
              title="Faglig"
              items={cvData.profil.kompetanse.faglig}
            />
            <KompetanseSection
              title="Personlig"
              items={cvData.profil.kompetanse.personlig}
            />
            <KompetanseSection
              title="Språk"
              items={cvData.profil.kompetanse.spraak}
            />
          </KompetanseContainer>
          <OmmegContainer>
            <h3>Om meg</h3>
            <p>{cvData.profil.omMeg.trim()}</p>
          </OmmegContainer>
          <ReferanserContainer>
            <h3>Referanser</h3>
            <p>{cvData.profil.referanser.trim()}</p>
          </ReferanserContainer>
        </ProfilContainer>

        <ErfaringContainer>
          <h2>Erfaring</h2>
          {cvData.erfaring.map((job, index) => (
            <JobTemplate key={index}>
              <header>
                <h4>{job.title}</h4>
                <div>
                  <time dateTime={job.startDate.replace(".", "-")}>
                    {job.startDate}
                  </time>
                  <span className="date-separator">-</span>
                  <time dateTime={job.endDate.replace(".", "-")}>
                    {job.endDate}
                  </time>
                </div>
              </header>
              <p>{job.description.trim()}</p>
            </JobTemplate>
          ))}
        </ErfaringContainer>
      </Main>
    </Wrapper>
  );
};

const KompetanseSection = ({ title, items }) => {
  return (
    <section
      className={`kompetanse-list ${items.length > 4 ? "two-columns" : ""}`}
    >
      <h4>{title}</h4>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

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

const KompetanseList = styled.section`
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

    &.two-columns {
      column-count: 2;
      flex-basis: 300px;
    }
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

export default CVPage;
