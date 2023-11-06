import Menu from "../../components/Menu";
import Sidebarr from "../../components/sidebar2/sidebar";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Alert, Col, Row, Container } from "react-bootstrap";
import SearchBar from "../../components/searchbar";
import "./ViewInproject.css";
function Viewproject() {
  return (
    <div className="section">
      <div>
        <Menu className="menu" />
        {/* <div className="searchbar">
          <SearchBar></SearchBar>
        </div> */}
      </div>
      <Container fluid>
        <Row>
          <Col>
            <Sidebarr className="sidebar" />
          </Col>
          <Col sm={10}>{/* Muốn thêm thành phần gì thì bỏ vào đây */}</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Viewproject;
