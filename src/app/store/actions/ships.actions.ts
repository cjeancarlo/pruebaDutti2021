import { createAction, props } from '@ngrx/store';
import { Ships } from 'src/app/models/ships.model';
import { ShipsResponse } from 'src/app/models/ships.response.model';


export const ListLoading = createAction(
  '[LIST SHIPS] loading list'
);

export const ListSuccess = createAction(
  '[LIST SHIPS] list success',
  props<{ ships: ShipsResponse }>()
);

export const ListFail = createAction(
  '[LIST SHIPS] list fail',
  props<{ error: any }>()
);







