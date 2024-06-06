import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Navbarr = () => {
  return (
    <div style={{ width: '100vw', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
      <Navbar>
        <Container style={{ margin: '0' }}>
          <div className="navbarLogo">
            <img src="/favicon.png" alt="" />
            <p>Chrome</p>
          </div>

          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="me-auto" style={{ fontWeight: '600', display: 'flex', gap: '10px', marginLeft: '50px' }}>
              <Nav.Link href="#home" style={{ borderBottom: '2px solid blue' }}>Home</Nav.Link>
              <Nav.Link href="#link">The Browser by Google</Nav.Link>
              <NavDropdown title="Features" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Overview</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Google address bar</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Password check</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Use across devices</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Dark mode</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Tabs</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Articles for you</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Extensions</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Support" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Helpful tips for Chrome</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Support</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbarr
