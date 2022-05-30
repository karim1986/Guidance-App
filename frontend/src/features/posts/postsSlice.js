import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "./postServices";

const initialState = {
  posts: [],
  isErrorP: false,
  isSuccessP: false,
  isLoadingP: false,
  messageP: "",
};

// create new post
export const createPost = createAsyncThunk(
  "post/create",
  async (postData, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auth.user.token;
      return await postsService.createPost(postData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//get user posts
export const getPosts = createAsyncThunk(
  "posts/getAll",
  async (_, thunkAPI) => {
    try {
      return await postsService.getPosts();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.messageP ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const postsSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    resetPost: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.isLoadingP = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoadingP = false;
        state.isSuccessP = true;
        state.posts.push(action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isLoadingP = false;
        state.isErrorP = true;
        state.messageP = action.payload;
      })
      .addCase(getPosts.pending, (state) => {
        state.isLoadingP = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoadingP = false;
        state.isSuccessP = true;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoadingP = false;
        state.isErrorP = true;
        state.messageP = action.payload;
      });
  },
});

export const { resetPost } = postsSlice.actions;
export default postsSlice.reducer;
