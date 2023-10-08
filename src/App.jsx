import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import HeroPage from "./pages/HeroPage";
import AboutPage from "./pages/AboutPage";
import ProjectModalPage from "./pages/ProjectModalPage";
import SingelProjectPage from "./pages/SingelProjectPage";
import ContactPage from "./pages/ContactPage";
import CVPage from "./pages/CV/CVPage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectModalPage />} />
        <Route path="/projects/:projectId" element={<SingelProjectPage />} />
        <Route path="/cv" element={<CVPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
