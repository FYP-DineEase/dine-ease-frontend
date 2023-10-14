import { configureStore } from "@reduxjs/toolkit";

import { createWrapper } from "next-redux-wrapper";

import authSlice from "./authSlice";

const makeStore = () => {
  const store = configureStore({
    reducer: { auth: authSlice.reducer },
  });

  return store;
};

export const wrapper = createWrapper(makeStore);
export const authActions = authSlice.actions;
