import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Paginas/Home";
import Contact from "./Paginas/Contact";
import Nosotros from "./Paginas/About";

function SistemsRoutes() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route index exact path="/" element={<Home/>} />
        <Route exact path="/nosotros" element={<Nosotros/>} />
        <Route exact path="/contacto" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default SistemsRoutes;
