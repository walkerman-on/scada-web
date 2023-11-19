import { StateSchema } from "app/providers/StoreProvider";

export const getUserSelector = (state: StateSchema) => state.user;
