import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./styles/App.css";

function App() {
  return (
    <>
      <Home />
      <Navbar />
    </>
  );
}

export default App;
