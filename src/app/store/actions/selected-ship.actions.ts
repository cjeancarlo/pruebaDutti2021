import { createAction, props } from '@ngrx/store';
import { Ships } from 'src/app/models/ships.model';


export const get_ship_loading = createAction(
  '[LIST SHIPS] get single ships',
  props<{ idShip: string }>()
);

export const get_ship_success = createAction(
  '[LIST SHIPS] get ship success',
  props<{ ship: Ships }>()
);


export const get_ship_fail = createAction(
  '[LIST SHIPS] get ship fail',
  props<{ error: any }>()
);









