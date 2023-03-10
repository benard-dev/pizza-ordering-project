import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { NavLink, Link } from "react-router-dom";

const NavigationBar = ({ active }) => {
  if (active === "Home") {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Link to="/" style={{ color: 'white', textDecoration: 'inherit' }}>
              <svg style={{ width: "20px", height: "20px", marginRight: "10px", fill: "white" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M169.7 .9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80c.5 0 1.1 0 1.6 0c176.7 0 320 143.3 320 320c0 .5 0 1.1 0 1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7 .9zM399.8 410.2c.1-3.4 .2-6.8 .2-10.2c0-159.1-128.9-288-288-288c-3.4 0-6.8 .1-10.2 .2L.5 491.9c-1.5 5.5 .1 11.4 4.1 15.4s9.9 5.6 15.4 4.1L399.8 410.2zM176 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM96 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
            </Link>
            <Navbar.Brand className='mx-2'>
              <Link to="/" style={{ color: 'white', textDecoration: 'inherit' }}>Rose's Gourmet Pizza</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="mx-2 my-1" style={{ color: 'white', textDecoration: 'underline', textUnderlineOffset: '4px' }} to="/">
                Home
              </NavLink>
              <NavLink className="mx-2 my-1" style={{ color: 'white', textDecoration: 'inherit' }} to="/about">
                About Us
              </NavLink>
              <NavLink className="mx-2 my-1" style={{ color: 'white', textDecoration: 'inherit' }} to="/contact">
                Contact Us
              </NavLink>
              <NavLink className="mx-2 my-1" style={{ color: 'white', textDecoration: 'inherit' }} to="/menu">
                Our Menu
              </NavLink>
            </Nav>
          <Nav>
            <NavLink className="order-button p-2 rounded my-1" style={{ color: 'black', textDecoration: 'inherit'}} to="/order">Order Online</NavLink>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  } else if (active === "About") {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Link to="/" style={{ color: 'white', textDecoration: 'inherit' }}>
              <svg style={{ width: "20px", height: "20px", marginRight: "10px", fill: "white" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M169.7 .9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80c.5 0 1.1 0 1.6 0c176.7 0 320 143.3 320 320c0 .5 0 1.1 0 1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7 .9zM399.8 410.2c.1-3.4 .2-6.8 .2-10.2c0-159.1-128.9-288-288-288c-3.4 0-6.8 .1-10.2 .2L.5 491.9c-1.5 5.5 .1 11.4 4.1 15.4s9.9 5.6 15.4 4.1L399.8 410.2zM176 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM96 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
            </Link>          <Navbar.Brand className='mx-2'>
              <Link to="/" style={{ color: 'white', textDecoration: 'inherit' }}>Rose's Gourmet Pizza</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="mx-2 my-1" style={{ color: 'white', textDecoration: 'inherit' }} to="/">
                Home
              </NavLink>
              <NavLink className="mx-2 my-1" style={{ color: 'white', textDecoration: 'underline', textUnderlineOffset: '4px' }} to="/about">
                About Us
              </NavLink>
              <NavLink className="mx-2 my-1" style={{ color: 'white', textDecoration: 'inherit' }} to="/contact">
                Contact Us
              </NavLink>
              <NavLink className="mx-2 my-1" style={{ color: 'white', textDecoration: 'inherit' }} to="/menu">
                Our Menu
              </NavLink>
            </Nav>
          <Nav>
            <NavLink className="order-button p-2 rounded my-1" style={{ color: 'black', textDecoration: 'inherit'}} to="/order">Order Online</NavLink>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
  }

  else if (active === "Contact") {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Link to="/" style={{ color: 'white', textDecoration: 'inherit' }}>
              <svg style={{ width: "20px", height: "20px", marginRight: "10px", fill: "white" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M169.7 .9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80c.5 0 1.1 0 1.6 0c176.7 0 320 143.3 320 320c0 .5 0 1.1 0 1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7 .9zM399.8 410.2c.1-3.4 .2-6.8 .2-10.2c0-159.1-128.9-288-288-288c-3.4 0-6.8 .1-10.2 .2L.5 491.9c-1.5 5.5 .1 11.4 4.1 15.4s9.9 5.6 15.4 4.1L399.8 410.2zM176 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM96 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
            </Link>          <Navbar.Brand className='mx-2'>
              <Link to="/" style={{ color: 'white', textDecoration: 'inherit' }}>Rose's Gourmet Pizza</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="mx-2 my-1" style={{ color: 'white', textDecoration: 'inherit' }} to="/">
                Home
              </NavLink>
              <NavLink className="mx-2 my-1" style={{ color: 'white', textDecoration: 'inherit' }} to="/about">
                About Us
              </NavLink>
              <NavLink className="mx-2 my-1" style={{ color: 'white', textDecoration: 'underline', textUnderlineOffset: '4px' }} to="/contact">
                Contact Us
              </NavLink>
              <NavLink className="mx-2 my-1" style={{ color: 'white', textDecoration: 'inherit' }} to="/menu">
                Our Menu
              </NavLink>
            </Nav>
          <Nav>
            <NavLink className="order-button p-2 rounded my-1" style={{ color: 'black', textDecoration: 'inherit'}} to="/order">Order Online</NavLink>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      )
  }

  else if (active === "Menu") {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Link to="/" style={{ color: 'white', textDecoration: 'inherit' }}>
              <svg style={{ width: "20px", height: "20px", marginRight: "10px", fill: "white" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M169.7 .9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80c.5 0 1.1 0 1.6 0c176.7 0 320 143.3 320 320c0 .5 0 1.1 0 1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7 .9zM399.8 410.2c.1-3.4 .2-6.8 .2-10.2c0-159.1-128.9-288-288-288c-3.4 0-6.8 .1-10.2 .2L.5 491.9c-1.5 5.5 .1 11.4 4.1 15.4s9.9 5.6 15.4 4.1L399.8 410.2zM176 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM96 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
            </Link>          <Navbar.Brand className='mx-2'>
              <Link to="/" style={{ color: 'white', textDecoration: 'inherit' }}>Rose's Gourmet Pizza</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="mx-2 my-1" style={{ color: 'white', textDecoration: 'inherit' }} to="/">
                Home
              </NavLink>
              <NavLink className="mx-2 my-1" style={{ color: 'white', textDecoration: 'inherit' }} to="/about">
                About Us
              </NavLink>
              <NavLink className="mx-2 my-1" style={{ color: 'white', textDecoration: 'inherit' }} to="/contact">
                Contact Us
              </NavLink>
              <NavLink className="mx-2 my-1" style={{ color: 'white', textDecoration: 'underline', textUnderlineOffset: '4px' }} to="/menu">
                Our Menu
              </NavLink>
            </Nav>
          <Nav>
            <NavLink className="order-button p-2 rounded my-1" style={{ color: 'black', textDecoration: 'inherit'}} to="/order">Order Online</NavLink>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }

   else if (active === "Menu") {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Link to="/" style={{ color: 'white', textDecoration: 'inherit' }}>
              <svg style={{ width: "20px", height: "20px", marginRight: "10px", fill: "white" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M169.7 .9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80c.5 0 1.1 0 1.6 0c176.7 0 320 143.3 320 320c0 .5 0 1.1 0 1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7 .9zM399.8 410.2c.1-3.4 .2-6.8 .2-10.2c0-159.1-128.9-288-288-288c-3.4 0-6.8 .1-10.2 .2L.5 491.9c-1.5 5.5 .1 11.4 4.1 15.4s9.9 5.6 15.4 4.1L399.8 410.2zM176 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM96 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
            </Link>          <Navbar.Brand className='mx-2'>
              <Link to="/" style={{ color: 'white', textDecoration: 'inherit' }}>Rose's Gourmet Pizza</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="mx-2 my-1" style={{ color: 'white', textDecoration: 'inherit' }} to="/">
                Home
              </NavLink>
              <NavLink className="mx-2 my-1" style={{ color: 'white', textDecoration: 'inherit' }} to="/about">
                About Us
              </NavLink>
              <NavLink className="mx-2 my-1" style={{ color: 'white', textDecoration: 'inherit' }} to="/contact">
                Contact Us
              </NavLink>
              <NavLink className="mx-2 my-1" style={{ color: 'white', textDecoration: 'underline', textUnderlineOffset: '4px' }} to="/menu">
                Our Menu
              </NavLink>
            </Nav>
          <Nav>
            <NavLink className="order-button p-2 rounded my-1" style={{ color: 'black', textDecoration: 'inherit'}} to="/order">Order Online</NavLink>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  } else {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Link to="/" style={{ color: 'white', textDecoration: 'inherit' }}>
              <svg style={{ width: "20px", height: "20px", marginRight: "10px", fill: "white" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M169.7 .9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80c.5 0 1.1 0 1.6 0c176.7 0 320 143.3 320 320c0 .5 0 1.1 0 1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7 .9zM399.8 410.2c.1-3.4 .2-6.8 .2-10.2c0-159.1-128.9-288-288-288c-3.4 0-6.8 .1-10.2 .2L.5 491.9c-1.5 5.5 .1 11.4 4.1 15.4s9.9 5.6 15.4 4.1L399.8 410.2zM176 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM96 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
            </Link>          <Navbar.Brand className='mx-2'>
              <Link to="/" style={{ color: 'white', textDecoration: 'inherit' }}>Rose's Gourmet Pizza</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="mx-2 my-1" style={{ color: 'white', textDecoration: 'inherit' }} to="/">
                Home
              </NavLink>
              <NavLink className="mx-2 my-1" style={{ color: 'white', textDecoration: 'inherit' }} to="/about">
                About Us
              </NavLink>
              <NavLink className="mx-2 my-1" style={{ color: 'white', textDecoration: 'inherit' }} to="/contact">
                Contact Us
              </NavLink>
              <NavLink className="mx-2 my-1" style={{ color: 'white', textDecoration: 'inherit' }} to="/menu">
                Our Menu
              </NavLink>
            </Nav>
          <Nav>
            <NavLink className="order-button p-2 rounded my-1" style={{ color: 'black', textDecoration: 'inherit'}} to="/order">Order Online</NavLink>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
};

export default NavigationBar

