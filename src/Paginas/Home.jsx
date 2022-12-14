import React from "react";
import "../Css/CssApp/Home.css";
import Mueble1 from "../Img/Muebles/MHome/muebles1.jpg";
import Mueble2 from "../Img/Muebles/MHome/muebles2.jpg";
import Portada from "../Img/Muebles/MHome/muebles_modernos.jpg";
import IconoWhatsapp from "../Components/IconoWhatsapp";
import Bounce from 'react-reveal/Bounce';

function Home() {
  return (
    <div className="home-container-principal">
      <IconoWhatsapp/>
      <div className="home-portada">
        <img className="home-img-portada" src={Portada}></img>
          <div className="home-text-portada">
            <Bounce right>
            <h1><b>Mueblería Porras</b></h1>
            </Bounce>
            <Bounce left>
            <h3><b>Estamos para servirles</b></h3>
            </Bounce>
            <Bounce right>
            <h5><b>Contacto</b></h5>
            </Bounce>
            <Bounce left>
            <h5><b>6060-1010</b></h5>
            </Bounce>
          </div>
      </div>
      <h3 className="home-h3">Todo en muebles para tu hogar</h3>
      <div class="card-deck">
        <div class="card">
          <img
            className="home-img"
            src={Mueble1}
            class="card-img-top"
            alt="..."
          ></img>
          <div class="card-body home-card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img
            className="home-img"
            src={Mueble2}
            class="card-img-top"
            alt="..."
          ></img>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img
            className="home-img"
            src={Mueble1}
            class="card-img-top"
            alt="..."
          ></img>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
      <div class="card-deck">
        <div class="card">
          <img
            className="home-img"
            src={Mueble1}
            class="card-img-top"
            alt="..."
          ></img>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img
            className="home-img"
            src={Mueble1}
            class="card-img-top"
            alt="..."
          ></img>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img
            className="home-img"
            src={Mueble2}
            class="card-img-top"
            alt="..."
          ></img>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
      <div class="card-deck">
        <div class="card">
          <img
            className="home-img"
            src={Mueble2}
            class="card-img-top"
            alt="..."
          ></img>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img
            className="home-img"
            src={Mueble2}
            class="card-img-top"
            alt="..."
          ></img>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img
            className="home-img"
            src={Mueble2}
            class="card-img-top"
            alt="..."
          ></img>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
