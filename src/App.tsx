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

      <div className="flex justify-center items-center mt-48 overflow-hidden flex-col">
        <About />

        <Skills />

        <Projects />

        <Credentials />

        <Contact />
      </div>
    </>
  );
}

export default App;
