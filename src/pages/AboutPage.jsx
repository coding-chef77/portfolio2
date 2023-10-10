import styled from "styled-components";

const AboutPage = () => {
  const skillsets = [
    "React",
    "MUI",
    "Javascript",
    "HTML",
    "CSS",
    "Bootstrap",
    "Wordpress",
  ];
  const projectManagementTools = ["Trello", "Gantt"];

  return (
    <Wrapper>
      <div>
        <h3>Litt om meg - the coding chef!</h3>
      </div>
      <div>
        <p>
          Hei, jeg heter Heine Günther. Etter en variert karriere innen mat og
          logistikk, bestemte jeg meg for å bytte karrierevei og har nylig
          fullført utdannelsen min som Front End Developer. Selv om det kan
          virke som et stort hopp, ser jeg likhetstrekk som kreativitet,
          nysgjerrighet for å kontinuerlig lære og prøve nye metoder, godt
          samarbeid, presisjon, tidsstyring og å holde kundene fornøyde. Gjennom
          å bygge de ulike elementene sammen, skaper jeg nå nettsider, i stedet
          for matretter!
        </p>
        <p>
          Jeg ser etter å bli med i et team der jeg kan bidra med mine
          ferdigheter og fortsette å lære mer fra andre
        </p>
        <p>
          Sjekk ut noen av prosjektene mine og ta kontakt i kontaktskjemaet
          nedenfor. Jeg ser fra til å høre fra deg!.
        </p>
        <h4>Ferdigheter:</h4>
        <p>{skillsets.join(", ")}</p>
        <h4>Verktøy for prosjektstyring:</h4>
        <p>{projectManagementTools.join(", ")}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 400px;
  min-width: 400px;
  background-color: var(--yellow-accent);
`;
export default AboutPage;
