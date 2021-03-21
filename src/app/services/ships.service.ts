import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject,  Observable } from 'rxjs';
import { catchError, map,  publishReplay, refCount } from 'rxjs/operators';
import { ShipsResponse } from '../models/ships.response.model';
import { Ships } from '../models/ships.model';
import { PeopleResponse } from '../models/people.response.model';
import { Person } from '../models/person.model';
import { VehicleResponse } from '../models/vehicle.response.model';
import { Vehicle } from '../models/vehicle.model';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducers';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  url = 'https://swapi.dev/api';

  page = new BehaviorSubject(1);
  page$ = this.page.asObservable();

  private cache: {
    ships$?: Observable<any>
    people$?: Observable<any>;
    vehicle$?: Observable<any>;
  } = {};

  headerDict = {
    Authorization: 'none',
    'Access-Control-Allow-Origin': '*'
  };

  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  constructor(private http: HttpClient, private store: Store<AppState>) { }

  getPeople(page: number = 1): Observable<PeopleResponse> {
    // if (!this.cache.people$) {
    this.cache.people$ = this.getRequest(`people/?page=${page}`);
    // }
    return this.cache.people$ as Observable<PeopleResponse>;
  }

  getShips(page: number = 1): Observable<ShipsResponse> {
    // if (!this.cache.ships$) {
    this.cache.ships$ = this.getRequest(`starships/?page=${page}`);
    // }
    return this.cache.ships$ as Observable<ShipsResponse>;
  }


  getVehicles(page: number = 1): Observable<VehicleResponse> {
    // if (!this.cache.vehicle$) {
    this.cache.vehicle$ = this.getRequest(`vehicles/?page=${page}`);
    // }
    return this.cache.vehicle$ as Observable<VehicleResponse>;
  }



  private getRequest(url: string, fullUrl = false): Observable<any> {

    const evalUrl = !fullUrl ? `${this.url}/${url}` : url;

    return this.http.get<any>(evalUrl).pipe(
      //   expand((data, i) => {
      //     return data.next ? this.getPage(data.next) : EMPTY;
      // }),
      map(data => data),
      publishReplay(1), // this tells Rx to cache the latest emitted
      refCount(), // and this tells Rx to keep the Observable alive as long as there are any Subscribers
      catchError(error => (error))
    );

  }
  public getObjId(object: Ships | Person | Vehicle): string {
    const url = object.url;
    return url.split('/').filter(item => item !== '').slice(-1)[0];
  }

  public getObjIdFromString(url: string): string {
    return url.split('/').filter(item => item !== '').slice(-1)[0];
  }
}
