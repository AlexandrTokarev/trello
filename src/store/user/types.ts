import { IUser } from '@/types/user';

export interface UserState {
  isAuth: boolean;
  profile: IUser;
}
