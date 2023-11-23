import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import "./Menu.css";
/**
 * @author
 * @function
 **/

const Menu = (props) => {
  return (
    <div className="Menu_css">
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Container>
          <Navbar.Brand href="#home">Menu</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>

            <Dropdown className="my_dropdownlist123">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Choose weight
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                <Dropdown.Item href="#/action-3">4</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
