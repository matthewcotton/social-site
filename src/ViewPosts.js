import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./App.css";

class ViewPosts extends React.Component {
  // increaseLikeCount(id) {
  //   this.setState((state) => ({
  //     likes: state.likes + 1,
  //   }));
  // }

  // increaseLikeCount(id) {
  //   this.props.postList.map((currentPost) => {
  //     if (currentPost.id === id) {
  //       console.log(currentPost.likes + 1);
  //     }
  //   });
  // }

  buildPostCards() {
    return this.props.postList.map((currentPost) => (
      <Card className="post">
        <Card.Body>
          <Container>
            <Row>
              <h3>Username: {currentPost.username} </h3>
            </Row>
            {/* <Row>
              <Col>
                <p>ID: {currentPost.id} </p>
              </Col>
            </Row> */}
            <Row>
              <p> {currentPost.text} </p>
            </Row>
            <Row>
              <Col>
                <p>Likes: {currentPost.likes} </p>
              </Col>
              <Col>
                <Button onClick={() => this.increaseLikeCount(currentPost.id)}>
                  Thumb
                </Button>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    ));
  }

  render() {
    return <Row className="postList">{this.buildPostCards()}</Row>;
  }
}

export default ViewPosts;
