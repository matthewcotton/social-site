import React from "react";
import { Button } from "react-bootstrap";
import hoof from "../resources/noun_hoof_3071279.png";
import "../Styles/RefreshButton.css";

const RefreshButton = ({ refreshPosts }) => {
  const refreshHandler = () => refreshPosts();

  return (
    <Button
      onClick={(e) => refreshHandler(e.currentTarget.id)}
      variant="warning"
    >
      <img className="refresh-hoof" src={hoof} alt="Fresh feed" />
      <img className="refresh-hoof" src={hoof} alt="Fresh feed" />
      Fresh Feed
      <img className="refresh-hoof" src={hoof} alt="Fresh feed" />
      <img className="refresh-hoof" src={hoof} alt="Fresh feed" />
    </Button>
  );
};

export default RefreshButton;
