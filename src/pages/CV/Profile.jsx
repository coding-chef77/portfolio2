import styled from "styled-components";
import cvData from "./resumeData";

const Profile = () => {
  return (
    <ProfilContainer>
      <h2>Profil</h2>
      <article>
        <p>{cvData.profil.profileDescription.trim()}</p>
      </article>

      <UtdanningContainer>
        <h3>Utdanning</h3>
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
  );
};

const KompetanseSection = ({ title, items }) => {
  return (
    <KompetanseList className={items.length > 4 ? "two-columns" : ""}>
      <h4>{title}</h4>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </KompetanseList>
  );
};

export const ProfilContainer = styled.section`
  margin-top: 25px;

  h2 {
    margin-bottom: 25px;
  }
`;

export const JobTemplate = styled.div`
  padding: 15px 0;
  background-color: #f9f9f9;
  border-radius: 5px;
  margin-bottom: 20px;

  &:first-of-type {
    padding: 0;
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  h4 {
    font-weight: bold;
    font-size: 1.1em;
    margin: 0 0 2px 0;
  }

  time,
  .date-separator {
    color: #888;
  }

  p {
    margin-top: 10px;
  }
`;

export const EducationEntry = styled(JobTemplate)``; // Inherits styles from JobTemplate

export const UtdanningHeader = styled.h3`
  margin-top: 30px;
`;

export const KompetanseList = styled.section`
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

export const OmmegContainer = styled.article`
  h3 {
    margin-top: 30px;
    margin-bottom: 20px;
  }

  #omMeg {
    margin-bottom: 30px;
  }
`;

export const ReferanserHeader = styled.h3`
  margin-top: 6px;
`;
export default Profile;
