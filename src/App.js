import React from "react";
import { Container } from "react-bootstrap";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { MyNav, MyFooter } from "./Componenets";
import { Add, Feed } from "./Pages";
import { ApiClient } from "./Clients/apiClient";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      token: window.localStorage.getItem("facebuck-token"),
      logInOutText: "Login",
    };
    this.client = new ApiClient(
      () => this.state.token,
      () => this.logout()
    );
  }

  login(token) {
    window.localStorage.setItem("facebuck-token", token);
    this.setState({ token });
  }

  logout() {
    window.localStorage.removeItem("facebuck-token");
    this.setState({ token: undefined });
  }

  // componentDidMount() {
  //   const listContents = localStorage.getItem("posts");
  //   this.setState({ listItems: JSON.parse(listContents) || [] });
  // }

  // updatePosts(id, ref, username, text, likes) {
  //   const newPost = { id, ref, username, text, likes };
  //   this.setState(
  //     (state) => ({
  //       posts: state.posts.concat(newPost),
  //     }),
  //     () => localStorage.setItem("posts", JSON.stringify(this.state.posts))
  //   );
  // }

  // increaseLikeCount(id) {
  //   let currentPosts = this.state.posts;
  //   currentPosts[id - 1].likes++;
  //   this.setState({
  //     posts: Object.assign(currentPosts, this.state.posts),
  //   });
  // }

  render() {
    return (
      <Router>
        <MyNav logInOutText={this.state.logInOutText} />
        <Container>
          <Switch>
            <Route
              path="/"
              exact
              render={() => <Feed client={this.client} />}
            />
            <Route path="/add" component={Add} />
            <Route path="/">Error: 404 not found</Route>
          </Switch>
        </Container>
        <MyFooter />
      </Router>
    );
  }
}

export default App;
