
import { createReducer, on } from '@ngrx/store';
import { people_list_success,people_list_loading, people_list_fail } from '../actions';
import { Person } from 'src/app/models/person.model';



export interface peopleState {
  people: Person[];
  loaded: boolean;
  loading: boolean;
  errors: any;

}

const initState: peopleState = {
  people: [],
  loaded: false,
  loading: false,
  errors: null,
}

const _listLoading = (state: peopleState) => {
  return {
    ...state,
    loading: true
  }
}

const _listsuccess = (state: peopleState, { people  }) => {
  return {
    ...state,
    loading: false,
    loaded: true,
    people: [...people]
  }
}


const _listfail  = (state: peopleState, { error }) => {
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

const _peopleReducer = createReducer(
  initState,
  on(people_list_loading, _listLoading),
  on(people_list_fail, _listfail),
  on(people_list_success, _listsuccess)
);

export function peopleReducer(state, action) {
  return _peopleReducer(state, action);
}