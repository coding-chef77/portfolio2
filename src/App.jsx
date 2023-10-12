import styled from "styled-components";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import GlobalStyle from "./assets/GlobalStyles";
import NavBar from "./NavBar";
import HeroPage from "./pages/HeroPage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/projects/ProjectsPage";
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
        return <ProjectsPage />;
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

  const handleCloseOverlay = () => {
    setActivePage({ page: null });
  };

  return (
    <AppContainer>
      <NavBar onNavigate={setActivePage} />
      <MainContent>
        <HeroPage onNavigate={setActivePage} />
        {activePage.page && (
          <OverlayContent onClose={handleCloseOverlay}>
            {renderPage()}
          </OverlayContent>
        )}
      </MainContent>
      <ProjectsPage />
      <Footer />
      <GlobalStyle />
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

const CloseIcon = styled(FaTimes)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 24px;
  z-index: 11;
`;

const OverlayContent = ({ children, onClose }) => {
  return (
    <Overlay>
      <CloseIcon onClick={onClose} />
      {children}
    </Overlay>
  );
};

OverlayContent.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default App;
