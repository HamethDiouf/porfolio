import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Logo from '../assets/img/logo.png';
import navIcon1 from '../assets/icons/nav-icon1.svg';
import navIcon2 from '../assets/icons/nav-icon2.svg';
import navIcon3 from '../assets/icons/nav-icon3.svg';

// NavBar Section
export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

useEffect(() => {
    const onScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
         } else {
            setScrolled(false);
        }
    };

    window.addEventListener('scroll', onScroll);
    
    return () => window.removeEventListener('scroll', onScroll);
}, [])    

const onUpdateActiveLink = (value) => {
    setActiveLink(value);
}

  return (
        <Navbar expand='lg' className={scrolled ? 'scrolled': ''}>
            <Container>
                <Navbar.Brand href='#home'>
                    <img src={Logo} alt={"Logo"} className='logo-mt' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/"><img src={navIcon1}alt={"Linkedin-icon"}/></a>
                            <a href="https://facebook.com/"><img src={navIcon2}alt={"Facebook-icon"}/></a>
                            <a href="https://instagram.com/"><img src={navIcon3}alt={"Instagram-icon"}/></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )
}

