import React from "react";
import { Link } from "react-router-dom";
import "../Css/CssApp/LinksStatics.css";

function LinksStatics() {
  return (
    <div className="div-links">
      <div className="container">
        <Link to="/" className="text-decoretion-link">
          <p className="div-links-complete">Muebles</p>
        </Link>
        <Link to="/cocinasintegradas" className="text-decoretion-link">
          <p className="div-links-complete">Integrales</p>
        </Link>
        <Link to="/dormitorios" className="text-decoretion-link">
          <p className="div-links-complete">Dormitorio</p>
        </Link>
      </div>
      <div className="container">
        <Link to="/accesorios" className="text-decoretion-link">
          <p className="div-links-complete">Accesorios</p>
        </Link>
        <Link to="/nosotros" className="text-decoretion-link">
          <p className="div-links-complete">Nosotros</p>
        </Link>
        <Link to="/contacto" className="text-decoretion-link">
          <p className="div-links-complete">Contacto</p>
        </Link>
      </div>
    </div>
  );
}

export default LinksStatics;
