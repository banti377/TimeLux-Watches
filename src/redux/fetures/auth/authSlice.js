import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducers;
