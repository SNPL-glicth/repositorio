import React from 'react'
import PaymentButton from './PaymentButton.jsx'
import { useCart } from '../context/CartContext.jsx'
const items = [
  { code:'MS', name:'Microsoft Office Specialist',        priceCop:299000, vendor:'MS', duration:'2–4 sem', mode:'Online' },
  { code:'Ad', name:'Adobe Certified Professional',       priceCop:449000, vendor:'Ad', duration:'3–6 sem', mode:'Online' },
  { code:'AW', name:'AWS Cloud Practitioner',             priceCop:199000, vendor:'AW', duration:'2–3 sem', mode:'Online' },
  { code:'Go', name:'Google Analytics Certified',         priceCop:179000, vendor:'Go', duration:'2–3 sem', mode:'Online' },
  { code:'Ci', name:'Cisco CCNA',                         priceCop:599000, vendor:'Ci', duration:'6–10 sem', mode:'Online / Presencial' },
  { code:'Or', name:'Oracle Database Administrator',      priceCop:549000, vendor:'Or', duration:'6–10 sem', mode:'Online / Presencial' },
]
export default function AvailableCerts(){
  const { add } = useCart()
  return (
    <section className="section container" id="destacables">
      <h3 className="section-title">Certificaciones Destacables</h3>
      <p className="section-sub">Elige entre nuestras certificaciones internacionales, acompáñate de nuestros labs y lleva tu carrera al siguiente nivel.</p>
      <div className="cert-grid">
        {items.map(it => (
          <article key={it.name} className="cert-card">
            <div className="cert-head">
              <div className="cert-badge">{it.code}</div>
              <span className="pill">En oferta</span>
            </div>
            <div className="cert-body">
              <h4>{it.name}</h4>
              <div className="meta">
                <span>{it.vendor}</span><span>{it.duration}</span><span>{it.mode}</span>
              </div>
              <div className="cert-includes">
                <span className="badge">Incluye examen</span>
                <span className="badge">Laboratorios</span>
                <span className="badge">Simulador</span>
              </div>
            </div>
            <div className="cert-foot">
              <div className="price">${(it.priceCop).toLocaleString('es-CO')} COP</div>
              <div style={{display:'flex',gap:8}}>
                <button className='btn secondary' onClick={()=> add({ name: it.name, amount_cents: it.priceCop*100 })}>Agregar al carrito</button>
                <PaymentButton product_name={it.name} amount_cents={it.priceCop*100} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
