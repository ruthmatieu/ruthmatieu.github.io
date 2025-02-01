import React from 'react';
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./Components/Home";
import CaseStudy1 from "./Components/CaseStudies/Sugardbare";

const App = () => {

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="case-study-1" element={<CaseStudy1 />} />
      </Routes>
  );
}

export default App;
