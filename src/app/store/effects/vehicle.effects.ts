import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import { map, mergeMap, catchError, tap, switchMap } from 'rxjs/operators';
import { ShipsService } from 'src/app/services/ships.service';

import { VehicleListFail, VehicleListLoading, VehicleListSuccess } from '../actions';
@Injectable()
export class VehicleEffects {


  loadvehicle$ = createEffect(() => this.actions$.pipe(
    ofType(VehicleListLoading),
    switchMap( () => this.shipsService.page$ ),
    mergeMap((page) => this.shipsService.getVehicles(page)
      .pipe(
        map(vehicle =>     VehicleListSuccess({ vehicles: vehicle })),
        catchError(error => of(VehicleListFail({ error }))  )
      ))
  )
  );


  constructor(
    private actions$: Actions,
    private shipsService: ShipsService
  ) {  }

}
