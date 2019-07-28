import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function Navigation() {
  return (
    <Container className="pb-5">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="/">Local Weather Info</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <li className="nav-item nav-link">
              <Link to="/" className="white-link">
                Home
              </Link>
            </li>
            <li className="nav-item nav-link">
              <Link to="/forecast" className="white-link">
                Forecast
              </Link>
            </li>
            <li className="nav-item nav-link">
              <Link to="/hourly" className="white-link">
                Hourly Forecast
              </Link>
            </li>
            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/forecast">Forecast</Nav.Link>
            <Nav.Link href="/hourly">Hourly Forecast</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Navigation;
