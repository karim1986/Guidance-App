import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import postReducer from "../features/posts/postsSlice";
import eventReducer from "../features/events/eventsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer,
    events: eventReducer,
  },
});
