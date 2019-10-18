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
import iconPlus from "./images/plus.png";

function App() {
  return (
    <Container style={{ maxWidth: "none" }}>
      <Row>
        <Col sm="2">
          <ListGroup style={{ color: "#ffffff", fontWeight: "bold" }}>
            <ListGroupItem
              className="justify-content-between"
              style={{
                backgroundColor: "#480042",
                borderStyle: "hidden"
              }}
            >
              Chaînes
              <img src={iconPlus} alt="plus" style={{ float: "right" }} />
            </ListGroupItem>
            <ListGroupItem
              className="justify-content-between"
              style={{ backgroundColor: "#480042", borderStyle: "hidden" }}
            >
              # corrections{" "}
              <Badge pill style={{ backgroundColor: "#DC004F" }}>
                14
              </Badge>
            </ListGroupItem>
            <ListGroupItem
              className="justify-content-between"
              style={{ backgroundColor: "#480042", borderStyle: "hidden" }}
            >
              # events{" "}
              <Badge pill style={{ backgroundColor: "#DC004F" }}>
                14
              </Badge>
            </ListGroupItem>
            <ListGroupItem
              className="justify-content-between"
              style={{ backgroundColor: "#480042", borderStyle: "hidden" }}
            >
              # general{" "}
              <Badge pill style={{ backgroundColor: "#DC004F" }}>
                2
              </Badge>
            </ListGroupItem>
            <ListGroupItem
              className="justify-content-between"
              style={{ backgroundColor: "#480042", borderStyle: "hidden" }}
            >
              # paris_alternance{" "}
              <Badge pill style={{ backgroundColor: "#DC004F" }}>
                1
              </Badge>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col sm="10"></Col>
      </Row>
    </Container>
  );
}

export default App;
