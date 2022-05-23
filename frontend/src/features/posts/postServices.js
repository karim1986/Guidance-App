import axios from "axios";

const API_URL = "/api/posts/";

//create new goal

const createPost = async (postData) => {
  const response = await axios.post(API_URL, postData);
  return response.data;
};

//get user goals
const getPosts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const postsService = { createPost, getPosts };

export default postsService;
