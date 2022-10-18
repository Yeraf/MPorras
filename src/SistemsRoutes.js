import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Paginas/Home";
import Contact from "./Paginas/Contact";
import Nosotros from "./Paginas/About";
import Comedor from "./Paginas/Comedor";
import Dormitorio from "./Paginas/Dormitorio";
import Accesorios from "./Paginas/Accesorios";
import Footer from "./Components/Footer";

function SistemsRoutes() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route index exact path="/" element={<Home/>} />
        <Route exact path="/nosotros" element={<Nosotros/>} />
        <Route exact path="/contacto" element={<Contact/>} />
        <Route exact path="/cocinasintegradas" element={<Comedor/>} />
        <Route exact path="/dormitorios" element={<Dormitorio/>} />
        <Route exact path="/accesorios" element={<Accesorios/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default SistemsRoutes;
