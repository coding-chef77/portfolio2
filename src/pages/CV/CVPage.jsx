import cvData from "./resumeData";
import avatar from "./avatar.png";
import PropTypes from "prop-types";

import {
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
} from "./CVPage.styles";

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
    <KompetanseList hasTwoColumns={items.length > 4}>
      <h4>{title}</h4>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </KompetanseList>
  );
};

KompetanseSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CVPage;
