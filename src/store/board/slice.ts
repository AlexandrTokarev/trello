import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IColumn } from "@/types/column";

import { AddCardToColumnPayload, BoardState, MoveColumnPayload, RemoveCardPayload } from "./types";

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
    },
    addCardToColumn: (state, { payload }: PayloadAction<AddCardToColumnPayload>) => {
      const column = state.columns.find((column) => column.id === payload.columnId);

      column?.cards.push(payload.card);
    },
    removeCard: (state, { payload }: PayloadAction<RemoveCardPayload>) => {
      const column = state.columns.find((column) => column.id === payload.columnId);
  
      if (!column)
        throw Error('Колонка не найдена');
  
      column.cards = column.cards.filter((column) => column.id !== payload.cardId);
    }
  },
});

export default boardSlice.reducer;
