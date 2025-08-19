import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar(){
  return (
    <div className="navbar">
      <div className="inner">
        <Link to="/" className="brand"><img src="/img/logo-coin.png" alt="COIN" height="42" /></Link>
        <nav className="menu">
          <div className="menu-item"><span className="label">Conózcanos ▾</span>
            <div className="mega"><div className="cols">
              <div><h4>La empresa</h4><a href="#">Qué hacemos</a><a href="#">Valor de la certificación</a></div>
              <div><h4>Comunidad</h4><a href="#">Proveedores</a><a href="#">Carreras</a></div>
              <div><h4>Contacto</h4><NavLink to="/contacto">Contáctenos</NavLink></div>
              <div><h4>Más</h4><a href="#">Sala de prensa</a></div>
            </div></div>
          </div>
          <div className="menu-item"><span className="label">Certificaciones ▾</span>
            <div className="mega"><div className="cols">
              <div><h4>Adobe</h4><a href="#">Recursos</a><a href="#">Photoshop</a></div>
              <div><h4>Microsoft</h4><a href="#">MOS</a><a href="#">Azure</a></div>
              <div><h4>AWS</h4><a href="#">Cloud Practitioner</a><a href="#">Architect</a></div>
              <div><h4>Otras</h4><a href="#">Cisco</a><a href="#">Autodesk</a></div>
            </div></div>
          </div>
          <div className="menu-item"><span className="label">Educación ▾</span>
            <div className="mega"><div className="cols">
              <div><h4>Docentes</h4><a href="#">Blog</a><a href="#">Políticas</a></div>
              <div><h4>Estudiantes</h4><a href="#">Mi camino</a><a href="#">Competiciones</a></div>
            </div></div>
          </div>
          <NavLink to="/contacto" className="menu-item">Contáctenos</NavLink>
        </nav>
        <div className="auth"></div>
              <div className="auth">
          <NavLink to="/login" className="btn secondary">Iniciar sesión</NavLink>
          <NavLink to="/carrito" className="btn" style={{marginLeft:8}}>Carrito</NavLink>
        </div>
      </div>
    </div>
  )
}
