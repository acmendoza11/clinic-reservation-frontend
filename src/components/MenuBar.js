import * as React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/MenuBar.css'

function MenuBar(){

  return (
    <Navbar collapseOnSelect variant='light' className='color-navbar' expand="lg">
    <Container>
      <Navbar.Brand href="/clinic-reservation">Clinic Reservation</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto ">
          <Nav.Link href="/clinic-reservation">Reservation</Nav.Link>
          <Nav.Link href="/doctors">Doctors</Nav.Link>
          <Nav.Link href="/about-us">About Us</Nav.Link>
        </Nav>
        
            <Button className="d-flex custom-button" >Login</Button>
        
      </Navbar.Collapse>
      
        
    </Container>
  </Navbar>
  
 
  );
};
export default MenuBar;
