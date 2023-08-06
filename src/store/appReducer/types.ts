import { UserT } from "../userListReducer/types";

export type ModalsInReducerT = {
  modal: {
    modalsQueue: string[];
    openUser: UserT | null;
  };
};

export type AppReducerT = { loading: boolean } & ModalsInReducerT;
