import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import { map, mergeMap, catchError, tap, switchMap } from 'rxjs/operators';
import { ShipsService } from 'src/app/services/ships.service';

import { ListLoading, ListFail, ListSuccess } from '../actions';

@Injectable()
export class ShipsEffects {

  loadships$ = createEffect(() => this.actions$.pipe(
    ofType(ListLoading),
    switchMap(() => this.shipsService.page$),
    tap(page => console.log('page', page)),
    mergeMap((page) => this.shipsService.getShips(page)
      .pipe(
        tap(ships => console.log),
        map(ships => ListSuccess({ ships })),
        catchError(error => of(ListFail({ error })))
      ))


  )
  );


  constructor(
    private actions$: Actions,
    private shipsService: ShipsService
  ) { }
}
