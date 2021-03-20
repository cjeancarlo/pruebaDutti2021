
import { createReducer, on } from '@ngrx/store';
import { list_loading, list_success, list_fail } from '../actions';
import { Ships } from 'src/app/models/ships.model';



export interface shipsState {
  ships: Ships[];
  loaded: boolean;
  loading: boolean;
  errors: any;
  count: number;
  next: string;
  previous: string;

}

const initState: shipsState = {
  ships: [],
  loaded: false,
  loading: false,
  errors: null,
  count: 0,
  next: '', 
  previous: ''

}

const _listLoading = (state: shipsState) => {
  return {
    ...state,
    loading: true
  }
}

const _listsuccess = (state: shipsState, { ships  }) => {
  return {
    ...state,
    loading: false,
    loaded: true,
    ships: [...ships.results],
    count: ships.count,
    next: ships.next,
    previous:  ships.previous
    
  }
}


const _listfail  = (state: shipsState, { error }) => {
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

const _shipsReducer = createReducer(
  initState,
  on(list_loading, _listLoading),
  on(list_fail, _listfail),
  on(list_success, _listsuccess)
);

export function shipsReducer(state, action) {
  return _shipsReducer(state, action);
}