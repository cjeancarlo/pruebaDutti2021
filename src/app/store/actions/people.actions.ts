import { createAction, props } from '@ngrx/store';
import { PeopleResponse } from 'src/app/models/people.response.model';


export const PeopleListLoading = createAction(
  '[LIST PEOPLE] loading list'
);

export const PeopleListSuccess = createAction(
  '[LIST PEOPLE] list success',
  props<{ people: PeopleResponse }>()
);

export const PeopleListFail = createAction(
  '[LIST PEOPLE] list fail',
  props<{ error: any }>()
);







