import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

class MyNav extends React.Component {

  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="md">
          <Navbar.Brand>MyFace</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Navbar.Text>
                <Link to="/">View Posts</Link>
              </Navbar.Text>
              <Navbar.Text>
                <Link to="/add">Add Posts</Link>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default MyNav;
