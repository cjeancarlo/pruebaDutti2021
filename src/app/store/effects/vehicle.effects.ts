import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import { map, mergeMap, catchError, tap, switchMap } from 'rxjs/operators';
import { ShipsService } from 'src/app/services/ships.service';

import { vehicle_list_fail, vehicle_list_loading, vehicle_list_success } from '../actions'
@Injectable()
export class vehicleEffects {


  loadvehicle$ = createEffect(() => this.actions$.pipe(
    ofType(vehicle_list_loading),
    switchMap( () => this.shipsService.page$ ),
    mergeMap((page) => this.shipsService.getVehicles(page)
      .pipe(
        map(vehicle =>     vehicle_list_success({ vehicles: vehicle })),
        catchError(error => of(vehicle_list_fail({ error }))  )
      ))
  )
  );


  constructor(
    private actions$: Actions,
    private shipsService: ShipsService
  ) {  console.log('vehicleEffects');
   }




}