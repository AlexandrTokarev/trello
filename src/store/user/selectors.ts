import { RootState } from '../store';

export const selectUserIsAuth = (state: RootState) => state.user.isAuth;
export const selectUserName = (state: RootState) => state.user.name;
