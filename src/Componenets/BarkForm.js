import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

export const BarkForm = ({ submitHandler, bark, setBark }) => {
  return (
    <Row className="justify-content-center">
      <Col xs={12} lg={8}>
        <br />
        <Form onSubmit={(e) => submitHandler(e)}>
          <Form.Group controlId="postTitle">
            <Form.Label>Post Title*</Form.Label>
            <Form.Control
              name="postTitle"
              type="text"
              required
              value={bark.postTitle}
              placeholder="add post title"
              onChange={(e) => setBark({ ...bark, postTitle: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="postText">
            <Form.Label>Post Text*</Form.Label>
            <Form.Control
              name="postText"
              type="text"
              as="textarea"
              rows={3}
              required
              value={bark.postText}
              placeholder="add post text"
              onChange={(e) => setBark({ ...bark, postText: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="postTags">
            <Form.Label>Tags</Form.Label>
            <Form.Control
              name="tags"
              type="text"
              value={bark.tags}
              placeholder="add tags"
              onChange={(e) => setBark({ ...bark, tags: e.target.value })}
            />
          </Form.Group>
          <Row>
            <Col className="text-center">
              <Button variant="warning" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};
