import React, {CSSProperties} from 'react'
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../index.css'

function NavBar() {
    return (
        <Navbar expand="xl" style={NavbarStyles}>
        <Navbar.Brand href="/" style={{fontFamily: "Myriad Pro Regular", fontSize: "30px"}}>ENTERPRISE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="bg-white" id="basic-navbar-nav">
          <Nav className="text-center" style={NavbarElement}>
            <Link className="NavbarLinks" style={NavbarLinks} to="/">HOME</Link>
            <Link className="NavbarLinks" style={NavbarLinks} to="/">ABOUT</Link>
            <Link className="NavbarLinks" style={NavbarLinks} to="/">PRODUCTS</Link>
            <Link className="NavbarLinks" style={NavbarLinks} to="/">SERVICES</Link>
            <Link className="NavbarLinks" style={NavbarLinks} to="/">SOCIAL MEDIA</Link>
          </Nav>
          <Link to="/" style={NavbarContactButton} className="btn btn-outline-dark">GET IN TOUCH</Link>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBar


const NavbarStyles: CSSProperties = {
    height: "100px",
    paddingInline: "100px",
    backgroundColor: "white",
    
},

NavbarElement: CSSProperties = {
    marginRight: "100px",
    flex: 1, 
    color: "black",
    justifyContent: "center"
},

NavbarLinks: CSSProperties = {
  fontStyle: "oblique",
  color: 'black',
  margin: '20px',
  fontSize: '14px',
  
},

NavbarContactButton: CSSProperties = {
    fontSize: "15px",
    borderRadius: 0,
}

