import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import logo from '../../assets/icon-suplemment.jpg'; // <-- Ruta corregida

function Header() {
  return (
    <Navbar bg="light" variant="dark" expand="lg" sticky="top">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="120"
            height="auto"
            className="d-inline-block align-top"
            alt="ENA Sport logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavDropdown title="Productos" id="productos-dropdown" className='px-3'>
              <NavDropdown.Item href="#action/3.1">Proteínas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Creatinas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Aminoácidos</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Según tu objetivo" id="objetivo-dropdown">
              <NavDropdown.Item href="#action/4.1">Rendimiento</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.2">Fuerza</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.3">Resistencia</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#combos">Combos</Nav.Link>
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
            <Nav.Link href="#faq">Preguntas frecuentes</Nav.Link>
            <Nav.Link href="#ofertas">Ofertas</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#search"><FaSearch /></Nav.Link>
            <Nav.Link href="#user"><FaUser /></Nav.Link>
            <Nav.Link href="#cart"><FaShoppingCart /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;