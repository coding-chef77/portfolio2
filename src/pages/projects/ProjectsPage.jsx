import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import image from "../../assets/web_upload.png";

const ProjectsPage = () => {
  return (
    <Wrapper>
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
`;

const Card = styled.div`
  border: 1px solid #e1e4e8;
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
  object-fit: cover;
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
