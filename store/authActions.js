import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/services/api";

export const getUser = createAsyncThunk(
  "user/login",
  async (arg, { rejectWithValue }) => {
    try {
      console.log("fetching user");
      // const response = await api.get("/auth/user");
      // return response.data;
    } catch (e) {
      return rejectWithValue(e.response?.data?.message);
    }
  }
);
