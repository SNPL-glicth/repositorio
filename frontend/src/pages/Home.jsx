import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import HeroFullBleed from '../components/HeroFullBleed.jsx'
import AvailableCerts from '../components/AvailableCerts.jsx'
export default function Home(){
  return (<div>
    <Navbar/>
    <HeroFullBleed className="variant"/>
        <AvailableCerts/>
    <Footer/>
  </div>)
}
