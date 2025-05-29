import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Starter from "./components/Starter"
import About from "./components/About"; // Importa el componente AboutMe
import './index.css';

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Starter />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
