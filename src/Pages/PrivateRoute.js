import React, { Fragment, useContext } from "react";
import { UserContext } from "../Context";
import { Redirect, useLocation } from "react-router-dom";

export const PrivateRoute = (props) => {
  const { user } = useContext(UserContext);
  let path = useLocation().pathname;
  path = path.slice(1, path.length);
  const pathQuery = path ? `?route=${path}` : "";

  return (
    <Fragment>
      {user ? props.children : <Redirect to={`/login${pathQuery}`} />}
    </Fragment>
  );
};
