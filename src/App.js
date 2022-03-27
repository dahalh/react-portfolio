import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import DefaultLayout from "./components/Layout/DefaultLayout";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";

function App() {
  return (
    <div className="wrapper">
      <DefaultLayout>
        <Skills />
        <Projects />
        <About />
        <Contact />
      </DefaultLayout>
    </div>
  );
}

export default App;
