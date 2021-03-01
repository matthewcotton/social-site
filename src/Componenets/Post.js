import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import ProfilePic from "./ProfilePic";
import hoof from "../resources/noun_hoof_3071279.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/App.css";

const Post = ({ currentPost, client, refreshPosts }) => {
  const likeHandler = async (id) => {
    await client.addLike(id);
    refreshPosts();
  };

  // Reevaluate if these are needed after "add post" uses api client
  const usernameCheck = (username) => {
    if (username === "") {
      return "Anonymous";
    } else {
      return username;
    }
  };

  // Reevaluate if these are needed after "add post" uses api client
  const textCheck = (text) => {
    if (text === "") {
      return "Hey, you didn't eneter any text in this post but I decided to post it anyway.";
    } else {
      return text;
    }
  };

  return (
    <Card className="post">
      <Card.Body>
        <Row>
          <Col md={3} xs={6}>
            <ProfilePic userId={currentPost.id} />
          </Col>
          <Col md={9}>
            <h4>{currentPost.postTitle}</h4>
            <p>{textCheck(currentPost.postText)}</p>
          </Col>
        </Row>
        <Row>
          <Col lg={3} md={4} xs={12}>
            <h4>{usernameCheck(currentPost.username)}</h4>
          </Col>
          <Col lg={3} xs={12}>
            <Button
              className="like"
              variant="warning"
              id={currentPost._id}
              onClick={(e) => likeHandler(e.currentTarget.id)}
            >
              <img className="like-hoof" src={hoof} alt="Hoofs Up!" />{" "}
              {currentPost.likes}{" "}
            </Button>
          </Col>
          <Col lg={3} xs={12}>
            <p>{currentPost.timestamp}</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Post;
