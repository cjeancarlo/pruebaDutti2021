import { ActionReducerMap } from "@ngrx/store";

import { shipsReducer, shipsState, selectedShipReducer, selectedShipState   } from "./reducers";

export interface AppState {
  data: shipsState,
  selected: selectedShipState
 }

export const appReducers: ActionReducerMap<AppState> = {
  data: shipsReducer,
  selected: selectedShipReducer
};