import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Link from "react-router-dom/Link";
import "./App.css";

class NoPosts extends React.Component {
  render() {
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
  }
}

export default NoPosts;
