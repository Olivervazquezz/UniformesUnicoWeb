import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>ACERCA DE LA TIENDA</h4>
        <p>Comprometidos con la calidad, comodidad</p>
        <p>y atención personalizada para cada</p>
        <p>comunidad escolar.</p>
      </div>

      <div className="footer-section">
        <h4>DATOS DE CONTACTO</h4>
        <p>ventas@uniformesunico.com</p>
        <p>(229) 931-4575</p>
        <p>(229) 932-9041</p>
      </div>

      <div className="footer-section">
        <h4>DIRECCIÓN DEL LOCAL</h4>
        <p>Av Sur 26, (Entre Sur 3 y Sur 8)</p>
        <p>Casas Tamsa, 94295</p>
        <p>Boca del Río, Veracruz.</p>
      </div>

      <div className="footer-section">
        <h4>HORARIO EN TIENDA</h4>
        <p>Lunes a Viernes: 9am – 7pm</p>
        <p>Sábados: 9am – 2pm</p>
        <p>Domingos: Cerrados</p>
      </div>
    </footer>
  );
}

export default Footer;