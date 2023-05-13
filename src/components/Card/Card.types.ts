import { ICard } from '@/types/card';

export interface CardProps extends ICard {
  index: number;
  columnId: string;
}
