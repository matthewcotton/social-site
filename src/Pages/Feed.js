import { useState, useEffect, useCallback } from "react";
import { Post, NoPosts } from "../Componenets";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/App.css";

export const Feed = ({ client }) => {
  const [posts, setPosts] = useState([]);

  const refreshPosts = useCallback(async () => {
    const postsFromServer = await client.getAllPosts();
    setPosts(postsFromServer);
  }, [client]);

  useEffect(() => {
    refreshPosts();
  }, [refreshPosts]);

  const buildPostCards = () => {
    if (posts.length === 0) {
      return <NoPosts />;
    } else {
      return posts.map((currentPost) => (
        <Row className="justify-content-md-center" key={currentPost._id}>
          <Post
            key={currentPost._id}
            currentPost={currentPost}
            client={client}
            refreshPosts={refreshPosts}
          />
        </Row>
      ));
    }
  };

  return (
    <div>
      <Row className="justify-content-md-center">
        <Col>
          <br />
          <h1 className="text-center">Deer Feed</h1>
          {/* Add a refresh button */}
        </Col>
      </Row>
      {buildPostCards()}
      {/* Add a back to top button */}
    </div>
  );
};
