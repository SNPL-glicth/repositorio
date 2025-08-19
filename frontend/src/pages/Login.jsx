import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
export default function Login(){
  return (<div><Navbar/><section className="login section">
    <div className="wrap container">
      <div className="login-card">
        <h2 className="login-title">Iniciar sesión</h2>
        <div className="form-row"><label className="muted">Email / Usuario</label><input className="input" placeholder="tucorreo@dominio.com" /></div>
        <div className="form-row"><label className="muted">Contraseña</label><input className="input" type="password" placeholder="••••••••" /><div className="help"><a href="#">¿Olvidaste la contraseña?</a></div></div>
        <button className="btn btn-block">Ingresar</button>
        <div style={{marginTop:10}}><button className="btn btn-block btn-outline">Crear cuenta gratis</button></div>
      </div>
      <div className="tile"><h3>Aprende, practica, certifícate</h3><p className="muted">Accede a tu perfil para comprar exámenes, revisar resultados y continuar tu ruta de certificación.</p><ul><li>Catálogo de certificaciones internacionales</li><li>Historial de compras y descargas</li><li>Soporte y acompañamiento</li></ul></div>
    </div>
  </section><Footer/></div>) }
