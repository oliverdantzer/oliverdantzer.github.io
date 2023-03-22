import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
        <footer>
            <a href="#" className='name'>Oliver Dantzer</a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/oliverdantzer/" target="_blank"><BsLinkedin/></a>
                <a href="http://github.com/oliverdantzer" target="_blank"><FaGithub/></a>
            </div>

            <small><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> OLIVER DANTZER. All rights reserved.</small>

        </footer>
    )
}

export default Footer