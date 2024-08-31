import "./App.css";
import { Route, useLocation } from "react-router-dom";
import { Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import SkillsAndExperience from "./Components/SkillsAndExperience";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";

function App() {
  const location = useLocation(); // Get the current location
  return (
    <>
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route
            path="/skills_and_experience"
            element={<SkillsAndExperience />}
          />
          <Route path="/about_me" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
