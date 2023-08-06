import { UserReducerT } from "./types";
import { UserTypeReducers } from "./userListAction";

const initialStates: UserReducerT = {
  users: [],
  searchText: "",
};

export type UserStateType = typeof initialStates;

export const userReducer = (
  state = initialStates,
  action: UserTypeReducers
): UserStateType => {
  switch (action.type) {
    case "USERS_ADD":
      return { ...state, users: action.users };
    case "SET_SEARCH_TEXT":
      return {
        ...state,
        searchText: action.searchText,
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      return state;
  }
};
