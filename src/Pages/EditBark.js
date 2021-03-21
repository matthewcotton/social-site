import React, { useState, useContext } from "react";
import { ClientContext } from "../Context";
import { BarkForm } from "../Componenets";
import { Row, Col } from "react-bootstrap";
import { Redirect, useLocation } from "react-router-dom";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

// Split out into a service function
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const EditBark = () => {
  const query = useQuery();

  const currentBark = {
    id: query.get("_id"),
    username: query.get("username"),
    postTitle: query.get("postTitle"),
    postText: query.get("postText"),
    tags: query.get("tags"),
  };

  const [bark, setBark] = useState({
    id: currentBark.id,
    username: currentBark.username,
    postTitle: currentBark.postTitle,
    postText: currentBark.postText,
    tags: currentBark.tags,
  });

  const [submitted, setSubmitted] = useState(false);
  const { client } = useContext(ClientContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!bark.postTitle || !bark.postText) {
      /* ADD BETTER ERROR MESSAGES */
      toastr.error("Please complete all form fields.", "Form Error");
      return;
    }
    await client
      .updatePost(currentBark.id, bark)
      .then(() => {
        toastr.success("Buck up! Your bark was successfully updated.", "BARK!");
        setSubmitted(true);
      })
      .catch((error) => {
        toastr.error(error, "Error");
      });
  };

  return (
    <>
      {submitted ? (
        <Redirect to="/userbarks" />
      ) : (
        <>
          <Row className="justify-content-center">
            <Col>
              <br />
              <h1 className="text-center">Edit Bark</h1>
              <br />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
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
