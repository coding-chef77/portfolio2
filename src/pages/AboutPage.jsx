import styled from "styled-components";

const AboutPage = () => {
  const skillsets = [
    "React",
    "Javascript",
    "HTML",
    "CSS",
    "Styled-Components",
    "Bootstrap",
    "MUI",
  ];
  const projectManagementTools = ["Trello", "Gantt"];

  return (
    <Wrapper>
      <div>
        <h2>Litt om meg - the coding chef!</h2>
      </div>
      <Content>
        <Text>
          Hei, jeg heter Heine Günther. Etter en variert karriere innen mat og
          logistikk, bestemte jeg meg for å bytte karrierevei og har nylig
          fullført utdannelsen min som Front End Developer. Selv om det kan
          virke som et stort hopp, ser jeg likhetstrekk som kreativitet,
          nysgjerrighet for å kontinuerlig lære og prøve nye metoder, godt
          samarbeid, presisjon, tidsstyring og å holde kundene fornøyde. Gjennom
          å bygge de ulike elementene sammen, skaper jeg nå nettsider, i stedet
          for matretter!
        </Text>
        <Text>
          Jeg ser etter å bli med i et team der jeg kan bidra med mine
          ferdigheter og fortsette å lære mer fra andre
        </Text>
        <Text>
          Sjekk ut noen av prosjektene mine og ta kontakt i kontaktskjemaet
          nedenfor. Jeg ser fra til å høre fra deg!.
        </Text>
        <h3>Ferdigheter:</h3>
        <TextSkills>{skillsets.join(", ")}</TextSkills>
        <h3>Verktøy for prosjektstyring:</h3>
        <TextSkills>{projectManagementTools.join(", ")}</TextSkills>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 400px;
  min-width: 400px;
  background-color: var(--background-color);
  padding: 42px;
  border: 3px solid var(--yellow-accent);
  border-radius: 8px;
`;

const Text = styled.p`
  margin-bottom: 22px;
`;

const TextSkills = styled.p`
  margin-bottom: 18px;
`;
const Content = styled.div`
  padding: 20px;
  border-left: 5px solid var(--yellow-accent);
`;

export default AboutPage;
