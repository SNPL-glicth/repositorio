import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartCtx = createContext(null)
export const useCart = ()=> useContext(CartCtx)

export function CartProvider({ children }){
  const [items, setItems] = useState(()=>{
    try{ return JSON.parse(localStorage.getItem('coin.cart')||'[]') }catch{ return [] }
  })

  useEffect(()=>{ localStorage.setItem('coin.cart', JSON.stringify(items)) },[items])

  const add = (product)=>{
    setItems(prev=>{
      const i = prev.findIndex(p=>p.name===product.name)
      if(i>-1){
        const copy=[...prev]; copy[i]={...copy[i], quantity: copy[i].quantity + (product.quantity||1)}; return copy
      }
      return [...prev, {...product, quantity: product.quantity||1}]
    })
  }
  const remove = (name)=> setItems(prev=> prev.filter(p=>p.name!==name))
  const setQty = (name, qty)=> setItems(prev=> prev.map(p=> p.name===name? {...p, quantity: Math.max(1, qty|0)}: p ))
  const clear = ()=> setItems([])

  const totals = useMemo(()=>{
    const sub = items.reduce((s,p)=> s + p.amount_cents*p.quantity, 0)
    return { subtotal_cents: sub }
  },[items])

  return <CartCtx.Provider value={{items, add, remove, setQty, clear, totals}}>{children}</CartCtx.Provider>
}
