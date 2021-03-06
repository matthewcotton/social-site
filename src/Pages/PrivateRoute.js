import React, { Fragment, useContext } from "react";
import { UserContext } from "../Context";
import { Redirect } from "react-router-dom";

export const PrivateRoute = (props) => {
  const { user } = useContext(UserContext);

  return (
    <Fragment>
      {props.loggedIn ? props.children : <Redirect to="/login" />}
    </Fragment>
  );
};
