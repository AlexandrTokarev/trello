import { RootState } from "../store";

export const selectUserIsAuth = (state: RootState) => state.user.isAuth;
export const selectUser = (state: RootState) => state.user.profile;
