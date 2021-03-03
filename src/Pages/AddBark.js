import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

/* Look at splitting this out into a page and a form componenet */

export const AddBark = ({ client }) => {
  const [bark, setBark] = useState({
    username: "",
    postTitle: "",
    postText: "",
    imageUrl: "",
    tags: "",
  });

  toastr.options = {
    closeButton: "true",
    positionClass: "toast-top-center",
    newestOnTop: "true",
    timeOut: "3000",
  };
  toastr.clear();

  const checkUsername = (username) => {
    return username.length > 15 ? false : true;
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!checkUsername(bark.username)) {
      /* ADD BETTER ERROR MESSAGES */
      toastr.error(
        "Username is too long. It must be 15 characters or less.",
        "Username Error"
      );
      return;
    }
    await client.addPost(bark).catch((error) => {
      if (!error) {
        setBark({
          username: "",
          postTitle: "",
          postText: "",
          imageUrl: "",
          tags: "",
        });
        toastr.success(
          "Buck up! Your post was successfully published.",
          "Published posted"
        );
        return;
      } else {
        toastr.error(error, "Error");
      }
    });
  };

  return (
    <div>
      <br />
      {/* MAKE USERNAME AUTO POPULATED */}
      <Form onSubmit={(e) => submitHandler(e)}>
        <Form.Group controlId="postUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            type="text"
            value={bark.username}
            placeholder="enter username (max 20 characters)"
            onChange={(e) => setBark({ ...bark, username: e.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="postTitle">
          <Form.Label>Post Title</Form.Label>
          <Form.Control
            name="postTitle"
            type="text"
            value={bark.postTitle}
            placeholder="add post title"
            onChange={(e) => setBark({ ...bark, postTitle: e.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="postText">
          <Form.Label>Post Text</Form.Label>
          <Form.Control
            name="postText"
            type="text"
            as="textarea"
            rows={3}
            value={bark.postText}
            placeholder="add post text"
            onChange={(e) => setBark({ ...bark, postText: e.target.value })}
          />
        </Form.Group>

        {/* Add random photo generator for imageUrl */}

        <Form.Group controlId="postTags">
          <Form.Label>Tags</Form.Label>
          <Form.Control
            name="tags"
            type="text"
            value={bark.tags}
            placeholder="add tags"
            onChange={(e) => setBark({ ...bark, tags: e.target.value })}
          />
        </Form.Group>

        <Button variant="warning" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
