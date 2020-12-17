import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      ref: "",
      username: "",
      text: "",
      likes: 0,
    };
    toastr.options = {
      closeButton: "true",
      positionClass: "toast-top-center",
      newestOnTop: "true",
      timeOut: "3000",
    };
    toastr.clear();
  }

  handleChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  submitHandler(event) {
    event.preventDefault();
    const newID = this.props.postListLength + 1;
    const newRef = React.createRef();
    this.props.onsubmit(newID, newRef, this.state.username, this.state.text, 0);
    toastr.success(
      "Buck up! Your post was successfully published.",
      "Published posted"
    );
    this.setState((state) => ({
      id: newID,
      ref: "",
      username: "",
      text: "",
      likes: 0,
    }));
  }

  render() {
    return (
      <div>
        <br />
        <Form onSubmit={(e) => this.submitHandler(e)}>
          <Form.Group controlId="postUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              type="text"
              value={this.state.username}
              placeholder="enter username"
              onChange={(e) => this.handleChange(e)}
            />
          </Form.Group>

          <Form.Group controlId="postText">
            <Form.Label>Post</Form.Label>
            <Form.Control
              name="text"
              type="text"
              value={this.state.text}
              placeholder="add text"
              onChange={(e) => this.handleChange(e)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Add;
