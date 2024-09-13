import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import React from "react";
import Nav from './components/NavTabs';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';




function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
      <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Portfolio" element={<Portfolio />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/Resume" element={<Resume />} />
    <Route path="*" element={<Error />} />
 </Routes>
 </div>
      
    </div>
  );
}

export default App;

