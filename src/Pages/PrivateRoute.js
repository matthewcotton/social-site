import React, { Fragment} from "react";
import { Redirect } from "react-router-dom";

export const PrivateRoute = (props) => {
  return (
    <Fragment>{props.loggedIn ? props.children : <Redirect to="/login" />}</Fragment>
  );
};
