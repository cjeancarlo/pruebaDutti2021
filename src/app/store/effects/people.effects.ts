import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import { map, mergeMap, catchError, tap, switchMap } from 'rxjs/operators';
import { ShipsService } from 'src/app/services/ships.service';

import { people_list_fail, people_list_loading, people_list_success } from '../actions'


@Injectable()
export class peopleEffects {


  loadpeople$ = createEffect(() => this.actions$.pipe(
    ofType(people_list_loading),
    switchMap( () => this.shipsService.page$ ),
    mergeMap((page) => this.shipsService.getPeople(page)
      .pipe(
        tap(people =>     console.log("people", people) ),
        map(people =>     people_list_success({ people: people })),
        catchError(error => of(people_list_fail({ error }))  )
      ))
  )
  );


  constructor(
    private actions$: Actions,
    private shipsService: ShipsService
  ) {  console.log('peopleEffects');
   }




}