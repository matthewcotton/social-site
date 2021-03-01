import axios from "axios";
const url = "https://lit-harbor-58321.herokuapp.com/";

export class ApiClient {
  constructor(tokenProvider, logoutHandler) {
    this.tokenProvider = tokenProvider;
    this.logoutHandler = logoutHandler;
  }

  async login(username, password) {
    return await axios({
      method: "post",
      url: `${url}auth`,
      data: {
        username,
        password,
      },
    });
  }

  async getAllPosts() {
    const posts = await axios({
      method: "get",
      url: `${url}posts`,
    });
    return posts.data;
  }

  async getOneUsersPosts(username) {
    return await axios({
      method: "get",
      url: `${url}posts/${username}`,
    });
  }

  async getOnePost(postId) {
    return await axios({
      method: "get",
      url: `${url}posts/id/${postId}`,
    });
  }

  async addUser(username, password) {
    return await axios({
      method: "post",
      url: `${url}/user/add`,
      data: { username, password },
    });
  }

  async addLike(postId) {
    return await axios({
      method: "patch",
      url: `${url}posts/like/${postId}`,
    })
  }

  async removeLike(postId) {
    return await axios({
      method: "patch",
      url: `${url}posts/unlike/${postId}`,
    })
  }

  authenticatedCall(method, url, data) {
    return axios({
      method,
      url,
      headers: {
        authorization: this.tokenProvider(),
      },
      data,
    }).catch((error) => {
      if (error.response.status === 403) {
        this.logoutHandler();
        return Promise.reject();
      } else {
        throw error;
      }
    });
  }

  addPost(username, postTitle, postText, imageUrl, tags) {
    const likes = 0;
    const timestamp = Date.now();
    return this.authenticatedCall("post", `${url}posts/add`, {
      username,
      postTitle,
      postText,
      imageUrl,
      tags,
      likes,
      timestamp,
    });
  }

  updatePost(postId, username, postTitle, postText, imageUrl, tags, likes) {
    return this.authenticatedCall("put", `${url}posts/${postId}`, {
      username,
      postTitle,
      postText,
      imageUrl,
      tags,
      likes,
    });
  }

  deletePost(postId) {
    return this.authenticatedCall("delete", `${url}posts/${postId}`);
  }

  getUserInfo(username) {
    return this.authenticatedCall("get", `${url}user/${username}`);
  }

  updateUserInfo(username, newPassword) {
    return this.authenticatedCall("put", `${url}user/${username}`, {
      newPassword,
    });
  }

  deleteUser(username) {
    return this.authenticatedCall("delete", `${url}user/${username}`);
  }
}
