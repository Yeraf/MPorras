import React from 'react';
import '../Css/CssApp/IconWhatsApp.css';
import WhatsApp from '../Img/Logos/whatsapp.png';

function IconoWhatsapp() {
  return (
    <div>
        <a href="https://api.whatsapp.com/send?phone=60601010" className='btn-wsp' target="_blank">
            <i className='icon-whatsapp'><img className='icon-whatsapp-img' src={WhatsApp}></img></i>
        </a>
    </div>
  )
}

export default IconoWhatsapp;