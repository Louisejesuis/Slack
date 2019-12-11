import React, { useState, useEffect } from "react";
import {
  Container,
  Col,
  Row,
  ListGroup,
  ListGroupItem,
  Badge,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from "reactstrap";
import "./App.css";
import iconPlus from "./images/plus.png";

const Home = () => {
  const chans = [
    "# corrections",
    "# events",
    "# general",
    " # paris_alternance",
    " # tutu"
  ];

  const toggle = () => setModal(!modal);
  const [modal, setModal] = useState(false);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/express_backend/");
      const { channels } = await response.json();
      setChannels(channels);
    };
    fetchData();
    console.log(channels);
  }, []);

  return (
    <Container style={{ maxWidth: "none" }}>
      <Row>
        <Col xs="4" md="4">
          <ListGroup style={{ color: "#ffffff", fontWeight: "bold" }}>
            <ListGroupItem
              className="justify-content-between"
              style={{
                backgroundColor: "#480042",
                borderStyle: "hidden"
              }}
            >
              Chaînes
              <img
                src={iconPlus}
                alt="plus"
                style={{ float: "right" }}
                onClick={toggle}
              />
              <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Créer une chaîne</ModalHeader>
                <ModalBody>
                  Les chaînes permettent à vos membres de communiquer. Leur
                  efficacité est maximale lorsqu’elles sont organisées autour
                  d’un thème (#proj-budget, par exemple).
                  <br />
                  <br />
                  <b>Nom </b>
                  <span style={{ color: "#E8912D" }}>
                    N'oubliez pas de donner un nom à votre chaîne
                  </span>
                  <InputGroup>
                    <Input placeholder="# par exemple, plan-budget" />
                  </InputGroup>
                  <br />
                  <br />
                  <b>Description (facultatif) </b>
                  <InputGroup>
                    <Input />
                  </InputGroup>
                  <span style={{ color: "#8D8C8D", fontSize: "11px" }}>
                    Quel est l'objectif de cette chaîne ?
                  </span>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={toggle}>
                    Créer
                  </Button>
                </ModalFooter>
              </Modal>
            </ListGroupItem>
            {chans.map(chan => (
              <ListGroupItem
                className="justify-content-between"
                style={{ backgroundColor: "#480042", borderStyle: "hidden" }}
              >
                {chan}
                <Badge
                  pill
                  style={{ backgroundColor: "#DC004F", float: "right" }}
                >
                  {" "}
                  14
                </Badge>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
        <Col xs="8" md="8">
          <Row>
            <InputGroup>
              <Input placeholder="chat" style={{ height: "198px" }} />
            </InputGroup>
          </Row>
          <Row>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>@</InputGroupText>
              </InputGroupAddon>
              <Input placeholder="username" />
            </InputGroup>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
