import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <>
    <Navbar className=" d-none d-lg-flex bg-body-primary">
    <Container>
      <Navbar.Brand href="#home"><img src="images/header/solarLogo.svg" alt="headerLogo"/>
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end me-auto " id="basic-navbar-nav">
      <Nav className="flex justify-between items-center">
        <div className='mx-3'>
          <Navbar.Brand href="#home"><img src="images/header/call.svg" alt="headerLogo"/>
          </Navbar.Brand>
          <Navbar.Text>
            0203 519 4420
            </Navbar.Text>
            </div>
          <div className='mx-3'>
          <Navbar.Brand href="#home"><img src="images/header/mail.svg" alt="headerLogo"/>
          </Navbar.Brand>
          <Navbar.Text>
          info@solarinnovatio.com
            </Navbar.Text>
            </div>
            <div>
            <Button variant="success"className="custom-button">Contact Us</Button>{' '}
            </div>
        </Nav>
      </Navbar.Collapse>
     
    </Container>
  </Navbar>

  <Navbar bg="body-primary d-lg-none" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src="images/header/solarLogo.svg" alt="headerLogo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-column">
            <div className="mx-3 mb-2">
              <Navbar.Brand href="#home">
                <img src="images/header/call.svg" alt="headerLogo" />
              </Navbar.Brand>
              <Navbar.Text>0203 519 4420</Navbar.Text>
            </div>
            <div className="mx-3 mb-2">
              <Navbar.Brand href="#home">
                <img src="images/header/mail.svg" alt="headerLogo" />
              </Navbar.Brand>
              <Navbar.Text>info@solarinnovation.com</Navbar.Text>
            </div>
            <div className="mx-3">
              <Button variant="success" className="custom-button">
                Contact Us
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  <hr className="header-separator" />
  <Navbar expand="lg" className="d-lg-none">
      <Container>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav"  className="order-0"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <a href="#home" data-rr-ui-event-key="#home" className="text-center nav-link">Home</a>
            <a href="#link" data-rr-ui-event-key="#link" className="text-center nav-link">Chi Siamo</a>
            <a href="#link" data-rr-ui-event-key="#link" className="text-center nav-link">S.I.R.E</a>
            <a href="#home" data-rr-ui-event-key="#home" className="text-center nav-link">SIRE Features</a>
            <a href="#link" data-rr-ui-event-key="#link" className="text-center nav-link">Why SIRE?</a>
            <a href="#link" data-rr-ui-event-key="#link" className="text-center nav-link">SIRE Product</a>
            <a href="#link" data-rr-ui-event-key="#link" className="text-center nav-link">How it Works</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  <div class="container ">
  <div class="d-lg-flex d-none  justify-content-between navbar">
    <a href="#home" data-rr-ui-event-key="#home" class=" text-center nav-link">Home</a>
    <a href="#link" data-rr-ui-event-key="#link" class=" text-center nav-link">Chi Siamo</a>
    <a href="#link" data-rr-ui-event-key="#link" class=" text-center nav-link">S.I.R.E</a>
    <a href="#home" data-rr-ui-event-key="#home" class=" text-center nav-link">SIRE Features</a>
    <a href="#link" data-rr-ui-event-key="#link" class=" text-center nav-link">Why SIRE?</a>
    <a href="#link" data-rr-ui-event-key="#link" class=" text-center nav-link">SIRE Product</a>
    <a href="#link" data-rr-ui-event-key="#link" class=" text-center nav-link">How it Works</a>
  </div>
</div>

  </>
  )
}

export default Header