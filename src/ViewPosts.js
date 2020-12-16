import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import "./App.css";
import Post from "./Post";
import NoPosts from "./NoPosts";

class ViewPosts extends React.Component {
  buildPostCards() {
    if (this.props.postList.length === 0) {
      return (
        <NoPosts />
      );
    } else {
      return this.props.postList.map((currentPost) => (
        <Post currentPost={currentPost} addLike={this.props.addLike} />
      ));
    }
  }

  render() {
    return <Row className="postList">{this.buildPostCards()}</Row>;
  }
}

export default ViewPosts;
