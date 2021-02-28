import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import ProfilePic from "./ProfilePic";
import hoof from "../resources/noun_hoof_3071279.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/App.css";

class Post extends React.Component {
  // UPDATE LIKE HANDLER
  clickHandler(id) {
    this.props.addLike(id);
  }

  usernameCheck(username) {
    if (username === "") {
      return "Anonymous";
    } else {
      return username;
    }
  }

  textCheck(text) {
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
          <Row>
            <Col md={3} xs={6}>
              <ProfilePic userId={this.props.currentPost.id} />
            </Col>
            <Col md={9}>
              <h4>{this.props.currentPost.postTitle}</h4>
              <p>{this.textCheck(this.props.currentPost.postText)}</p>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={4} xs={12}>
              <h4>{this.usernameCheck(this.props.currentPost.username)}</h4>
            </Col>
            <Col lg={3} xs={12}>
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
            <Col lg={3} xs={12}>
              <p>{this.props.currentPost.timestamp}</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default Post;
