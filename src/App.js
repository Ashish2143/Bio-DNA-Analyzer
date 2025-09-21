import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Components
import MainPage from "./components/MainPage";
import Upload from "./components/Upload";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [uploadedFile, setUploadedFile] = useState(null);

  return (
    <Router>
      {/* Navbar stays on all pages */}
      <Navbar />

      {/* AnimatePresence for smooth page transitions */}
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/upload"
            element={<Upload uploadedFile={uploadedFile} setUploadedFile={setUploadedFile} />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard uploadedFile={uploadedFile} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
