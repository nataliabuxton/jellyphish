    // Importing deps


import { useState, useEffect } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
// import logo from '../assets/img/logo.png';
import fbLogo from '../assets/img/facebook.png';
import igLogo from '../assets/img/instagram.png';
import ytLogo from '../assets/img/youtube.png';
import 'animate.css';


    // Creating Navbar Component, generating activity on scrolling behavior

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);


    // using scroll position to determine the value of setScrolled
useEffect(() => {
    const onScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }


    window.addEventListener('scroll', onScroll);

    return() => window.removeEventListener("scroll", onScroll);
    } , [])


    // Function to change active status of a  li based on menu item clicked
const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    };


    // Navbar begins here

    return ( 
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
          <Navbar.Brand href="#home">
            JELLYPHISH 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#services" className={activeLink === 'services' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('services')}>Services</Nav.Link>
              <Nav.Link href="#product" className={activeLink === 'product' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('product')}>Product</Nav.Link>
              <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
            </Nav>
            <span className="navbar-text">
            <div className="social-icon">
                <a href="#"><img src={fbLogo} alt="" /></a>
                <a href="#"><img src={igLogo} alt="" /></a>
                <a href="#"><img src={ytLogo} alt="" /></a>
            </div>
            <button className="vvd btn btn--flex" onClick={() => console.log('connect')} ><span>Contact</span></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
};
