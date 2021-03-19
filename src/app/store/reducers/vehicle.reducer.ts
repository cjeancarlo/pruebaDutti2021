
import { createReducer, on } from '@ngrx/store';
import { vehicle_list_fail, vehicle_list_loading, vehicle_list_success } from '../actions';
import { Vehicle } from 'src/app/models/vehicle.model';


export interface vehiclesState {
  vehicles: Vehicle[];
  loaded: boolean;
  loading: boolean;
  errors: any;

}

const initState: vehiclesState = {
  vehicles: [],
  loaded: false,
  loading: false,
  errors: null,
}

const _listLoading = (state: vehiclesState) => {
  return {
    ...state,
    loading: true
  }
}

const _listsuccess = (state: vehiclesState, { vehicles  }) => {
  return {
    ...state,
    loading: false,
    loaded: true,
    vehicles: [...vehicles]
  }
}


const _listfail  = (state: vehiclesState, { error }) => {
  return {
    ...state,
    loading: false,
    loaded: false,
    errors: {
      status: error.status,
      message: error.message
    }
  }
}

const _vehiclesReducer = createReducer(
  initState,
  on(vehicle_list_loading, _listLoading),
  on(vehicle_list_fail, _listfail),
  on(vehicle_list_success, _listsuccess)
);

export function vehiclesReducer(state, action) {
  return _vehiclesReducer(state, action);
}