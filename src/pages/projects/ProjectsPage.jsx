import { useRef } from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import squareeyes from "../../assets/squareeues.png";
import imageTwinChat from "../../assets/twinChat.png";
import imageAnalytic from "../../assets/tekst-analytiker.png";
import wordpressCa from "../../assets/wordpress.png";

// const containerRef = useRef();
// const [inViewRef, inView] = useInView({
//   triggerOnce: true,
// });

const ProjectsPage = () => {
  const containerRef = useRef();
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <motion.div
      ref={(element) => {
        containerRef.current = element;
        inViewRef(element);
      }}
      initial={inView ? "visible" : "hidden"}
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <Wrapper>
        <Card>
          <Image src={imageTwinChat} alt="something" />
          <CardContent>
            <Title>SoMe Project</Title>
            <Description>
              Dette prosjektet var min avsluttende eksamen der målet var å lage
              en sosial medieplattform. Siden jeg selv har tvillinger, tenkte
              jeg at det ville være en god idé å rette meg mot foreldre med
              tvillinger. Dette er mitt første prosjekt ved bruk av Material UI,
              og jeg likte fleksibiliteten. Vennligst klikk enten på
              GitHub-linken for fullstendige detaljer eller knappen nedenfor for
              å sjekke det ut i nettleseren din. Prosjektet er basert på
              API-dokumentasjonen levert av Noroff og inkluderer funksjoner som
              brukerregistrering, innlogging, profilhåndtering, oppretting av
              innlegg, oppretting av kommentarer og mer.
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
          <Image src={imageAnalytic} alt="something" />
          <CardContent>
            <Title>Tekstanalytiker</Title>
            <Description>
              {" "}
              Det er en modell som er trent på et datasett med filmanmeldelser
              og brukes til å klassifisere tekst som enten positiv eller
              negativ. Modellen bruker en variant av BERT-arkitekturen kalt
              DistilBERT, som er designet for å være mer ressurseffektiv og
              mindre i størrelse enn den originale BERT-modellen. Denne modellen
              kan være nyttig for oppgaver som involverer å identifisere eller
              filtrere ut tekst som er positiv eller negativ i tone. Modellen er
              fra HuggingFace.
            </Description>
            <Links>
              <a
                href={"https://github.com/your_username/project_name"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </a>
              <ProjectLink
                href={"https://cerulean-stardust-668c8f.netlify.app/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </ProjectLink>
            </Links>
          </CardContent>
        </Card>
        <Card>
          <Image src={wordpressCa} alt="something" />
          <CardContent>
            <Title>JS/React prosject</Title>
            <Description>
              Dette er et React-rammeprosjekt som inkorporerer Bootstrap for å
              levere et funksjonelt, men enkelt grensesnitt. Hovedmålet med
              dette prosjektet er å etablere sømløs routing for enkel navigasjon
              og sikre riktig validering av skjemaer og funksjonalitet for
              innloggingsformularet. For mer informasjon, kan du se detaljene
              via Github-lenken.
            </Description>
            <Links>
              <a
                href={
                  "https://github.com/coding-chef77/-js-frameworks-course-assignment"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </a>
              <ProjectLink
                href={"https://jade-bonbon-07e78e.netlify.app/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </ProjectLink>
            </Links>
          </CardContent>
        </Card>
        <Card>
          <Image src={squareeyes} alt="something" />
          <CardContent>
            <Title>Square Eyes</Title>
            <Description>
              This is a brief description of the project.
            </Description>
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
    </motion.div>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
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
