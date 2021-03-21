
import { createReducer, on } from '@ngrx/store';
import { VehicleListFail, VehicleListLoading, VehicleListSuccess } from '../actions';
import { Vehicle } from 'src/app/models/vehicle.model';


export interface VehiclesState {
  vehicles: Vehicle[];
  loaded: boolean;
  loading: boolean;
  errors: any;
  count: number;
  next: string;
  previous: string;

}

const initState: VehiclesState = {
  vehicles: [],
  loaded: false,
  loading: false,
  errors: null,
  count: 0,
  next: '',
  previous: ''
};


const listLoading = (state: VehiclesState) => {
  return {
    ...state,
    loading: true
  };
};

const listsuccess = (state: VehiclesState, { vehicles }) => {
  return {
    ...state,
    loading: false,
    loaded: true,
    vehicles: [...vehicles.results],
    count: vehicles.count,
    next: vehicles.next,
    previous: vehicles.previous
  };
};


const listfail = (state: VehiclesState, { error }) => {
  return {
    ...state,
    loading: false,
    loaded: false,
    errors: {
      status: error.status,
      message: error.message
    }
  };
};

const VEHICLESREDUCER = createReducer(
  initState,
  on(VehicleListLoading, listLoading),
  on(VehicleListFail, listfail),
  on(VehicleListSuccess, listsuccess)
);

export function vehiclesReducer(state, action) {
  return VEHICLESREDUCER(state, action);
}
