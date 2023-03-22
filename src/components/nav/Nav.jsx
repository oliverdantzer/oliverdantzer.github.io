import React from 'react'
import './nav.css'
import { useState } from 'react'
import {RiHome5Line} from 'react-icons/ri'
import {MdPersonOutline} from 'react-icons/md'
import {BiChat} from 'react-icons/bi'
import {MdOutlineLibraryBooks} from 'react-icons/md'
import {AiOutlineFolderOpen} from 'react-icons/ai'
import {Link} from 'react-scroll'

function Nav (props) {
  const [activeNav, setActiveNav] = useState(props.activeNav);
  return (
    
    <nav className='navbar'>
      <Link className='navbar__option' activeClass='active' spy to='home'>
        <RiHome5Line size={30}/>
      </Link>
      <Link className='navbar__option' activeClass='active' spy to='portfolio'>
        <AiOutlineFolderOpen size={30}/>
      </Link>
      <Link className='navbar__option' activeClass='active' spy to='experience'>
        <MdOutlineLibraryBooks size={30}/>
      </Link>
      <Link className='navbar__option' activeClass='active' spy to='contact'>
        <BiChat size={30}/>
      </Link>
    </nav>
  )
}

export default Nav