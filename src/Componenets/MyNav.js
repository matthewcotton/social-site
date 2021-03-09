import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../Context";
import "../Styles/Navbar.css";

function MyNav({ logout }) {
  const { user } = useContext(UserContext);

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
            {user ? <Link to="/userbarks">{user.username}</Link> : ""}
          </Navbar.Text>
          <Navbar.Text className="nav-link">
            {user ? (
              <button
                className="logout-btn navbar-dark "
                onClick={(e) => logout()}
              >
                Log Out
              </button>
            ) : (
              <Link to="/login">Log In</Link>
            )}
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
