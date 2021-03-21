import { createAction, props } from '@ngrx/store';
import { VehicleResponse } from 'src/app/models/vehicle.response.model';



export const VehicleListLoading = createAction(
  '[LIST VEHICLE] loading list'
);

export const VehicleListSuccess = createAction(
  '[LIST VEHICLE] list success',
  props<{ vehicles: VehicleResponse }>()
);

export const VehicleListFail = createAction(
  '[LIST VEHICLE] list fail',
  props<{ error: any }>()
);







