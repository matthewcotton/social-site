import React, { useContext } from "react";
import { ClientContext } from "../Context";

import { useState } from "react";
import { Row, Col, Button, Image } from "react-bootstrap";
import "../Styles/RandomDeerPhoto.css";

const RandomDeerPhoto = ({ buttonText, preLoadText, returnPhotoData }) => {
  const [randomPhoto, setRandomPhoto] = useState(null);
  const { client } = useContext(ClientContext);

  const randomButtonHandler = async () => {
    const photoFromUnsplash = await client.unsplashRandomPhoto("deer", 1);
    console.log(photoFromUnsplash);
    setRandomPhoto(photoFromUnsplash.response);
    if (returnPhotoData) {
      returnPhotoData(photoFromUnsplash.response[0]);
    }
  };

  const imageCheck = () => {
    if (randomPhoto === null) {
      return <p>{preLoadText}</p>;
    } else {
      return (
        <div>
          <Row>
            <Col className="text-center">
              <Image
                className="random-photo"
                src={randomPhoto[0].urls.regular}
              />
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://unsplash.com/@${randomPhoto[0].user.username}`}
              >
                {randomPhoto[0].user.name}
              </a>
            </Col>
          </Row>
        </div>
      );
    }
  };

  return (
    <div>
      {imageCheck()}
      <Row>
        <Col className="text-center">
          <Button
            className="random-btn"
            onClick={(e) => randomButtonHandler(e)}
            variant="warning"
          >
            {buttonText}
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default RandomDeerPhoto;
