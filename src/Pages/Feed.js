import { useState, useEffect } from "react";
import { Post, NoPosts } from "../Componenets";
import { Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/App.css";

export const Feed = ({ client }) => {
  const [posts, setPosts] = useState([]);

  const refreshPosts = async () => {
    const postsFromServer = await client.getAllPosts();
    setPosts(postsFromServer.data);
  };

  const deletePost = (id) => {
    client.deletePost(id).then(() => refreshPosts());
  };

  useEffect(() => {
    refreshPosts();
  }, []);

  const buildPostCards = () => {
    if (posts.length === 0) {
      return <NoPosts />;
    } else {
      return posts.map((currentPost) => (
        <Row className="justify-content-md-center" key={currentPost._id}>
          <Post key={currentPost._id} currentPost={currentPost} />
        </Row>
      ));
    }
  };

  return <div>{buildPostCards()}</div>;
};
