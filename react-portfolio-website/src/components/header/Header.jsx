import React from 'react'
import './header.css'
import { useState } from 'react'
import CallToAction from './CallToAction'
import HeadersSocials from './HeaderSocials'
import {IoIosCode} from 'react-icons/io'
import {IoIosSchool} from 'react-icons/io'
import {CgChevronRightO} from 'react-icons/cg'

function Header (props) {
  const [activeNav, setActiveNav] = useState(props.activeNav);
  const handleSetNav = (newActiveNav) => {
    setActiveNav(newActiveNav);
    props.setActiveNav(newActiveNav);
  }
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, my name is</h5>
        <h1>Oliver Dantzer</h1>
        <h5 className="secondary-text"><IoIosSchool/> Computer science student at Queen's University</h5>
        <h5 className="secondary-text"><IoIosCode/> Full-stack developer</h5>
        <CallToAction />
        <HeadersSocials />
        {/*
        <a href="#portfolio" className='scroll__down' 
        onClick={() => handleSetNav("#portfolio")}>Scroll down <CgChevronRightO/></a>
  */}
        
      </div>
    </header>
  )
}

export default Header