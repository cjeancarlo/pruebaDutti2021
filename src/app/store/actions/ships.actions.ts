import { createAction, props } from '@ngrx/store';
import { Ships } from 'src/app/models/ships.model';
import { ShipsResponse } from 'src/app/models/ships.response.model';


export const list_loading = createAction(
  '[LIST SHIPS] loading list'
);

export const list_success = createAction(
  '[LIST SHIPS] list success',
  props<{ ships: ShipsResponse }>()
);

export const list_fail = createAction(
  '[LIST SHIPS] list fail',
  props<{ error: any }>()
);







