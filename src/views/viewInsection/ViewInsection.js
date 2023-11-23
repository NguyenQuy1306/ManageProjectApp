import Menu from "../../components/Menu";
import Sidebarr from "../../components/sidebar2/sidebar";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Alert, Col, Row, Container } from "react-bootstrap";
import "./ViewInsection.css";
import Kanban from "../../components/kanban";
import Mynavbar from "../../components/NavBar";
function Viewsection() {
  return (
    <div className="section">
      <div>
        <Mynavbar className="menu" />
        {/* <div className="searchbar">
          <SearchBar></SearchBar>
        </div> */}
      </div>
      <Container fluid>
        <Row>
          <Col>
            <Sidebarr className="sidebar" />
          </Col>
          <Col sm={10}>
            <Kanban />
            {/* Muốn thêm thành phần gì thì bỏ vào đây */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Viewsection;
