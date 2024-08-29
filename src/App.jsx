import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import Nav from './components/NavTabs';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
    <Route path="/" element={<Portfolio />} />
    <Route path="/About" element={<About />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/Resume" element={<Resume />} />
    <Route path="*" element={<Error />} />
 </Routes>
      <Footer />
    </div>
  );
}

export default App;

