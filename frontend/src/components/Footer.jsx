import React from 'react'
export default function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        <div className="cols">
          <div>
            <img src="/img/logo-coin.png" alt="COIN" height="56"/>
            <p className="muted">Ceboruco 2511, Col. Real de San Javier<br/>Metepec, Estado de México</p>
            <p className="muted">+52 1 722 2070598 · 01800 813 0598</p>
            <p><a href="mailto:info@etciberoamerica.com">info@etciberoamerica.com</a></p>
          </div>
          <div><h3>Certificaciones</h3><ul>
            <li><a href="#">Adobe</a></li><li><a href="#">Microsoft</a></li><li><a href="#">AWS</a></li><li><a href="#">Cisco</a></li>
          </ul></div>
          <div><h3>Educación</h3><ul><li><a href="#">Docentes</a></li><li><a href="#">Estudiantes</a></li></ul></div>
          <div><h3>Contáctenos</h3><ul><li><a href="/contacto">Contacto</a></li><li><a href="#">Soporte</a></li></ul></div>
        </div>
      </div>
      <div className="legal">© 2025 Nexus International Corporation S.A.S — Demo educativa.</div>
    </footer>
  )
}
