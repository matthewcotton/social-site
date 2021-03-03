import React from "react";
import { Container } from "react-bootstrap";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { MyNav, MyFooter } from "./Componenets";
import { AddBark, Feed, HoofedHouse, Login } from "./Pages";
import { ApiClient } from "./Clients/apiClient";
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
  }

  storeUserToken(token) {
    window.localStorage.setItem("facebuck-token", token);
    this.setState({ token });
  }

  deleteUserToken() {
    window.localStorage.removeItem("facebuck-token");
    this.setState({ token: undefined });
  }

  render() {
    return (
      <Router>
        <MyNav logInOutText={this.state.token ? "Log Out" : "Log In"} />
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
                  token={this.state.token}
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
