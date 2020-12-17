import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import ViewPosts from "./ViewPosts";
import Add from "./Add";
import MyNav from "./MyNav";
import MyFooter from "./MyFooter";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
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
        <MyNav />
        <Container>
          <Switch>
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
