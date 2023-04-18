import { NavLink } from "react-router-dom";
import "./Navigation.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const linkStyles = { color: "var(--secondary-color)" };

function Navigation() {
  return (
    <Navbar expand="lg" fixed="top">
      <Container>
        <Nav.Link as={NavLink} to="/">
          laura petrie
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-links">
            <Nav.Link as={NavLink} to="/" style={linkStyles}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" style={linkStyles}>
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects" style={linkStyles}>
              Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" style={linkStyles}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
