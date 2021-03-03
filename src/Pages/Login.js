import React from "react";
import { Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { LoginForm } from "../Componenets";

export const Login = ({ client, storeUserToken, token }) => {
  return token ? (
    <Redirect to="/" />
  ) : (
    <div>
      <Row className="justify-content-center">
        <Col>
          <br />
          <h1 className="text-center">Login</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <LoginForm client={client} storeUserToken={storeUserToken} />
        </Col>
      </Row>
    </div>
  );
};
