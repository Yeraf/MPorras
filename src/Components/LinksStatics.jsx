import React from 'react';
import { Link } from 'react-router-dom';

function LinksStatics() {
  return (
    <div>
        <Link to="/">
        <p>Muebles</p>
        </Link>
        <Link to="/cocinasintegradas">
        <p>Integrales</p>
        </Link>
        <Link to="/dormitorios">
        <p>Dormitorio</p>
        </Link>
        <Link to="/accesorios">
        <p>Accesorios</p>
        </Link>
        <Link to="/nosotros">
        <p>Nosotros</p>
        </Link>
        <Link to="/contacto">
        <p>Contacto</p>
        </Link> 
    </div>
  )
}

export default LinksStatics