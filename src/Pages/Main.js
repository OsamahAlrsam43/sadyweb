import React from 'react';
import Home from "../components/Home"
import WHO_WE_ARE from "../components/WHO_WE_ARE"
import Kdmat from "../components/Kdmat"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import NavBar from '../components/NavBar/NavBar';

const Main = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <WHO_WE_ARE />
      <Kdmat/>
      <Contact/>
      <Footer />
      
    </div>
  )
}

export default Main