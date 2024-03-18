import { IUserState } from 'app/providers/StoreProvider';

export const getUserSelector = (state: IUserState) => state.user;
