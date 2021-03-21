import { useState, useEffect, useCallback, useContext } from "react";
import {
  BuildPostCards,
  ToTopButton,
  RefreshButton,
  MoreButton,
} from "../Componenets";
import { ClientContext } from "../Context";
import { Row, Col } from "react-bootstrap";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [postsPosition, setPostsPosition] = useState({ limit: 10, skip: 0 });
  const { client } = useContext(ClientContext);

  const refreshPosts = useCallback(async () => {
    const postsFromServer = await client.getAllPosts(
      postsPosition.limit,
      postsPosition.skip
    );
    if (postsFromServer.length > 0) {
      setPosts(postsFromServer);
    } else {
      toastr.warning("No more barks available");
    }
  }, [client, postsPosition.skip, postsPosition.limit]);

  const incrementPostsPosition = useCallback(() => {
    setPostsPosition({
      ...postsPosition,
      skip: postsPosition.skip + postsPosition.limit,
    });
  }, [postsPosition]);

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
        editable={false}
      />
      <Row className="justify-content-center">
        <Col className="text-center">
          <MoreButton incrementPostsPosition={incrementPostsPosition} />
        </Col>
      </Row>
      <ToTopButton currentPage="" />
    </div>
  );
};
