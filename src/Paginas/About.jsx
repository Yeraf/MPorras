import "../Css/CssApp/About.css";
import React from "react";
import image from "../Img/Muebles/MHome/cocinas-madera.jpg";

function About() {
  return (
    <div className="container about-complete">
      <h3 className="about-h3-title">Quiénes somos?</h3>
      <div className="container about-div-all">
        <article className="container article-about">
          <img className="img-about-firts" src={image}></img>
          <div className="about-div-text">
            <h3>Mueblería Porras</h3>
            <p>
              Es un hecho establecido hace demasiado tiempo que un lector se
              distraerá con el contenido del texto de un sitio mientras que mira
              su diseño. El punto de usar Lorem Ipsum es que tiene una
              distribución más o menos normal de las letras, al contrario de
              usar textos como por ejemplo "Contenido aquí, contenido aquí".
              Estos textos hacen parecerlo un español que se puede leer. Muchos
              paquetes de autoedición y editores de páginas web usan el Lorem
              Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem
              Ipsum" va a dar por resultado muchos sitios web que usan este
              texto si se encuentran en estado de desarrollo. Muchas versiones
              han evolucionado a través de los años, algunas veces por
              accidente, otras veces a propósito (por ejemplo insertándole humor
              y cosas por el estilo).
            </p>
          </div>
        </article>
      </div>
      <div className="container about-div-all">
        <article className="container article-about">
          <div className="about-div-text">
            <h3>Mueblería Porras</h3>
            <p>
              Es un hecho establecido hace demasiado tiempo que un lector se
              distraerá con el contenido del texto de un sitio mientras que mira
              su diseño. El punto de usar Lorem Ipsum es que tiene una
              distribución más o menos normal de las letras, al contrario de
              usar textos como por ejemplo "Contenido aquí, contenido aquí".
              Estos textos hacen parecerlo un español que se puede leer. Muchos
              paquetes de autoedición y editores de páginas web usan el Lorem
              Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem
              Ipsum" va a dar por resultado muchos sitios web que usan este
              texto si se encuentran en estado de desarrollo. Muchas versiones
              han evolucionado a través de los años, algunas veces por
              accidente, otras veces a propósito (por ejemplo insertándole humor
              y cosas por el estilo).
            </p>
          </div>
          <iframe className="about-video"
            width="2000"
            height="400"
            src="https://www.youtube.com/embed/y5eT-mvXFOM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </article>
      </div>
    </div>
  );
}

export default About;
