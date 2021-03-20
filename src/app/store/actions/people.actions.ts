import { createAction, props } from '@ngrx/store';
import { PeopleResponse } from 'src/app/models/people.response.model';


export const people_list_loading = createAction(
  '[LIST PEOPLE] loading list'
);

export const people_list_success = createAction(
  '[LIST PEOPLE] list success',
  props<{ people: PeopleResponse }>()
);

export const people_list_fail = createAction(
  '[LIST PEOPLE] list fail',
  props<{ error: any }>()
);







