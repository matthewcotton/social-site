import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/NoPosts.css";

const NoPosts = () => {
  return (
    <Card className="no-posts">
      <Card.Body>
        <Row className="justify-content-center">
          <Col>
            <h3>No Posts</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Go to the <Link to="/add">Add Post</Link> Page to create a post or
              two.
            </p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default NoPosts;
