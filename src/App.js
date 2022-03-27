import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Hero } from "./components/Hero/Hero";
import DefaultLayout from "./components/Layout/DefaultLayout";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="about-me" element={<About />} />
            <Route path="skills" element={<Skills />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </DefaultLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
