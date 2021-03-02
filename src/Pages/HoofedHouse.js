import React from "react";
import { ToTopButton, RandomDeerPhoto } from "../Componenets";
import { Row, Col } from "react-bootstrap";

export const HoofedHouse = ({ client }) => {
  return (
    <div>
      <Row className="justify-content-center">
        <Col>
          <br />
          <h1 className="text-center">Deer Feed</h1>
          <br />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-center">
          <RandomDeerPhoto client={client} />
        </Col>
      </Row>
      <ToTopButton currentPage="/house" />
    </div>
  );
};
