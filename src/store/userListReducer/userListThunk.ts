import axios from "axios";
import { ThunkDispatch } from "redux-thunk";

import { AppTypeReducers, loadingAC } from "../appReducer/appAction";
import { UserT } from "./types";
import { addUsersAC, UserTypeReducers } from "./userListAction";

type AppDispatch = ThunkDispatch<
  void,
  void,
  UserTypeReducers | AppTypeReducers
>;

export const getUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(loadingAC(true));
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch(loadingAC(false));
    const users: UserT[] = response.data;
    dispatch(addUsersAC(users));
    return;
  } catch (error) {
    dispatch(loadingAC(false));
    console.error("Error get user:", error);
    throw error;
  }
};
