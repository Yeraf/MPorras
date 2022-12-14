import React from "react";
import '../Css/CssApp/navbar.css';
import Logo from "../Img/Logos/Logo.jpeg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link  class="navbar-brand" to="/">
        <img className="navbar-logo" src={Logo}></img>
        </Link>
        <p className="navbar-p"><b>Mueblería</b><br></br><b className="navbar-b">Porras</b></p>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mx-auto" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item active">
                <Link className="nav-link" to="/">
                <b className="b-navbar">Muebles</b>
                </Link>
            </li>
            <li class="nav-item active">
                <Link className="nav-link" to="/cocinasintegradas">
                <b className="b-navbar">Cocinas Integrales</b>
                </Link>
            </li>
            <li class="nav-item active">
                <Link className="nav-link" to="/dormitorios">
                <b className="b-navbar">Dormitorios</b>
                </Link>
            </li>
            <li class="nav-item active">
                <Link className="nav-link" to="/accesorios">
                <b className="b-navbar">Accesorios</b>
                </Link>
            </li>
            <li class="nav-item active">
                <Link className="nav-link" to="/nosotros">
                <b className="b-navbar">¿Quiénes somos?</b>
                </Link>
            </li>
            <li class="nav-item active">
                <Link className="nav-link" to="/contacto">
                <b className="b-navbar">Contáctenos</b>
                </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
