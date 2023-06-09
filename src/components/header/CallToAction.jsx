import React from 'react'
import Resume from '../../assets/resume-oliver-dantzer.pdf'

const CallToAction = () => {
  return (
    <div className="calltoaction">
        <a href={Resume} rel="noopener noreferrer" target='_blank' className='btn'>Download resume</a>
        <a href="#contact" className='btn btn-primary'>Contact me</a>
    </div>
  )
}

export default CallToAction