import React from "react";
import { HashLink } from "react-router-hash-link";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import "../Styles/ToTopButton.css";

const ToTopButton = () => {
  return (
    <Row className="justify-content-end">
      <Col className="top-btn-col text-right" xs={3} lg={1}>
        <HashLink smooth to="/#top">
          <FontAwesomeIcon
            className="arrow-up"
            icon={faArrowAltCircleUp}
            size="4x"
          />
        </HashLink>
      </Col>
    </Row>
  );
};

export default ToTopButton;
