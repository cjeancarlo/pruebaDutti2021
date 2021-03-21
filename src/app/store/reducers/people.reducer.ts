
import { createReducer, on } from '@ngrx/store';
import { PeopleListSuccess, PeopleListLoading, PeopleListFail } from '../actions';
import { Person } from 'src/app/models/person.model';



export interface PeopleState {
  people: Person[];
  loaded: boolean;
  loading: boolean;
  errors: any;
  count: number;
  next: string;
  previous: string;
}

const initState: PeopleState = {
  people: [],
  loaded: false,
  loading: false,
  errors: null,
  count: 0,
  next: '',
  previous: ''
};

const listLoading = (state: PeopleState) => {
  return {
    ...state,
    loading: true
  };
};

const listsuccess = (state: PeopleState, { people }) => {
  return {
    ...state,
    loading: false,
    loaded: true,
    people: [...people.results],
    count: people.count,
    next: people.next,
    previous: people.previous
  };
};


const listfail = (state: PeopleState, { error }) => {
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

const PEOPLEREDUCER = createReducer(
  initState,
  on(PeopleListLoading, listLoading),
  on(PeopleListFail, listfail),
  on(PeopleListSuccess, listsuccess)
);

export function peopleReducer(state, action) {
  return PEOPLEREDUCER(state, action);
}
