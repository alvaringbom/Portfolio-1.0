import { Routes, Route } from "react-router-dom";
import ProjectOne from "./pages/ProjectOne";
import ProjectTwo from "./pages/ProjectTwo";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import "./NavFooter.css";
import "./Pages.css";
import "./Projects.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project-one" element={<ProjectOne />} />
        <Route path="/project-two" element={<ProjectTwo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
