import './footer.css';
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoWhatsappSquare } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";


import React from 'react';

function Footer() {
  return (
    <div className="container footer">
      <div className="row">
        <div className="col-md-4 iconosFooter">
          <a className="instagram icono" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <BiLogoInstagramAlt className="icono" />
          </a><br />
          <a className="linkedin" href="https://uy.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <BiLogoLinkedinSquare className="icono" />
          </a><br />
          <a className="whatsapp" href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
          <BiLogoWhatsappSquare className="icono" />
          </a>
        </div>
        <div className="col-md-4 mt-3 mb-3">
          <p>Horario: Lunes a Viernes de 9 a 18hs</p>
          <p>Telefono: 098854458</p>
          <p>Direccion: Rambla 1234. Mercedes, Uruguay.</p>
        </div>
        <div className="col-md-4">
          <iframe
            className="border border-4 border-white rounded-pill"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13347.42457329743!2d-58.02646803926007!3d-33.244071983974465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2suy!4v1696461434436!5m2!1ses!2suy"
            width="320" height="200" style={{ border: '0' }} allowFullScreen="" loading="lazy"
            title="Google Maps"></iframe>
          <div id="map"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;