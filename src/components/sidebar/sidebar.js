import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { NavDropdown } from "react-bootstrap";

import "./sidebar.css";
import BrandApp from "./logo";

const Sidebar = () => {
  const [showButton, setShowButton] = useState(false);

  const handleDropdownClick = () => {
    setShowButton(true);
  };

  return (
    <div className="sidebar">
      <BrandApp />
      <Link className="home" to="/home">
        <FiHome className="icon_home" /> Overview
      </Link>
      <Link to="/about">
        {" "}
        <FiHome className="icon_home" />
        Goal
      </Link>
      <NavDropdown
        title={
          <span>
            <FiHome className="icon_home" /> Dropdown
          </span>
        }
        id="collasible-nav-dropdown"
        className="dropdowlist"
        onClick={handleDropdownClick}
      >
        <div className="List">
          <NavDropdown.Item className="List1" href="#action/3.1">
            Action
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </div>
      </NavDropdown>
      {showButton && (
        <Link to="/contract">
          {" "}
          <FiHome className="icon_home" />
          Contract
        </Link>
      )}
      <Link to="/contact">
        {" "}
        <FiHome className="icon_home" />
        Contact
      </Link>
    </div>
  );
};

export default Sidebar;
