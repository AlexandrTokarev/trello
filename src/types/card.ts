import { User } from "./user";

export interface Card {
  id: string;
  title: string;
  description: string;
  author: User | null;
}
