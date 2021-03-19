import { createAction, props } from '@ngrx/store';
import { Person } from 'src/app/models/person.model';

export const people_list_loading = createAction(
  '[LIST PEOPLE] loading list'
);

export const people_list_success = createAction(
  '[LIST PEOPLE] list success',
  props<{ people: Person[] }>()
);

export const people_list_fail = createAction(
  '[LIST PEOPLE] list fail',
  props<{ error: any }>()
);







