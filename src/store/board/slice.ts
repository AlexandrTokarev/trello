import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IColumn } from "@/types/column";

import { BoardState, MoveColumnPayload } from "./types";

const initialState: BoardState = {
  columns: [],
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addColumn: (state, action: PayloadAction<IColumn>) => {
      state.columns.push(action.payload);
    },
    moveColumn: (state, { payload }: PayloadAction<MoveColumnPayload>) => {
      state.columns.splice(
        payload.indexTo,
        0,
        state.columns.splice(payload.indexFrom, 1)[0]
      );
    },
    removeColumn: (state, { payload }: PayloadAction<string>) => {
      state.columns = state.columns.filter((column) => column.id !== payload);
    }
  },
});

export default boardSlice.reducer;
