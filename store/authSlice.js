import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { getUser } from "./authActions";

const DUMMY_USERS = [
  {
    user: {
      firstName: "Ahmed",
      lastName: "Kamran",
      email: "ahmed@gmail.com",
      avatar: "",
      role: "User",
    },
  },
  {
    user: {
      firstName: "Mujtaba",
      lastName: "Shafoq",
      email: "mujtaba@gmail.com",
      avatar: "",
      role: "User",
    },
  },
];

const userInitialState = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
    avatar: "",
    role: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState: userInitialState,
  reducers: {
    logoutUser(state, action) {
      state.user = { ...userInitialState.user };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(HYDRATE, (state, action) => {
        return {
          ...state,
          ...action.payload,
        };
      })
      .addCase(getUser.pending, (state, action) => {
        state = userInitialState;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.user = userInitialState;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = { ...DUMMY_USERS[1].user };
      });
  },
});

// export const user = (state) => state.component.status;

export default authSlice;
