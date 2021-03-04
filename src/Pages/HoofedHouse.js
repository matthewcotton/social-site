import React from "react";
import { ToTopButton, RandomDeerPhoto } from "../Componenets";
import { Row, Col } from "react-bootstrap";

export const HoofedHouse = ({ client }) => {
  return (
    <div>
      <Row className="justify-content-center">
        <Col>
          <br />
          <h1 className="text-center">Hoofed House</h1>
          <br />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} lg={8} className="text-center">
          <RandomDeerPhoto
            client={client}
            buttonText="Who's in the House"
            preLoadText="Do you want to see a hoofed ruminant mammal?"
          />
        </Col>
      </Row>
      <ToTopButton currentPage="/house" />
    </div>
  );
};
