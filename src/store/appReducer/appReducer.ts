import { AppTypeReducers } from "./appAction";
import { AppReducerT } from "./types";

const initialStates: AppReducerT = {
  modal: {
    modalsQueue: [],
    openUser: null,
  },
  loading: false,
};

export type AppStateType = typeof initialStates;

export const appReducer = (
  state = initialStates,
  action: AppTypeReducers
): AppStateType => {
  switch (action.type) {
    case "ADD_MODAL_ITEM_QUEUE":
      return {
        ...state,
        modal: {
          ...state.modal,
          modalsQueue: [...state.modal.modalsQueue, action.modalName],
        },
      };
    case "ADD_ID_OPEN":
      return {
        ...state,
        modal: {
          ...state.modal,
          openUser: action.openUser,
        },
      };
    case "DELETE_FIRST_MODAL":
      return {
        ...state,
        modal: {
          ...state.modal,
          modalsQueue: state.modal.modalsQueue.slice(1),
        },
      };
    case "LOADING":
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};
