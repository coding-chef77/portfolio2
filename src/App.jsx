import styled from "styled-components";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import GlobalStyle from "./assets/GlobalStyles";
import NavBar from "./NavBar";
import HeroPage from "./pages/HeroPage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/projects/ProjectsPage";
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
          <OverlayContent
            onClose={handleCloseOverlay}
            closeIconPosition="top-right"
          >
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
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const CloseIcon = styled(FaTimes)`
  position: absolute;
  top: ${(props) => (props.position === "top-right" ? "45px" : "auto")};
  right: ${(props) => (props.position === "top-right" ? "30px" : "auto")};
  bottom: ${(props) => (props.position === "bottom-right" ? "40px" : "auto")};
  cursor: pointer;
  font-size: 24px;
  z-index: 11;
`;

const OverlayHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`;

const OverlayContent = ({ children, onClose }) => {
  return (
    <Overlay>
      <OverlayHeader>
        <CloseIcon onClick={onClose} position="top-right" />
      </OverlayHeader>
      {children}
    </Overlay>
  );
};

OverlayContent.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default App;
