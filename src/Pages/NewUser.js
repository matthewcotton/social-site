import React, { useState, useContext } from "react";
import { NewUserForm } from "../Componenets";
import { Row, Col } from "react-bootstrap";
import { ClientContext } from "../Context";
import { Redirect } from "react-router-dom";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

export const NewUser = () => {
  const [newUser, setNewUser] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { client } = useContext(ClientContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (newUser.password1 !== newUser.password2) {
      toastr.warning("Your passwords must match.", "Password Mismatch");
      return;
    }
    await client
      .addUser(newUser.username, newUser.password1)
      .then(() => {
        setNewUser({
          username: "",
          password1: "",
          password2: "",
        });
        toastr.success(
          "New Facebuck account created. Please login.",
          "Success!"
        );
        setSubmitted(true);
      })
      .catch((err) => {
        toastr.error(err.response.data, "New User Account Error");
      });
  };

  return (
    <>
      {submitted ? (
        <Redirect to="/login" />
      ) : (
        <>
          <Row className="justify-content-center">
            <Col>
              <br />
              <h1 className="text-center">Create a New User Account</h1>
              <br />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} lg={6}>
              <NewUserForm
                submitHandler={submitHandler}
                newUser={newUser}
                setNewUser={setNewUser}
              />
            </Col>
          </Row>
        </>
      )}
    </>
  );
};
