import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

export const AddBark = ({ client }) => {
  const [bark, setBark] = useState({
    username: "",
    title: "",
    text: "",
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

  const submitHandler = (event) => {
    event.preventDefault();
    if (!checkUsername(bark.username)) {
      toastr.error(
        "Username is too long. It must be 15 characters or less.",
        "Username Error"
      );
    } else {
      // Check if this actually needs to be an async function
      const addBark = async () => {
        return await client.addPost(bark);
      };
      const res = addBark();
      console.log(res);
      if (res.status === 200) {
        toastr.success(
          "Buck up! Your post was successfully published.",
          "Published posted"
        );
        setBark({
          username: "",
          title: "",
          text: "",
          imageUrl: "",
          tags: "",
        });
      } else {
        toastr.error(
          "An error occured when submitting your bark. Please try again.",
          "Submission Error"
        );
      }
    }
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
            name="title"
            type="text"
            value={bark.title}
            placeholder="add post title"
            onChange={(e) => setBark({ ...bark, title: e.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="postText">
          <Form.Label>Post Text</Form.Label>
          <Form.Control
            name="text"
            type="text"
            as="textarea"
            rows={3}
            value={bark.text}
            placeholder="add post text"
            onChange={(e) => setBark({ ...bark, text: e.target.value })}
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
