import Menu from "../../components/Menu";
import Sidebarr from "../../components/sidebar2/sidebar";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Alert, Col, Row, Container } from "react-bootstrap";
import ListGoal from "../../components/goal/listgoal/listGoal";
import "./viewIngoal.css";
function Viewgoal() {
  return (
    <div className="goal">
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
          <Col sm={10}>
            {/* Muốn thêm thành phần gì thì bỏ vào đây */}
            <ListGoal />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Viewgoal;
