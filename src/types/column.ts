import { ICard } from "./card";

export interface IColumn {
  id: string;
  title: string;
  created: string;
  updated: string;
  cards: ICard[];
}
