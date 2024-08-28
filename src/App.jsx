import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import Nav from './components/NavTabs';
import { Outlet } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
        <Outlet />
      <Portfolio /> 
      <Footer />
    </div>
  );
}

export default App;

