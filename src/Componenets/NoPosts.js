import React from "react";
import { Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/App.css";

const NoPosts = () => {
  return (
    <Card className="no-posts">
      <Card.Body>
        <Row>
          <h3>No Posts</h3>
        </Row>
        <Row>
          <p>
            Go to the <Link to="/add">Add Post</Link> Page to create a post or
            two.
          </p>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default NoPosts;
