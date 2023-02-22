import React from "react";
import { Route, Routes } from "react-router-dom";

// Components

import Landing from "./views/Landing";
import Portfolio from "./views/Portfolio";
import Contact from "./views/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="about" element={<Portfolio />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}
