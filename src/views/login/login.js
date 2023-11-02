import React from "react";
import Menu from "../../components/login/Menu";
import LeftSide from "../../components/login/LeftSide";
import RightSide from "../../components/login/RightSide";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Alert, Col, Row, Container } from "react-bootstrap";

function Login() {
  return (
    <div className="App">
      <Menu />
      <Container>
        <Row>
          <Col>
            <LeftSide></LeftSide>
          </Col>
          <Col className="d-none d-sm-block">
            <RightSide />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
