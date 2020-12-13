import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//import toastr from 'toastr';
//import 'toastr/build/toastr.min.css';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      ref: React.createRef(),
      username: "",
      text: "",
      likes: 0,
    };
  }

  handleChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState)
  }

  submitHandler(event) {
    event.preventDefault();
    this.props.onsubmit(
      this.state.id,
      this.state.ref,
      this.state.username,
      this.state.text,
      this.state.likes
    );
    //toastr.success("Posted");
    this.setState((state) => ({
      id: state.id + 1,
      ref: state.ref + 1,
      username: "",
      text: "",
      likes: 0,
    }));
  }

  render() {
    return (
      <Form
        onChange={(e) => this.handleChange(e)}
        onSubmit={(e) => this.submitHandler(e)}
      >
        <Form.Group controlId="postUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            type="text"
            value={this.state.username}
          />
        </Form.Group>

        <Form.Group controlId="postText">
          <Form.Label>Post</Form.Label>
          <Form.Control
            name="text"
            type="text"
            value={this.state.text}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default Add;
