import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import ViewPosts from "./ViewPosts";
import Add from "./Add";
import MyNav from "./MyNav";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      postRefs: [],
    };
  }

  // createPost(i, ref) {
  //   return (
  //     <Post
  //       key={i}
  //       ref={ref}
  //       postName={"post" + (i + 1)}
  //       postUsername="User"
  //       postText="Test text"
  //     />
  //   );
  // }

  // addPost() {
  //   this.setState((state) => {
  //     const ref = React.createRef();
  //     const newPost = this.createPost(state.posts.length, ref);
  //     return {
  //       posts: state.posts.concat(newPost),
  //       postRefs: state.postRefs.concat(ref),
  //     };
  //   });
  // }

  updatePosts(id, ref, username, text, likes) {
    const newPost = { id, ref, username, text, likes };
    this.setState(
      (state) => ({
        posts: state.posts.concat(newPost),
      })
      //() => localStorage.setItem("list", JSON.stringify(this.state.postItems))
    );
    console.log(this.state.posts);
  }

  increaseLikeCount(id) {
    console.log("test")
    this.state.posts.map((element) => {
      if (element.id === id) {
        this.setState((state) => ({
          likes: state.likes + 1,
        }));
      }
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
              />
            </Route>
            <Route exact path="/">
              <ViewPosts postList={this.state.posts} />
            </Route>
            <Route path="/">Error: 404 not found</Route>
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
