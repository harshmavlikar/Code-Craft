import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Empowering minds today for a brighter, smarter tomorrow.</h1>
        <p>Our cutting-edge curiculum is design to empower students with the knowledge, skills and experience needed to excel in the dynamic field of education</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
