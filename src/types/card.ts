import { IUser } from "./user";

export interface ICard {
  id: string;
  title: string;
  description: string;
  author: IUser | null;
}
