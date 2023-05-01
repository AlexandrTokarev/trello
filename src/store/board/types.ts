import { Column } from "@/types/column";

export interface BoardState {
  columns: Array<Column>;
}

export interface MoveColumnPayload {
  indexFrom: number;
  indexTo: number;
}
