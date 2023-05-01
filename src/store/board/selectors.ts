import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../store";

export const selectColumns = (state: RootState) => state.board.columns;
export const selectColumnById = (state: RootState, id: string) => state.board.columns.find((column) => column.id === id);

export const selectColumn = createSelector(
  selectColumnById,
  column => column,
);

export const selectColumnCards = createSelector(
  selectColumnById,
  column => column?.cards ?? [],
)
