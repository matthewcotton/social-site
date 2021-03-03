import axios from "axios";
import { createApi } from "unsplash-js";
import env from "react-dotenv";

const url = "https://lit-harbor-58321.herokuapp.com/"; // Make env variable
const unsplashApi = createApi({
  accessKey: env.UNSPLASHACCESSKEY,
});

export class ApiClient {
  constructor(tokenProvider, logoutHandler) {
    this.tokenProvider = tokenProvider;
    this.logoutHandler = logoutHandler;
  }

  /* Login API Call */
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

  /* Unsecure API Calls to social site backend */

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
    });
  }

  async removeLike(postId) {
    return await axios({
      method: "patch",
      url: `${url}posts/unlike/${postId}`,
    });
  }

  /* Autheticated Call Definition */
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

  /* Secure API Calls to social site backend */

  addPost(post) {
    post = {...post, likes: 0, timestamp: Date.now}
    // const likes = 0;
    // const timestamp = Date.now();
    console.log(post)
    return this.authenticatedCall("post", `${url}posts/add`, post);
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

  /* Unsplash API Calls */

  unsplashPhotoSearch(query, count, orientation) {
    const res = unsplashApi.search
      .getPhotos({ query, count, orientation })
      .catch((error) => {
        throw error;
      });
    return res;
  }

  unsplashRandomPhoto(query, count) {
    const res = unsplashApi.photos
      .getRandom({ query, count })
      .catch((error) => {
        throw error;
      });
    return res;
  }
}
