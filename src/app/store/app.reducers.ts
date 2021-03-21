import { ActionReducerMap } from '@ngrx/store';
import {
  vehiclesReducer,
  VehiclesState,
  shipsReducer,
  ShipsState,
  selectedShipReducer,
  SelectedShipState,
  PeopleState,
  peopleReducer
} from './reducers';
export interface AppState {
  data: ShipsState;
  people: PeopleState;
  vehicle: VehiclesState;
  selected: SelectedShipState;
}

export const appReducers: ActionReducerMap<AppState> = {
  data: shipsReducer,
  people: peopleReducer,
  vehicle: vehiclesReducer,
  selected: selectedShipReducer
};
