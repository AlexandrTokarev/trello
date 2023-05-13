import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IColumn } from "@/types/column";

import { AddCardToColumnPayload, BoardState, MoveCardPayload, MoveColumnPayload, RemoveCardPayload } from "./types";

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
    },
    moveCard: (state, { payload }: PayloadAction<MoveCardPayload>) => {
      const { targetColumnId, sourceColumnId, newCardIndex, oldCardIndex } = payload;

      const sourceColumn = state.columns.find((column) => column.id === sourceColumnId);

      if (!sourceColumn)
        throw Error('Колонка не найдена');

      const targetCard = sourceColumn.cards[oldCardIndex];

      if (sourceColumnId !== targetColumnId) {
        sourceColumn.cards = sourceColumn.cards.filter((card) => card.id !== targetCard.id);

        const targetColumn = state.columns.find((column) => column.id === targetColumnId);
  
        if (!targetColumn)
          throw Error('Целевая колонка не найдена');
  
        if (targetColumn.cards.length === 0) {
          targetColumn.cards.push(targetCard);
        } else {
          targetColumn.cards.splice(newCardIndex, 0, targetCard);
        }
      } else {
        sourceColumn.cards.splice(oldCardIndex, 1);
        sourceColumn.cards.splice(newCardIndex, 0, targetCard);
      }
    }
  },
});

export default boardSlice.reducer;
