import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { UserState } from "./types";

const initialState: UserState = {
  isAuth: false,
  name: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isAuth = true;
      state.name = action.payload;
    },
  },
});

export default userSlice.reducer;
