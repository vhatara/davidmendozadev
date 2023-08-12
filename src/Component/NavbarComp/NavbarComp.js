import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { BsLinkedin } from "react-icons/bs"
import  { BsGithub } from "react-icons/bs"

const NavbarComp = () => {
  return (
    <Navbar expand="lg" className='sticky-top'>
      <Container>
        <Navbar.Brand href="#home" title='decimo.dev' draggable="false">decimo.<span>dev</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto navmid-nav">
            <Nav.Link href="#home" className='navmid-links' draggable="false">Home</Nav.Link>
            <Nav.Link href="#about" className='navmid-links' draggable="false">About</Nav.Link>
            <Nav.Link href="#projects" className='navmid-links' draggable="false">Projects</Nav.Link>
            <Nav.Link href="#contact" className='navmid-links' draggable="false">Contact</Nav.Link>
          </Nav>
          <Nav className="navright-nav">
            <h5 className='d-lg-none socials-text'>Socials: </h5>
            <div className='d-sm-flex flex-row justify-content-center social-div'>
              <Nav.Link className="social-link linkedin" href="https://www.linkedin.com/in/mendoza-david-cinco/" target="_blank" title="LinkedIn" >
                <BsLinkedin />
              </Nav.Link>
              <Nav.Link className="social-link github" href="https://github.com/vhatara" target="_blank" title="Github">
                <BsGithub />
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComp;