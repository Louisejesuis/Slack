import React from "react";
import {
  Container,
  Col,
  Row,
  ListGroup,
  ListGroupItem,
  Badge
} from "reactstrap";
import "./App.css";

function App() {
  return (
    <Container>
      <Row>
        <Col sm="2">
          <ListGroup>
            <ListGroupItem className="justify-content-between">
              Cras justo odio <Badge pill>14</Badge>
            </ListGroupItem>
            <ListGroupItem className="justify-content-between">
              Dapibus ac facilisis in <Badge pill>2</Badge>
            </ListGroupItem>
            <ListGroupItem className="justify-content-between">
              Morbi leo risus <Badge pill>1</Badge>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col sm="10"></Col>
      </Row>
    </Container>
  );
}

export default App;
