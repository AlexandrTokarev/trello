import { IColumn } from "@/types/column";

export interface BoardState {
  columns: Array<IColumn>;
}

export interface MoveColumnPayload {
  indexFrom: number;
  indexTo: number;
}
