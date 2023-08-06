import { UserT } from "../userListReducer/types";

export type AppTypeReducers =
  | AddModalItemQueueACType
  | AddUserIdOpenACType
  | DeleteFirstModalACType
  | loadingACType;

export const addModalItemQueueAC = (modalName: string) =>
  ({
    type: "ADD_MODAL_ITEM_QUEUE",
    modalName,
  } as const);
export type AddModalItemQueueACType = ReturnType<typeof addModalItemQueueAC>;

export const addUserIdOpenAC = (openUser: UserT) =>
  ({
    type: "ADD_ID_OPEN",
    openUser,
  } as const);
export type AddUserIdOpenACType = ReturnType<typeof addUserIdOpenAC>;

export const DeleteFirstModalAC = () =>
  ({
    type: "DELETE_FIRST_MODAL",
  } as const);
export type DeleteFirstModalACType = ReturnType<typeof DeleteFirstModalAC>;

export const loadingAC = (loading: boolean) =>
  ({
    type: "LOADING",
    loading,
  } as const);
export type loadingACType = ReturnType<typeof loadingAC>;
