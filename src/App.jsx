import styled from "styled-components";
import { useState } from "react";
import PropTypes from "prop-types";
import GlobalStyle from "./assets/GlobalStyles";
import NavBar from "./NavBar";
import HeroPage from "./pages/HeroPage";
import AboutPage from "./pages/AboutPage";
import ProjectModalPage from "./pages/ProjectModalPage";
import SingelProjectPage from "./pages/SingelProjectPage";
import ContactPage from "./pages/ContactPage";
import CVPage from "./pages/CV/CVPage";
import Footer from "./components/Footer";

function App() {
  const [activePage, setActivePage] = useState({ page: null, projectId: null });

  const renderPage = () => {
    switch (activePage) {
      case "about":
        return <AboutPage />;
      case "projects":
        return <ProjectModalPage />;
      case "singleProject":
        return <SingelProjectPage projectId={activePage.projectId} />;
      case "cv":
        return <CVPage />;
      case "contact":
        return <ContactPage />;
      default:
        return null;
    }
  };

  return (
    <>
      <GlobalStyle />
      <NavBar onNavigate={setActivePage} />
      <HeroPage onNavigate={setActivePage} />
      {activePage && <OverlayContent>{renderPage()}</OverlayContent>}
      <Footer />
    </>
  );
}

const Overlay = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 800px;
  height: auto;
  margin: auto;
  background-color: var(--yellow-accent); // Semi-transparent white
  z-index: 10; // Ensure it's on top
  overflow-y: auto; // Allow scrolling if content is long
`;

const OverlayContent = ({ children }) => {
  return <Overlay>{children}</Overlay>;
};

OverlayContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
