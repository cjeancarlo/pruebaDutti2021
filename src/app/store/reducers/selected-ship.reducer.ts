
import { createReducer, on } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers'

import {get_ship_fail, get_ship_loading, get_ship_success } from '../actions';

import { Ships } from 'src/app/models/ships.model';


export interface ShipAppState extends AppState {
  selected: selectedShipState;
}


export interface selectedShipState {
  ship: Ships;
  loaded: boolean;
  loading: boolean;
  errors: any;

}

const initState: selectedShipState = {
  ship: null,
  loaded: false,
  loading: false,
  errors: null,
}

const _getShipLoading = (state: selectedShipState, { idShip  }) => {
  return {
    ...state,
    loading: true
  }
}

const _getShipsuccess = (state: selectedShipState, { ship  }) => {
  return {
    ...state,
    loading: false,
    loaded: true,
    ship: {...ship}
  }
}


const _getShipfail  = (state: selectedShipState, { error }) => {
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

const _seletedShipReducer = createReducer(
  initState,
  on(get_ship_loading, _getShipLoading),
  on(get_ship_success, _getShipsuccess ),
  on(get_ship_fail, _getShipfail)
);

export function selectedShipReducer(state, action) {
  return _seletedShipReducer(state, action);
}