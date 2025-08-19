import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { useCart } from '../context/CartContext.jsx'

export default function PaymentResult(){
  const q = new URLSearchParams(useLocation().search)
  const status = q.get('status')
  const sessionId = q.get('session_id')
  const ok = status === 'success'
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const { clear } = useCart()

  useEffect(()=>{
    async function load(){
      if(!ok || !sessionId) return
      setLoading(true)
      try{
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4242'
        const r = await fetch(base + '/checkout/session/' + sessionId)
        const j = await r.json()
        if(r.ok){ setData(j); clear() } else { console.error(j) }
      }catch(e){ console.error(e) } finally{ setLoading(false) }
    }
    load()
  },[ok, sessionId])

  return (<div>
    <Navbar/>
    <section className="section container">
      <div className="tile" style={{maxWidth:800,margin:'0 auto'}}>
        {ok ? (<>
          <h2>¡Pago completado!</h2>
          {loading && <p className="muted">Cargando detalle de la orden…</p>}
          {data && (<div>
            <p className="muted">Orden <strong>{data.id}</strong> — Estado de pago: <strong>{data.payment_status}</strong></p>
            <table style={{width:'100%',borderCollapse:'collapse'}}>
              <thead><tr><th style={{textAlign:'left'}}>Producto</th><th>Cant.</th><th>Valor</th></tr></thead>
              <tbody>
                {data.line_items.map((li,i)=>(
                  <tr key={i}><td>{li.description}</td><td style={{textAlign:'center'}}>{li.qty}</td><td style={{textAlign:'right'}}>${((li.amount_unit||0)/100).toLocaleString('es-CO')} COP</td></tr>
                ))}
              </tbody>
              <tfoot><tr><td colSpan="2" style={{textAlign:'right',paddingTop:8}}><strong>Total</strong></td><td style={{textAlign:'right',paddingTop:8}}><strong>${((data.amount_total||0)/100).toLocaleString('es-CO')} COP</strong></td></tr></tfoot>
            </table>
            {data.customer_email && <p className="muted">Hemos enviado un recibo a <strong>{data.customer_email}</strong>.</p>}
          </div>)}
          <div style={{display:'flex',gap:8,justifyContent:'center',marginTop:12}}>
            <Link className="btn" to="/">Volver al inicio</Link>
            <Link className="btn secondary" to="/carrito">Ver carrito</Link>
          </div>
        </>) : (<>
          <h2>Pago cancelado</h2>
          <p className="muted">Tu pago no se completó. Puedes regresar a tu carrito para intentarlo de nuevo o seguir explorando certificaciones.</p>
          <div style={{display:'flex',gap:8,justifyContent:'center'}}>
            <Link className="btn" to="/carrito">Ir al carrito</Link>
            <Link className="btn secondary" to="/">Ir al inicio</Link>
          </div>
        </>)}
      </div>
    </section>
    <Footer/>
  </div>)
}
