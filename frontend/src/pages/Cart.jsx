import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { useCart } from '../context/CartContext.jsx'
import { createCheckoutFromCart } from '../services/api.js'

export default function Cart(){
  const { items, remove, setQty, totals, clear } = useCart()
  const checkout = async ()=>{
    if(items.length===0) return alert('Tu carrito está vacío')
    try{
      const payload = items.map(p=>({ name:p.name, amount_cents:p.amount_cents, quantity:p.quantity }))
      const { url } = await createCheckoutFromCart(payload)
      if(url) window.location.href = url
    }catch(e){ alert('No se pudo iniciar el pago: '+(e?.message||e)) }
  }
  return (<div>
    <Navbar/>
    <section className="section container">
      <h2>Carrito de compras</h2>
      {items.length===0? <p className="muted">No tienes productos en el carrito.</p>:
      <div className="cart">
        <table>
          <thead><tr><th>Producto</th><th>Cantidad</th><th>Precio</th><th>Total</th><th></th></tr></thead>
          <tbody>
            {items.map(p=> (
              <tr key={p.name}>
                <td><strong>{p.name}</strong></td>
                <td>
                  <div className="qty">
                    <button onClick={()=> setQty(p.name, p.quantity-1)}>-</button>
                    <input value={p.quantity} onChange={e=> setQty(p.name, parseInt(e.target.value||'1',10))} />
                    <button onClick={()=> setQty(p.name, p.quantity+1)}>+</button>
                  </div>
                </td>
                <td>${(p.amount_cents/100).toLocaleString('es-CO')} COP</td>
                <td>${((p.amount_cents*p.quantity)/100).toLocaleString('es-CO')} COP</td>
                <td><button className="btn secondary" onClick={()=> remove(p.name)}>Quitar</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="summary">
          <div className="line"><span>Subtotal</span><strong>${(totals.subtotal_cents/100).toLocaleString('es-CO')} COP</strong></div>
          <div className="actions">
            <button className="btn secondary" onClick={clear}>Vaciar</button>
            <button className="btn" onClick={checkout}>Pagar carrito</button>
          </div>
        </div>
      </div>}
    </section>
    <Footer/>
  </div>)
}
