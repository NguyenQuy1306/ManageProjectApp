import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import "./Menu.css";



const Menu = (props) => {
  return (
    <div className="Menu_css">
     <Navbar collapseOnSelect expand="lg" bg="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">Dank memes</Nav.Link>
              
              
              <Dropdown as={ButtonGroup}>
      <Button variant="success">
        <img 
          src = "./avatar.jpg">
          
        </img>
      </Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>  

     
      

    </div>
  );
};

export default Menu;
