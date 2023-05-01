import { Card } from "./card";

export interface Column {
  id: string;
  title: string;
  created: string;
  updated: string;
  cards: Card[];
}
