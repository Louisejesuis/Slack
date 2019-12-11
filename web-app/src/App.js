import React from "react";
import { Container } from "reactstrap";
import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import { Route, Switch } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";

const App = () => {
  return (
    <div>
      <NavBar />
      <Container style={{ maxWidth: "none" }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
        </Switch>
      </Container>
    </div>
  );
};

export default App;
