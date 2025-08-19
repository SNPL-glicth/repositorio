export async function createCheckout(data){
  const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4242'
  const r = await fetch(base + '/create-checkout-session', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data) })
  if(!r.ok){ let e={}; try{e = await r.json()}catch{}; throw new Error(e.error || 'Fallo creando checkout') }
  return r.json()
}
export async function createCheckoutFromCart(items){
  const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4242'
  const r = await fetch(base + '/checkout/cart', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ items }) })
  if(!r.ok){ let e={}; try{e = await r.json()}catch{}; throw new Error(e.error || 'Fallo creando checkout del carrito') }
  return r.json()
}
