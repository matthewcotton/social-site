import React from "react";
import { Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { LoginForm } from "../Componenets";

export const Login = ({ client, storeUserToken, loggedIn }) => {
  return loggedIn ? (
    <Redirect to="/" />
  ) : (
    <div>
      <Row className="justify-content-center">
        <Col>
          <br />
          <h1 className="text-center">Login</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={10} md={6} lg={4}>
          <LoginForm client={client} storeUserToken={storeUserToken} />
        </Col>
      </Row>
    </div>
  );
};
