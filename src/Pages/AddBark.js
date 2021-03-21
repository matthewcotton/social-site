import React, { useState, useContext } from "react";
import { BarkForm, RandomDeerPhoto } from "../Componenets";
import { Row, Col } from "react-bootstrap";
import { UserContext, ClientContext } from "../Context";
import { Redirect } from "react-router-dom";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

export const AddBark = () => {
  const { user } = useContext(UserContext);
  const [bark, setBark] = useState({
    username: user.username,
    postTitle: "",
    postText: "",
    imageData: {},
    tags: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { client } = useContext(ClientContext);

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!bark.postTitle || !bark.postText) {
      toastr.error("Please complete all form fields.", "Complete Form");
      return;
    }
    if (!bark.imageData.url) {
      toastr.error(
        "Please click 'Which deer are you?' to select a photo.",
        "Photo Required"
      );
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
        setSubmitted(true);
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
    <>
      {submitted ? (
        <Redirect to="/" />
      ) : (
        <>
          <Row className="justify-content-center">
            <Col>
              <br />
              <h1 className="text-center">Add Bark</h1>
              <br />
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={6}>
              <br />
              <RandomDeerPhoto
                buttonText="Which deer are you?"
                preLoadText=""
                returnPhotoData={saveImageData}
              />
            </Col>
            <Col xs={12} lg={6}>
              <BarkForm
                submitHandler={submitHandler}
                bark={bark}
                setBark={setBark}
              />
            </Col>
          </Row>
        </>
      )}
    </>
  );
};
