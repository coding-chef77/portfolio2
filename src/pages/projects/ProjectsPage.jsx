import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import image from "../../assets/web_upload.png";
import imageTwinChat from "../../assets/twinChat.png";

const ProjectsPage = () => {
  return (
    <Wrapper>
      <Card>
        <Image src={imageTwinChat} alt="something" />
        <CardContent>
          <Title>SoMe Project</Title>
          <Description>
            Dette prosjektet var min avsluttende eksamen der målet var å lage en
            sosial medieplattform. Siden jeg selv har tvillinger, tenkte jeg at
            det ville være en god idé å rette meg mot foreldre med tvillinger.
            Dette er mitt første prosjekt ved bruk av Material UI, og jeg likte
            fleksibiliteten. Vennligst klikk enten på GitHub-linken for
            fullstendige detaljer eller knappen nedenfor for å sjekke det ut i
            nettleseren din. Prosjektet er basert på API-dokumentasjonen levert
            av Noroff og inkluderer funksjoner som brukerregistrering,
            innlogging, profilhåndtering, oppretting av innlegg, oppretting av
            kommentarer og mer.
          </Description>
          <Links>
            <a
              href={
                "https://github.com/Noroff-FEU-Assignments/project-exam-2-heine5150.git"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <ProjectLink
              href={"https://exam-2-twin-chat.vercel.app/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </ProjectLink>
          </Links>
        </CardContent>
      </Card>
      <Card>
        <Image src={image} alt="something" />
        <CardContent>
          <Title>Project Name</Title>
          <Description>This is a brief description of the project.</Description>
          <Links>
            <a
              href={"https://github.com/your_username/project_name"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <ProjectLink
              href={"https://deployed_project_link.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </ProjectLink>
          </Links>
        </CardContent>
      </Card>
      <Card>
        <Image src={image} alt="something" />
        <CardContent>
          <Title>Project Name</Title>
          <Description>This is a brief description of the project.</Description>
          <Links>
            <a
              href={"https://github.com/your_username/project_name"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <ProjectLink
              href={"https://deployed_project_link.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </ProjectLink>
          </Links>
        </CardContent>
      </Card>
      <Card>
        <Image src={image} alt="something" />
        <CardContent>
          <Title>Project Name</Title>
          <Description>This is a brief description of the project.</Description>
          <Links>
            <a
              href={"https://github.com/your_username/project_name"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <ProjectLink
              href={"https://deployed_project_link.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </ProjectLink>
          </Links>
        </CardContent>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1200px;
  padding: 96px 0;
  margin: 0 auto;
`;

const Card = styled.div`
  border: 1px solid #e1e4e8;
  max-width: 300px;
  min-width: 200px;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: fill;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 16px;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProjectLink = styled.a`
  color: #0366d6;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default ProjectsPage;
