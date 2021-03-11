import React from "react";
import { Post, NoPosts } from "../Componenets";
import { Row } from "react-bootstrap";

const BuildPostCards = ({ refreshPosts, posts, editable }) => {
  return (
    <div>
      {posts.length === 0 ? (
        <NoPosts />
      ) : (
        posts.map((currentPost) => (
          <Row className="justify-content-md-center" key={currentPost._id}>
            <Post
              key={currentPost._id}
              currentPost={currentPost}
              refreshPosts={refreshPosts}
              editable={editable}
            />
          </Row>
        ))
      )}
    </div>
  );
};

export default BuildPostCards;
