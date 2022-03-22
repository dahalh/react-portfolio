import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <Navbar expand="md" id="navbar" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" width="80px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-bolder fs-4">
            <Nav.Link href="#skills" className="text-light">
              Skills
            </Nav.Link>
            <Nav.Link href="#projects " className="text-light">
              Projects
            </Nav.Link>
            <Nav.Link href="#about-me" className="text-light">
              About Me
            </Nav.Link>
            <Nav.Link href="#contact" className="text-light">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
