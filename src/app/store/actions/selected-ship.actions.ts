import { createAction, props } from '@ngrx/store';
import { Ships } from 'src/app/models/ships.model';


export const GetShipLoading = createAction(
  '[LIST SHIPS] get single ships',
  props<{ idShip: string }>()
);

export const GetShipSuccess = createAction(
  '[LIST SHIPS] get ship success',
  props<{ ship: Ships }>()
);


export const GetShipFail = createAction(
  '[LIST SHIPS] get ship fail',
  props<{ error: any }>()
);









