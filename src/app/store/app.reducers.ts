import { ActionReducerMap } from "@ngrx/store";
import { shipsReducer } from "./reducers";

export interface AppState { }

export const appReducers: ActionReducerMap<AppState> = {
  data: shipsReducer
};