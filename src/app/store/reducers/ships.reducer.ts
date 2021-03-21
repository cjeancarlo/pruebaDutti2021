
import { createReducer, on } from '@ngrx/store';
import { ListLoading, ListSuccess, ListFail } from '../actions';
import { Ships } from 'src/app/models/ships.model';



export interface ShipsState {
  ships: Ships[];
  loaded: boolean;
  loading: boolean;
  errors: any;
  count: number;
  next: string;
  previous: string;

}

const initState: ShipsState = {
  ships: [],
  loaded: false,
  loading: false,
  errors: null,
  count: 0,
  next: '',
  previous: ''
};

const listLoading = (state: ShipsState) => {
  return {
    ...state,
    loading: true
  };
};

const listsuccess = (state: ShipsState, { ships }) => {
  return {
    ...state,
    loading: false,
    loaded: true,
    ships: [...ships.results],
    count: ships.count,
    next: ships.next,
    previous: ships.previous
  };
};


const listfail = (state: ShipsState, { error }) => {
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

const SHIPSREDUCER = createReducer(
  initState,
  on(ListLoading, listLoading),
  on(ListFail, listfail),
  on(ListSuccess, listsuccess)
);

export function shipsReducer(state, action) {
  return SHIPSREDUCER(state, action);
}
