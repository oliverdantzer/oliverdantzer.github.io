import React from 'react'
import { useState } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <>
        <Header activeNav={activeNav} setActiveNav={setActiveNav}/>
        <Nav activeNav={activeNav} setActiveNav={setActiveNav}/>
        <Portfolio />
        <Experience />
        <Contact />
        <Footer />
    </>
  )
}

export default App