
import { createReducer, on } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';

import {GetShipFail, GetShipLoading, GetShipSuccess } from '../actions';

import { Ships } from 'src/app/models/ships.model';


export interface ShipAppState extends AppState {
  selected: SelectedShipState;
}


export interface SelectedShipState {
  ship: Ships;
  loaded: boolean;
  loading: boolean;
  errors: any;
}

const initState: SelectedShipState = {
  ship: null,
  loaded: false,
  loading: false,
  errors: null,
};

const getShipLoading = (state: SelectedShipState, { idShip  }) => {
  return {
    ...state,
    loading: true
  };
};

const getShipsuccess = (state: SelectedShipState, { ship  }) => {
  return {
    ...state,
    loading: false,
    loaded: true,
    ship: {...ship}
  };
};


const getShipfail  = (state: SelectedShipState, { error }) => {
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

const SELETEDSHIPREDUCER = createReducer(
  initState,
  on(GetShipLoading, getShipLoading),
  on(GetShipSuccess, getShipsuccess ),
  on(GetShipFail, getShipfail)
);

export function selectedShipReducer(state, action) {
  return SELETEDSHIPREDUCER(state, action);
}
