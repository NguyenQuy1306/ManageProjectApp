import React from "react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./sidebar.css";
import BrandApp from "./logo";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <BrandApp />
      <Link className="home" to="/home">
        <FiHome className="icon_home" /> Home
      </Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Sidebar;
