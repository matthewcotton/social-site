import React, { useContext } from "react";
import { UserContext } from "../Context";
import { Row, Col } from "react-bootstrap";
import { Redirect, useLocation } from "react-router-dom";
import { LoginForm } from "../Componenets";

// Split out into a service function
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const Login = ({ storeUserToken }) => {
  const { user } = useContext(UserContext);
  const query = useQuery();
  let route = query.get("route");
  route = route ? route : "";

  return user ? (
    <Redirect to={`/${route}`} />
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
          <LoginForm storeUserToken={storeUserToken} />
        </Col>
      </Row>
    </div>
  );
};
