import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import { map, mergeMap, catchError, tap, switchMap } from 'rxjs/operators';
import { ShipsService } from 'src/app/services/ships.service';

import { list_loading, list_fail, list_success } from '../actions'


@Injectable()
export class shipsEffects {

  loadships$ = createEffect(() => this.actions$.pipe(
    ofType(list_loading),
    switchMap( () => this.shipsService.page$ ),
    tap(page => console.log("page" , page)),
    mergeMap(( page ) => this.shipsService.getShips(page)
    .pipe(
      tap(ships =>     console.log ),
      map(ships =>     list_success({ ships: ships })),
      catchError(error => of(list_fail({ error }))  )
    ))
    
  
  )
  );


  constructor(
    private actions$: Actions,
    private shipsService: ShipsService
  ) { }




}