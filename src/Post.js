import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./App.css";
import ProfilePic from "./ProfilePic";
import hoof from "./resources/noun_hoof_3071279.png";

class Post extends React.Component {
  clickHandler(id) {
    this.props.addLike(id);
  }

  unknownUsername(username) {
    if (username === "") {
      return "Anonymous";
    } else {
      return username;
    }
  }

  noText(text) {
    if (text === "") {
      return "Hey, you didn't eneter any text in this post but I decided to post it anyway.";
    } else {
      return text;
    }
  }

  render() {
    return (
      <Card className="post">
        <Card.Body>
          <Container>
            <Row>
              <Col md={3} xs={5}>
                <ProfilePic userId={this.props.currentPost.id} />
              </Col>
              <Col md={9} xs={7}>
                <p> {this.noText(this.props.currentPost.text)} </p>
              </Col>
            </Row>
            <Row>
              <Col lg={3} md={4} xs={7}>
                <h3>
                  {" "}
                  {this.unknownUsername(this.props.currentPost.username)}{" "}
                </h3>
              </Col>
              <Col lg={3} md={3} xs={5}>
                <Button
                  className="like"
                  variant="warning"
                  id={this.props.currentPost.id}
                  onClick={(event) => this.clickHandler(event.currentTarget.id)}
                >
                  <img className="like-hoof" src={hoof} alt="Hoofs Up!" />{" "}
                  {this.props.currentPost.likes}{" "}
                </Button>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    );
  }
}

export default Post;
