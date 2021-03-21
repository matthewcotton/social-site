import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

export const NewUserForm = ({ submitHandler, newUser, setNewUser }) => {
  return (
    <>
      <br />
      <Form onSubmit={(e) => submitHandler(e)}>
        <Form.Group controlId="newUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            type="text"
            required
            value={newUser.username}
            placeholder="username"
            onChange={(e) =>
              setNewUser({ ...newUser, username: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group controlId="newPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password1"
            type="password"
            required
            value={newUser.password1}
            placeholder="password"
            onChange={(e) =>
              setNewUser({ ...newUser, password1: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group controlId="newPasswordCheck">
          <Form.Label>Repeat Password</Form.Label>
          <Form.Control
            name="password2"
            type="password"
            required
            value={newUser.password2}
            placeholder="password"
            onChange={(e) =>
              setNewUser({ ...newUser, password2: e.target.value })
            }
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
    </>
  );
};
