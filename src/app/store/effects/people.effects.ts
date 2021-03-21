import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import { map, mergeMap, catchError, tap, switchMap } from 'rxjs/operators';
import { ShipsService } from 'src/app/services/ships.service';

import { PeopleListFail, PeopleListLoading, PeopleListSuccess } from '../actions';
@Injectable()
export class PeopleEffects {


  loadpeople$ = createEffect(() => this.actions$.pipe(
    ofType(PeopleListLoading),
    switchMap(() => this.shipsService.page$),
    mergeMap((page) => this.shipsService.getPeople(page)
      .pipe(
        tap(people => console.log('people', people)),
        map(people => PeopleListSuccess({ people })),
        catchError(error => of(PeopleListFail({ error })))
      ))
  )
  );

  constructor(
    private actions$: Actions,
    private shipsService: ShipsService
  ) {  }

}
