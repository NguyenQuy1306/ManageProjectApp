import React from "react";
import { Image, Button, NavDropdown, Container } from "react-bootstrap";

/**
 * @author
 * @function RightSide
 **/

const RightSide = (props) => {
  return (
    <div style={{ border: "none", marginTop: "30%" }}>
      <Image
        className="my_image"
        src={require("../../assets/images/porsche_test.jpg")}
        thumbnail
        style={{ border: "none" }}
      />
    </div>
  );
};

export default RightSide;
