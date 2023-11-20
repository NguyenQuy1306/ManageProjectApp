import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import ShowToast from "./ShowToast";
/**
 * @author
 * @function
 **/

const LeftSide = (props) => {
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Assuming successful login, navigate to the user page
    navigate("/Overview");
  };
  return (
    <div>
      <br />
      <br />
      <br />
      <Form style={{ width: "80%", marginLeft: "10%", marginTop: "20%" }}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleLogin();
            setShowToast(true);
          }}
        >
          Submit
        </Button>
        <ShowToast
          showToast={showToast}
          setShowToast={setShowToast}
          shortTitle="11 min ago "
          message="Failed to Login. Please check again."
        />
      </Form>
    </div>
  );
};

export default LeftSide;
