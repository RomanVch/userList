import { UserT } from "./types";

export type UserTypeReducers =
  | addUsersType
  | setSearchTextACType
  | deleteUserACType;
export const addUsersAC = (users: UserT[]) =>
  ({
    type: "USERS_ADD",
    users,
  } as const);
export type addUsersType = ReturnType<typeof addUsersAC>;

export const setSearchTextAC = (searchText: string) =>
  ({
    type: "SET_SEARCH_TEXT",
    searchText,
  } as const);
export type setSearchTextACType = ReturnType<typeof setSearchTextAC>;

export const deleteUserAC = (id: number) =>
  ({
    type: "DELETE_USER",
    id,
  } as const);
export type deleteUserACType = ReturnType<typeof deleteUserAC>;
