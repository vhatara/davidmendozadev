import React from 'react'
import { Row, Col } from 'react-bootstrap'
import TechStackList from './TechStackList'
import profilepic from "../../Assets/Images/Profile/profile-pic.png"
import resume from "../../Assets/Files/CV/David_Mendoza_CV.pdf"

const AboutSection = () => {
  return (
    <section id='about'>
      <div className='about-wrapper'>
        <div className='tech-stack-div'>
          <h1 className='section-title'> Tech Stacks </h1>
          <Row xs={3} md={3} lg={5} className='d-flex justify-content-around g-4 py-3'>
              {TechStackList.map((techstack)=> (
              <Col align="center">
                    <img className={"tech-stack-icons " + techstack.classname} src={techstack.icon} alt={techstack.name}></img>
              </Col>
            ))}
              </Row>
        </div>

        <div className='about-me d-flex justify-content-around'> 
            <div className='about-me-img'>
              <img src={profilepic} alt={profilepic}></img>
            </div>

            <div className='about-me-desc text-center'>
                <h1> About Me</h1>
                <p>
                  Hello, there! I'm <span className='fw-bold'>David Mendoza</span>, a passionate and motivated aspiring 
                  front-end web developer with a passion to bring web solutions to life. With the foundation skills of <span className='fw-bold'>HTML</span>,
                  <span className='fw-bold'>CSS</span>, and <span className='fw-bold'>Javascript</span>, I would like to contribute my skills to learn, improve,
                  and enrich them in a dynamic and collaborative environment.
                </p>

                <p>
                  I am looking forward to join a company where I can contribute my skills while absorbing knowledge and expertise from knowledged professionals
                  in the field. 
                </p>

                <p>
                  
                </p>

                <div className='d-flex flex-lg-row justify-content-center flex-sm-column'>
                <a href="#contact" className='btn-main-offer workwithme'> Work With Me! </a>
                <a href={resume} className='btn-main-offer downloadcv' target='_blank' rel="noreferrer"> Download CV </a>
                </div>
            </div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection