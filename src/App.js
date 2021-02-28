import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import ViewPosts from "./Pages/ViewPosts";
import Add from "./Pages/Add";
import MyNav from "./Componenets/MyNav";
import MyFooter from "./Componenets/MyFooter";
import "./Styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      logInOutText: "Login",
    };
  }

  componentDidMount() {
    const listContents = localStorage.getItem("posts");
    this.setState({ listItems: JSON.parse(listContents) || [] });
  }

  updatePosts(id, ref, username, text, likes) {
    const newPost = { id, ref, username, text, likes };
    this.setState(
      (state) => ({
        posts: state.posts.concat(newPost),
      }),
      () => localStorage.setItem("posts", JSON.stringify(this.state.posts))
    );
  }

  increaseLikeCount(id) {
    let currentPosts = this.state.posts;
    currentPosts[id - 1].likes++;
    this.setState({
      posts: Object.assign(currentPosts, this.state.posts),
    });
  }

  render() {
    return (
      <Router>
        <MyNav logInOutText={this.state.logInOutText} />
        <Container>
          <Switch>
            <Route path="/login">
              <p>Login Page</p>
            </Route>
            <Route path="/add">
              <Add
                onsubmit={(id, ref, username, text, likes) =>
                  this.updatePosts(id, ref, username, text, likes)
                }
                postListLength={this.state.posts.length}
              />
            </Route>
            <Route exact path="/">
              <ViewPosts
                postList={this.state.posts}
                addLike={(id) => this.increaseLikeCount(id)}
              />
            </Route>
            <Route path="/">Error: 404 not found</Route>
          </Switch>
        </Container>
        <MyFooter />
      </Router>
    );
  }
}

export default App;
