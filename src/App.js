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
        {/*skills section */}
        <Skills />

        {/* project section */}
        <Projects />

        {/* About Me Section */}
        <About />

        {/* Contact Section */}
        <Contact />
      </DefaultLayout>
    </div>
  );
}

export default App;
