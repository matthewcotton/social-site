import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

export const LoginForm = ({ client, storeUserToken }) => {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  toastr.options = {
    closeButton: "true",
    positionClass: "toast-top-center",
    newestOnTop: "true",
    timeOut: "3000",
  };
  toastr.clear();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!loginForm.username || !loginForm.password) {
      toastr.error(
        "Please enter username and password.",
        "Username or Password Error"
      );
      return;
    }
    client
      .login(loginForm.username, loginForm.password)
      .then((res) => {
        storeUserToken(res.data.token);
      })
      .catch(() => {
        toastr.error(
          "An error occured while logging in. Please try again.",
          "Login Error"
        );
      });
  };

  return (
    <div>
      <br />
      <Form onSubmit={(e) => submitHandler(e)}>
        <Form.Group controlId="loginUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            type="text"
            value={loginForm.username}
            placeholder="enter your username"
            onChange={(e) =>
              setLoginForm({ ...loginForm, username: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="loginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            value={loginForm.password}
            placeholder="enter your password"
            onChange={(e) =>
              setLoginForm({ ...loginForm, password: e.target.value })
            }
          />
          <br />
          <Button variant="warning" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};