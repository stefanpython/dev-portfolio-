import "./App.css";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import AnimatedSVG from "./components/AnimatedSVG";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Credentials from "./components/Credentials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center mt-40 overflow-hidden flex-col sm:flex-row">
        <Welcome />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.8 }}
          className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 h-auto "
        >
          <AnimatedSVG />
        </motion.div>
      </div>

      <div
        id="about"
        className="flex justify-center items-center mt-48 overflow-hidden flex-col"
      >
        <About />
      </div>

      <div
        id="skills"
        className="flex justify-center items-center mt-4 overflow-hidden flex-col"
      >
        <Skills />
      </div>

      <div
        id="projects"
        className="flex justify-center items-center mt-4 overflow-hidden flex-col"
      >
        <Projects />
      </div>

      <div
        id="credentials"
        className="flex justify-center items-center mt-4 overflow-hidden flex-col"
      >
        <Credentials />
      </div>

      <div
        id="contact"
        className="flex justify-center items-center mt-4 overflow-hidden flex-col"
      >
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default App;
