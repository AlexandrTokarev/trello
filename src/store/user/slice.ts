import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { UserState } from "./types";

const initialState: UserState = {
  isAuth: false,
  profile: {
    name: "",
  }
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isAuth = true;
      state.profile.name = action.payload;
    },
  },
});

export default userSlice.reducer;
