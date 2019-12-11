import React from "react";
import { Form, FormGroup, Label, Button, Input } from "reactstrap";

const Login = () => {
  return (
    <div>
      <Form
        style={{
          width: "50%",
          margin: "auto",
          marginTop: "50vh",
          transform: "translateY(-80%)"
        }}
      >
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
          />
        </FormGroup>
        <Button>Login</Button>
      </Form>
    </div>
  );
};

export default Login;
