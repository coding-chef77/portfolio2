import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroPage from "./pages/HeroPage";
import AboutPage from "./pages/AboutPage";
import ProjectModalPage from "./pages/ProjectModalPage";
import SingelProjectPage from "./pages/SingelProjectPage";
import ContactPage from "./pages/ContactPage";
import CVPage from "./pages/CV/CVPage";

function App() {
  return (
    <BrowserRouter>
      <h1>Hi there!!!</h1>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectModalPage />} />
        <Route path="/projects/:projectId" element={<SingelProjectPage />} />
        <Route path="/cv" element={<CVPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
