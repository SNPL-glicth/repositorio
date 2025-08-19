import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles.css'
import { CartProvider } from './context/CartContext.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import PaymentResult from './pages/PaymentResult.jsx'
import Login from './pages/Login.jsx'
import Cart from './pages/Cart.jsx'
createRoot(document.getElementById('root')).render(
  <CartProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contacto" element={<Contact/>} />
      <Route path="/pago/resultado" element={<PaymentResult/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/carrito" element={<Cart/>} />
    </Routes>
    </BrowserRouter>
</CartProvider>
)