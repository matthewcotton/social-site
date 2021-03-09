import React from "react";
import { Button } from "react-bootstrap";
import "../Styles/MoreButton.css";

export const MoreButton = ({ incrementPostsPosition }) => {
  return (
    <Button
      className="more-btn"
      onClick={() => incrementPostsPosition()}
      variant="warning"
    >
      More Feed Please
    </Button>
  );
};
