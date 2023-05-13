import { ICard } from '@/types/card';
import { IColumn } from "@/types/column";

export interface BoardState {
  columns: Array<IColumn>;
}

export interface MoveColumnPayload {
  indexFrom: number;
  indexTo: number;
}

export interface AddCardToColumnPayload {
  columnId: string;
  card: ICard;
}

export interface RemoveCardPayload {
  columnId: string;
  cardId: string;
}
