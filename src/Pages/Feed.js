import { useState, useEffect, useCallback } from "react";
import { BuildPostCards, ToTopButton, RefreshButton } from "../Componenets";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Feed = ({ client }) => {
  const [posts, setPosts] = useState([]);

  const refreshPosts = useCallback(async () => {
    const postsFromServer = await client.getAllPosts();
    setPosts(postsFromServer);
  }, [client]);

  useEffect(() => {
    refreshPosts();
  }, [refreshPosts]);

  return (
    <div>
      <Row className="justify-content-center">
        <Col>
          <br />
          <h1 className="text-center">Deer Feed</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-center" xs={6} lg={3}>
          <RefreshButton refreshPosts={refreshPosts} />
        </Col>
      </Row>
      <BuildPostCards
        client={client}
        posts={posts}
        refreshPosts={refreshPosts}
      />
      <ToTopButton />
    </div>
  );
};
