import React from 'react'
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoWhatsapp
} from 'react-icons/io'
import {
  IoLocationSharp,
  IoCall
} from "react-icons/io5";

import '../styles/components/footer.sass'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='social-list'>
          <h3>Nossas redes sociais</h3>
          <ul>
            <li>
              <IoLogoInstagram className='icones' color='#bf4080' />
              <a href="#">@AdegaDEV</a>
            </li>
            <li>
              <IoLogoFacebook className='icones' color='#0866FF' />
              <a href="#">Adegas DEV</a>
            </li>
            <li>
              <IoLogoWhatsapp className='icones' color='#2AB318' />
              <a href="#">(11) 91919-9191</a>
            </li>
          </ul>
        </div>

        <p>© 2025 Adega DEV</p>

        <div className='info'>
          <h3>Informações</h3>
          <span className='location'>
            <IoLocationSharp />
            Rua das Uvas, 120 <br /> Bairro Dev, São Paulo - SP
          </span>
          <br />
          <span className='phone'><IoCall />
            (11) 99999-9999
          </span>
        </div>
    </div>
  )
}

export default Footer
