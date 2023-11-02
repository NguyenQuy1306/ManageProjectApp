import Calendarr from "../../components/calendar/calendar";
import Menu from "../../components/login/Menu";
import Sidebar from "../../components/sidebar/sidebar";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Alert, Col, Row, Container } from "react-bootstrap";
import "./homepage.css";
function Homepage() {
  return (
    <div className="homepage">
      <div>
        <Menu className="menu" />
      </div>
      <Container fluid>
        <Row>
          <Col>
            <Sidebar className="sidebar" />
          </Col>
          <Col sm={10}>
            <Calendarr />
            <Calendarr />
            {/* Muốn thêm thành phần gì thì bỏ vào đây */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Homepage;
