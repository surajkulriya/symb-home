import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
// import Button from 'react-bootstrap/Button';
import { MDBBtn } from "mdbreact";

export default function Header() {
  return (
    <Navbar bg="white" expand="lg">
  <Navbar.Brand href="#home"><img src="/headerimg.jpg" style={{ width: "70%", height: "auto",paddingLeft:"4%" }} alt="master"></img></Navbar.Brand>
  {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
  <Navbar.Collapse id="basic-navbar-nav">
    
    <div class="nav navbar-nav navbar-right pull-right">
    <Nav className="mr-sm-2" style={{float:"right"}}>
      <Nav.Link href="aboutsymb" class="pull-right" style={{color:"black",fontSize:"90%",fontWeight:"bold",padding:"2% 2%",float:"right"}}>Who are we?</Nav.Link>
      <Nav.Link href="services_main_page" style={{color:"black",fontSize:"90%",fontWeight:"bold"}}>What do we do?</Nav.Link>
      <Nav.Link href="#link" style={{color:"black",fontSize:"90%",fontWeight:"bold"}}>How do we do it?</Nav.Link>
      <Nav.Link href="#link" style={{color:"black",fontSize:"90%",fontWeight:"bold"}}>Why us?</Nav.Link>
      <Nav.Link href="#link" class="pull-right" style={{color:"black",fontSize:"80%",fontWeight:"bold"}}><MDBBtn color="primary" rounded>Work with us</MDBBtn></Nav.Link>
    </Nav>
    </div>
    
  </Navbar.Collapse>
</Navbar>

  )
}