import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk(
  "user/login",
  async (arg, { rejectWithValue }) => {
    try {
      console.log("user logged in");
      // const response = await axios.get("http://localhost:8000/auth/me", { withCredentials: true });
      // if (response.status !== 200) throw new Error(response.message);
      // const { username, name, avatar } = response.data;
      // return { username, name, avatar };
    } catch (e) {
      return rejectWithValue(e.response?.data?.message);
    }
  }
);
