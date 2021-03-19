import { createAction, props } from '@ngrx/store';
import { Vehicle } from 'src/app/models/vehicle.model';



export const vehicle_list_loading = createAction(
  '[LIST VEHICLE] loading list'
);

export const vehicle_list_success = createAction(
  '[LIST VEHICLE] list success',
  props<{ vehicles: Vehicle[] }>()
);

export const vehicle_list_fail = createAction(
  '[LIST VEHICLE] list fail',
  props<{ error: any }>()
);







