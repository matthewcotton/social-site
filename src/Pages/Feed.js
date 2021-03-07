import { useState, useEffect, useCallback, useContext } from "react";
import { BuildPostCards, ToTopButton, RefreshButton } from "../Componenets";
import { ClientContext } from "../Context";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Feed = () => {
  const [posts, setPosts] = useState([]);
  const { client } = useContext(ClientContext)

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
        <Col className="text-center" xs={8} lg={4}>
          <RefreshButton refreshPosts={refreshPosts} />
        </Col>
      </Row>
      <BuildPostCards
        client={client}
        posts={posts}
        refreshPosts={refreshPosts}
      />
      <ToTopButton currentPage="" />
    </div>
  );
};
