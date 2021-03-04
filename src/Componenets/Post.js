import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import ProfilePic from "./ProfilePic";
import hoof from "../resources/noun_hoof_3071279.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Post.css";

const Post = ({ currentPost, client, refreshPosts }) => {
  const likeHandler = async (id) => {
    await client.addLike(id);
    refreshPosts();
  };

  const dateTimeOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const dateTime = new Intl.DateTimeFormat("en-GB", dateTimeOptions).format(
    currentPost.timestamp
  );

  return (
    <Card className="post">
      <Card.Body>
        <Row>
          <Col md={3} xs={6}>
            <ProfilePic userId={currentPost.id} />
          </Col>
          <Col md={9}>
            <h4 className="post-title">{currentPost.postTitle}</h4>
            <p>{currentPost.postText}</p>
          </Col>
        </Row>
        <Row>
          <Col lg={3} md={4} xs={12}>
            <h4>{currentPost.username}</h4>
          </Col>
          <Col lg={3} xs={12}>
            <Button
              className="like-btn"
              variant="warning"
              id={currentPost._id}
              onClick={(e) => likeHandler(e.currentTarget.id)}
            >
              <img className="like-hoof" src={hoof} alt="Hoofs Up!" />{" "}
              {currentPost.likes}{" "}
            </Button>
          </Col>
          <Col className="text-right">
            <p>{dateTime}</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Post;
