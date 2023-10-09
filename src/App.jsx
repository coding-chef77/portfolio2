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
    switch (activePage.page) {
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
    <AppContainer>
      <GlobalStyle />
      <NavBar onNavigate={setActivePage} />
      <MainContent>
        <HeroPage onNavigate={setActivePage} />
        {activePage.page && <OverlayContent>{renderPage()}</OverlayContent>}
      </MainContent>
      <Footer />
    </AppContainer>
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
  background-color: var(--yellow-accent);
  z-index: 10;
  overflow-y: auto;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
`;

const OverlayContent = ({ children }) => {
  return <Overlay>{children}</Overlay>;
};

OverlayContent.propTypes = {
  children: PropTypes.node,
};

export default App;
