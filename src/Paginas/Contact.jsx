import React from 'react'
import Madera1 from '../Img/Materiales/Madera2.jpg';
import '../Css/CssApp/Contact.css';
import Face from '../Img/Logos/facebook.png';
import Whatsapp from '../Img/Logos/whatsapp.png';
import Email from '../Img/Logos/envelope.png';
import IconoWhatsapp from "../Components/IconoWhatsapp";

function Contact() {
  return (
    <article className='article-img'>
      <IconoWhatsapp/>
        <img className='about-img' src={Madera1}></img>
        <div className="home-text-portada">
            <h3><b>Mueblería Porras</b></h3>
            <h4><b><img className='logos-contacto' src={Whatsapp}></img> 6060-1010</b></h4>
            <h4><b><img className='logos-contacto' src={Whatsapp}></img> 6006-8686</b></h4>
            <h4><b><img className='logos-contacto' src={Face}></img> Kalef Porras</b></h4>
            <h6><b><img className='logos-contacto' src={Email}></img> facturasmueblesporras@gmail.com</b></h6>
            <h4><b>Estamos para servirles</b></h4>
          </div>
    </article>
  )
}

export default Contact