import React from 'react'
import './nav.css'
import { useState } from 'react'
import {RiHome5Line} from 'react-icons/ri'
import {MdPersonOutline} from 'react-icons/md'
import {BiChat} from 'react-icons/bi'
import {MdOutlineLibraryBooks} from 'react-icons/md'
import {AiOutlineFolderOpen} from 'react-icons/ai'

function Nav (props) {
  const [activeNav, setActiveNav] = useState(props.activeNav);
  const handleSetNav = (newActiveNav) => {
    setActiveNav(newActiveNav);
    props.setActiveNav(newActiveNav);
  }
  return (
    
    <nav>
      <a 
      href="#" 
      onClick={() => handleSetNav('#')} 
      className={activeNav === '#' ? 'active' : ''}
      ><RiHome5Line size={30}/></a>

      {/*
      <a 
      href="#about" 
      onClick={() => setActiveNav('#about')} 
      className={activeNav === '#about' ? 'active' : ''}
      ><MdPersonOutline size={30}/></a>
  */}

      <a 
      href="#portfolio"
      onClick={() => setActiveNav('#portfolio')} 
      className={activeNav === '#portfolio' ? 'active' : ''}
      ><AiOutlineFolderOpen size={30}/></a>

      <a 
      href="#experience"
      onClick={() => setActiveNav('#experience')} 
      className={activeNav === '#experience' ? 'active' : ''}
      ><MdOutlineLibraryBooks size={30}/></a>
      
      <a 
      href="#contact"
      onClick={() => setActiveNav('#contact')} 
      className={activeNav === '#contact' ? 'active' : ''}
      ><BiChat size={30}/></a>
    </nav>
  )
}

export default Nav