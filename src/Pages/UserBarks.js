import { useState, useEffect, useCallback, useContext } from "react";
import { BuildPostCards, ToTopButton, MoreButton } from "../Componenets";
import { ClientContext, UserContext } from "../Context";
import { Row, Col } from "react-bootstrap";
import toastr from "toastr";
import { toastrSettings } from "../Settings";
import "toastr/build/toastr.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const UserBarks = () => {
  const [posts, setPosts] = useState([]);
  const [postsPosition, setPostsPosition] = useState({ limit: 10, skip: 0 });
  const { user } = useContext(UserContext);
  const { client } = useContext(ClientContext);
  toastr.options = toastrSettings;

  const refreshPosts = useCallback(async () => {
    const postsFromServer = await client.getOneUsersPosts(
      user.username,
      postsPosition.limit,
      postsPosition.skip
    );
    if (postsFromServer.length > 0) {
      setPosts(postsFromServer);
    } else {
      toastr.warning("No more barks available");
    }
  }, [client, postsPosition, user]);

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
          <h1 className="text-center">Your Barks</h1>
        </Col>
      </Row>
      <BuildPostCards
        client={client}
        posts={posts}
        refreshPosts={refreshPosts}
        editable={true}
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
