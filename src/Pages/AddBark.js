import React, { useState, useContext } from "react";
import { BarkForm, RandomDeerPhoto } from "../Componenets";
import { Row, Col } from "react-bootstrap";
import { UserContext } from "../Context";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

export const AddBark = ({ client }) => {
  const { user } = useContext(UserContext);
  const [bark, setBark] = useState({
    username: user.username,
    postTitle: "",
    postText: "",
    imageData: {},
    tags: "",
  });

  

  toastr.options = {
    closeButton: "true",
    positionClass: "toast-top-center",
    newestOnTop: "true",
    timeOut: "3000",
  };
  toastr.clear();

  const submitHandler = async (event) => {
    event.preventDefault();
    if ( !bark.postTitle || !bark.postText) {
      /* ADD BETTER ERROR MESSAGES */
      toastr.error("Please complete all form fields.", "Form Error");
      return;
    }
    await client
      .addPost(bark)
      .then(() => {
        setBark({
          username: user.username,
          postTitle: "",
          postText: "",
          imageData: {},
          tags: "",
        });
        toastr.success(
          "Buck up! Your bark was successfully published.",
          "BARK!"
        );
        // Then redirect to feed
      })
      .catch((error) => {
        toastr.error(error, "Error");
      });
  };

  const saveImageData = (data) => {
    setBark({
      ...bark,
      imageData: {
        url: data.urls.regular,
        creatorUsername: data.user.name,
        creatorLink: `https://unsplash.com/@${data.user.username}`,
      },
    });
  };

  return (
    <Row>
      <Col xs={12} lg={6}>
        <br />
        <RandomDeerPhoto
          client={client}
          buttonText="Which deer are you?"
          preLoadText=""
          returnPhotoData={saveImageData}
        />
      </Col>
      <Col xs={12} lg={6}>
        <BarkForm submitHandler={submitHandler} bark={bark} setBark={setBark} />
      </Col>
    </Row>
  );
};
