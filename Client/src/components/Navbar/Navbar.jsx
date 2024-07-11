import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import "./Navbar.css";

const AppNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <Navbar expand="lg" className='navbar'>
      <Navbar.Brand href="/" className='px-4 brand-with-border'>NOVABYTE</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link href="/products" className='navlinks'>Products</Nav.Link> */}
          <Nav.Link href="" className='navlinks'>Products</Nav.Link>
          <Nav.Link href="/solutions" className='navlinks'>Solutions</Nav.Link>
          <NavDropdown 
            title="Training" 
            id="basic-nav-dropdown" 
            className='navlinks'
            show={showDropdown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <NavDropdown.Item href="/training/fullstack-development">FullStack Development</NavDropdown.Item>
            <NavDropdown.Item href="/training/meanstack-developement">Meanstack Development</NavDropdown.Item>
            <NavDropdown.Item href="/training/qaandautomation">QA & Automation Testing</NavDropdown.Item>
            <NavDropdown.Item href="/training/devops">DevOps</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/support" className='navlinks'>Support</Nav.Link>
            {/* <Nav.Link href="/consulting" className='navlinks'>Consulting</Nav.Link> */}
            {/* <Nav.Link href="/think" className='navlinks'>Think</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
