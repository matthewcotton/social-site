import React from "react";
import { Container } from "react-bootstrap";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { MyNav, MyFooter } from "./Componenets";
import { AddBark, Feed, HoofedHouse, Login } from "./Pages";
import { ApiClient } from "./Clients/apiClient";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: window.localStorage.getItem("facebuck-token"),
      logInOutText: "Login",
    };
    this.client = new ApiClient(
      () => this.state.token,
      () => this.deleteUserToken()
    );
    /* Can these settings be centralised somewhere? */
    toastr.options = {
      closeButton: "true",
      positionClass: "toast-top-center",
      newestOnTop: "true",
      timeOut: "3000",
    };
    toastr.clear();
  }

  storeUserToken(token) {
    window.localStorage.setItem("facebuck-token", token);
    this.setState({ token });
  }

  deleteUserToken() {
    window.localStorage.removeItem("facebuck-token");
    this.setState({ token: undefined });
    toastr.info(
      "You have been logged out."
    )
  }

  render() {
    return (
      <Router>
        <MyNav
          loggedIn={this.state.token ? true : false}
          logout={() => this.deleteUserToken()}
        />
        <Container>
          <Switch>
            <Route
              path="/"
              exact
              render={() => <Feed client={this.client} />}
            />
            <Route
              path="/add"
              render={() => <AddBark client={this.client} />}
            />
            <Route
              path="/house"
              render={() => <HoofedHouse client={this.client} />}
            />
            <Route
              path="/login"
              render={() => (
                <Login
                  client={this.client}
                  storeUserToken={(token) => this.storeUserToken(token)}
                  loggedIn={this.state.token ? true : false}
                />
              )}
            />
            <Route path="/">Error: 404 not found</Route>
          </Switch>
        </Container>
        <MyFooter />
      </Router>
    );
  }
}

export default App;
