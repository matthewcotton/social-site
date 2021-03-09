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

  // FIX LIMIT ANDF SKIP ARGS
  async getAllPosts(limit, skip) {
    skip = skip ? skip : 0;
    limit = limit ? limit : 10;
    const posts = await axios.get(`${url}posts`, {
      params: { limit, skip },
    });
    return posts.data;
  }

  async getOneUsersPosts(username, limit, skip) {
    skip = skip ? skip : 0;
    limit = limit ? limit : 10;
    const posts = await axios.get(`${url}posts/user/${username}`, {
      params: { limit, skip },
    });
    return posts.data;
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

  addPost(data) {
    const post = { ...data, likes: "0", timestamp: Date.now() };
    return this.authenticatedCall("post", `${url}posts/add`, post);
  }

  updatePost(postId, data) {
    return this.authenticatedCall("put", `${url}posts/${postId}`, data);
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
