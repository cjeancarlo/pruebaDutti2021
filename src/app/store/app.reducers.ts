import { ActionReducerMap } from "@ngrx/store";
import { shipsReducer, shipsState, selectedShipReducer, selectedShipState, peopleState, peopleReducer   } from "./reducers";
import { vehiclesReducer, vehiclesState } from "./reducers/vehicle.reducer";



export interface AppState {
  data: shipsState,
  people: peopleState,
  vehicle: vehiclesState,
  selected: selectedShipState
 }

export const appReducers: ActionReducerMap<AppState> = {
  data: shipsReducer,
  people: peopleReducer,
  vehicle: vehiclesReducer,
  selected: selectedShipReducer
};