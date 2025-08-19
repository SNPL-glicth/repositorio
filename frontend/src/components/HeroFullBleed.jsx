import React, { useEffect, useRef, useState } from 'react'
const slides = [
  { id:1, img:'/img/hero/hero-1.jpg', title:'PROYECTOS DE CERTIFICACIÓN', ctaText:'Conocer más', ctaHref:'#destacables' },
  { id:2, img:'/img/hero/hero-2.jpg', title:'RUTAS Y LABORATORIOS',       ctaText:'Explorar',    ctaHref:'#destacables' },
  { id:3, img:'/img/hero/hero-3.jpg', title:'PREPARA, PRACTICA Y CERTIFÍCATE', ctaText:'Iniciar', ctaHref:'#destacables' },
]
export default function HeroFullBleed({ className = '' }){
  const [i, setI] = useState(0)
  const trackRef = useRef(null)
  useEffect(()=>{
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if(reduce) return
    const t = setInterval(()=> setI(n => (n+1)%slides.length), 6000)
    return ()=> clearInterval(t)
  },[])
  useEffect(()=>{ const el=trackRef.current; if(el) el.style.transform=`translateX(-${i*100}%)` },[i])
  return (<header className={`hero-full ${className}`} aria-label="Destacados">
    <div className="hero-track" ref={trackRef}>
      {slides.map(s => (<div className="hero-slide" key={s.id}>
        <img src={s.img} alt={s.title} />
        <div className="hero-overlay"><h1>{s.title}</h1><a className="btn secondary" href={s.ctaHref}>{s.ctaText}</a></div>
      </div>))}
    </div>
    <button className="hero-nav left" aria-label="Anterior" onClick={()=>setI((i-1+slides.length)%slides.length)}>‹</button>
    <button className="hero-nav right" aria-label="Siguiente" onClick={()=>setI((i+1)%slides.length)}>›</button>
    <div className="hero-dots">{slides.map((s,idx)=>(<button key={s.id} className={'hero-dot '+(idx===i?'active':'')} onClick={()=>setI(idx)} aria-label={'Ir a slide '+(idx+1)} />))}</div>
  </header>)
}
