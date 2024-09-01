import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Photos from "./components/Photos";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
      <Navbar />
    </>
  );
}

export default App;
