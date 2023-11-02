import React from "react";
import { Image } from "react-bootstrap";
import "./logo.css";

const BrandApp = () => {
  return (
    <div className="brand-app">
      <Image
        className="my_image"
        src={require("../../assets/images/pro_task_logo.jpg")}
        style={{ border: "none", width: 30, left: 0 }}
      />
      <span className="my_title">ProTask</span>
    </div>
  );
};

export default BrandApp;
