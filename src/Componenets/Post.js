import React, { useContext } from "react";
import { ClientContext } from "../Context";
import { Link } from "react-router-dom";
import { Card, Row, Col, Button, Image } from "react-bootstrap";
import hoof from "../resources/noun_hoof_3071279.png";
import "../Styles/Post.css";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
const querystring = require("querystring");

const Post = ({ currentPost, refreshPosts, editable }) => {
  const { client } = useContext(ClientContext);

  const likeHandler = async (id) => {
    await client.addLike(id);
    refreshPosts();
  };

  const deleteHandler = async (e) => {
    e.preventDefault();
    await client
      .deletePost(e.currentTarget.id)
      .then(() => {
        toastr.success("Your bark was successfully deleted", "GONE!");
        refreshPosts();
      })
      .catch((error) => {
        toastr.error(error, "Delete Error");
      });
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

  let queryString = querystring.encode(currentPost);

  // var queryString = Object.keys(currentPost).map(key => key + '=' + currentPost[key]).join('&');

  return (
    <Card className="post">
      <Card.Body className="post-body">
        <Row>
          <Col className="post-col" md={3} xs={5}>
            <Image className="profile-pic" src={currentPost.imageData.url} />
            <a
              target="_blank"
              rel="noreferrer"
              href={currentPost.imageData.creatorLink}
            >
              {currentPost.imageData.creatorUsername}
            </a>
          </Col>
          <Col className="post-col" xs={7} md={8}>
            <h4 className="post-title">{currentPost.postTitle}</h4>
            <p className="post-text">{currentPost.postText}</p>
          </Col>
          {editable && (
            <Col className="post-col text-right">
              <Button className="edit-btn" variant="warning">
                <Link className="edit-link" to={`/editbark?${queryString}`}>
                  Edit
                </Link>
              </Button>
              <Button
                className="edit-btn"
                variant="warning"
                id={currentPost._id}
                onClick={(e) => deleteHandler(e)}
              >
                Delete
              </Button>
            </Col>
          )}
        </Row>
        <Row>
          <Col className="post-col" lg={3} md={4} xs={12}>
            <h4>{currentPost.username}</h4>
          </Col>
          <Col className="post-col" lg={3} xs={12}>
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
          <Col className="post-col align-self-end text-right">
            <p>{dateTime}</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Post;
