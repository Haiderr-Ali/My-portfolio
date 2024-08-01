import React from 'react'
import './Hero.css' 
function Hero() {
  return (
    <div id='home' className='hero'>
      <img src="./haider_image.jpg" alt="Haider Ali Image" />
      <h1><span>I'm Haider Ali,</span> frontend developer based in India. </h1>
      <p>I  am a skilled front-end developer specializing in HTML, CSS, JavaScript, and React.js. I create responsive, user-friendly websites.</p>
      <div className="hero-action">
        <div className="hero-connect"><a href="https://github.com/Haiderr-Ali" target='_blank'>GitHub <i class="fa-brands fa-github"></i></a></div>
        <div className="hero_resume"><a href="./Haider.pdf" target="_blank" rel="noopener noreferrer">My Resume  <i class="fa-regular fa-file"></i></a></div>
      </div>
    </div>
  )
}

export default Hero
