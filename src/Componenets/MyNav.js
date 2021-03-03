import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../Styles/App.css";

function MyNav({ loggedIn, logout }) {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Link to="/">
        <Navbar.Brand>FaceBuck</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Navbar.Text className="nav-link">
            <Link to="/">Deer Feed</Link>
          </Navbar.Text>
          <Navbar.Text className="nav-link">
            <Link to="/add">Add Bark</Link>
          </Navbar.Text>
          <Navbar.Text className="nav-link">
            <Link to="/house">Hoofed House</Link>
          </Navbar.Text>
        </Nav>
        <Nav>
          <Navbar.Text className="nav-link">
            {loggedIn ? (
              <Link to="" onClick={(e) => logout()} >Log Out</Link>
            ) : (
              <Link to="/login">Log In</Link>
            )}
            {/* <Link to="/login">{loggedIn ? "Log Out" : "Log In"}</Link> */}
          </Navbar.Text>
          <Navbar.Text className="nav-link">
            <a href="https://www.matthewcotton.dev/#/projects">
              Back to Portfolio
            </a>
          </Navbar.Text>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNav;
