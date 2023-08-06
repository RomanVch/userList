import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import { appReducer } from "./appReducer/appReducer";
import { userReducer } from "./userListReducer/userListReducer";

const rootReducer = combineReducers({ userReducer, appReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppStateType = ReturnType<typeof rootReducer>;
