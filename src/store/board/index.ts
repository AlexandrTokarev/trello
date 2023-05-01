import { boardSlice } from "./slice";

export * from "./selectors";
export * from "./types";

export const { addColumn, moveColumn, removeColumn } = boardSlice.actions;
