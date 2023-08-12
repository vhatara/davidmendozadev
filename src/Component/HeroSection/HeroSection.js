import React from 'react'
// import Typed from 'react-typed'

const HeroSection = () => {
  return (
<section id="home">
    <div className='herosection-wrapper'>
      <div className='main-info'>
        <h1 className='firstName'> David </h1>
        <h1 className='lastName'> Mendoza </h1>
        <h1 className='jobrole'>
          Front-End Web Developer
        </h1>
        {/* <Typed 
          className="typed-text"
          strings={["Front-End Web Developer", "DevOps Engineer", "Application Support"]}
          typeSpeed={60}
          backSpeed={60}
          loop
        /> */}
        <div className='d-flex cta-div flex-lg-row justify-content-around flex-sm-column'>
        <a href="#projects" className='btn-main-offer view-portfolio'> View portfolio </a>
        <a href="#contact" className='btn-main-offer contact-me'> Contact Me </a>
        </div>
      </div>
    </div>
    </section>
  )
}

export default HeroSection