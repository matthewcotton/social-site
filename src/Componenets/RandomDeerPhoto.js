import React from "react";
import { useState } from "react";
import { Row, Col, Button, Image } from "react-bootstrap";
import "../Styles/RandomDeerPhoto.css";

const RandomDeerPhoto = ({ client }) => {
  const [randomPhoto, setRandomPhoto] = useState(null);

  const randomButtonHandler = async () => {
    const photoFromUnsplash = await client.unsplashRandomPhoto("deer", 1);
    console.log(photoFromUnsplash);
    setRandomPhoto(photoFromUnsplash.response);
  };

  const imageCheck = () => {
    if (randomPhoto === null) {
      return <p>Do you want to see a hoofed ruminant mammal?</p>;
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
            <Col>
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
      <Button
        className="random-btn"
        onClick={(e) => randomButtonHandler(e)}
        variant="warning"
      >
        Random Deer Photo
      </Button>
    </div>
  );
};

export default RandomDeerPhoto;
