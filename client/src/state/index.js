import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
  messages: [],
  message: '',
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
    setMessages: (state, action) => {
      state.messages = action.payload.messages;
    },
    setMessage: (state, action) => {
      const updatedMessages = state.posts.map((message) => {
        if (message._id === action.payload.message._id) return action.payload.message;
        return message;
      });
      state.message = updatedMessages;
    },
  },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost, setMessages, setMessage } =
  authSlice.actions;
export default authSlice.reducer;
