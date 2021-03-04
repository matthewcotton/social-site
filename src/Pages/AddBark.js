import React from "react";
import { useState } from "react";
import { BarkForm } from "../Componenets";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

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

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!bark.username || !bark.postTitle || !bark.postText || !bark.tags) {
      /* ADD BETTER ERROR MESSAGES */
      toastr.error("Please complete all form fields.", "Form Error");
      return;
    }
    await client
      .addPost(bark)
      .then(() => {
        setBark({
          username: "",
          postTitle: "",
          postText: "",
          imageUrl: "",
          tags: "",
        });
        toastr.success(
          "Buck up! Your bark was successfully published.",
          "BARK!"
        );
      })
      .catch((error) => {
        toastr.error(error, "Error");
      });
  };

  return (
    <BarkForm submitHandler={submitHandler} bark={bark} setBark={setBark} />
  );
};
