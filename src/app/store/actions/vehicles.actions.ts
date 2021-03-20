import { createAction, props } from '@ngrx/store';
import { VehicleResponse } from 'src/app/models/vehicle.response.model';



export const vehicle_list_loading = createAction(
  '[LIST VEHICLE] loading list'
);

export const vehicle_list_success = createAction(
  '[LIST VEHICLE] list success',
  props<{ vehicles: VehicleResponse }>()
);

export const vehicle_list_fail = createAction(
  '[LIST VEHICLE] list fail',
  props<{ error: any }>()
);







