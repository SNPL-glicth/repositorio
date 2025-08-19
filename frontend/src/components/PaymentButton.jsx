import React, { useState } from 'react'
import { createCheckout } from '../services/api.js'
export default function PaymentButton({ amount_cents, product_name, quantity=1 }){
  const [loading,setLoading]=useState(false)
  const pay = async ()=>{
    try{ setLoading(true); const { url } = await createCheckout({ amount_cents, product_name, quantity }); if(url) window.location.href = url }
    catch(e){ alert('Pago falló: ' + (e?.message||e)) }
    finally{ setLoading(false) }
  }
  return <button className="btn" disabled={loading} onClick={pay}>{loading? 'Redirigiendo…' : 'Pagar ahora'}</button>
}