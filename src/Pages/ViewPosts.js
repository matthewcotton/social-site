// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Row from "react-bootstrap/Row";
// import "../Styles/App.css";
// import Post from "../Componenets/Post";
// import NoPosts from "../Componenets/NoPosts";

// class ViewPosts extends React.Component {
//   buildPostCards() {
//     if (this.props.postList.length === 0) {
//       return <NoPosts />;
//     } else {
//       return this.props.postList.map((currentPost) => (
//         <Post currentPost={currentPost} addLike={this.props.addLike} />
//       ));
//     }
//   }

//   render() {
//     return (
//       <div>
//         <br />
//         <Row className="postList">{this.buildPostCards()}</Row>
//       </div>
//     );
//   }
// }

// export default ViewPosts;
