import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import userReducer from "./user/slice";
import boardReducer from "./board/slice";

import { loadState, saveState } from "./utils/localStorage";

const reducers = combineReducers({
  user: userReducer,
  board: boardReducer,
});

const store = configureStore({
  devTools: true,
  reducer: reducers,
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
