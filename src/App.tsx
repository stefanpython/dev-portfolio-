import "./App.css";
import Navbar from "./components/Navbar";
import AnimatedSVG from "./components/AnimatedSVG";
import Welcome from "./components/Welcome";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center mt-40 overflow-auto flex-col sm:flex-row">
        <Welcome />
        <AnimatedSVG />
      </div>

      <div className="flex justify-center items-center mt-40 overflow-auto flex-col sm:flex-row">
        <About />
      </div>
    </>
  );
}

export default App;
