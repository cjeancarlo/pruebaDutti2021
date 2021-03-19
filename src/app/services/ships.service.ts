import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of, zip } from 'rxjs';
import { catchError, map, mergeMap, publishReplay, refCount, switchMap, tap, toArray } from 'rxjs/operators'
import { ShipsResponse } from '../models/ships.response.model';
import { Ships } from '../models/ships.model';
import { PeopleResponse } from '../models/people.response.model';
import { Person } from '../models/person.model';
import { VehicleResponse } from '../models/vehicle.response.model';
import { Vehicle } from '../models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  url: string = 'https://swapi.dev/api';

  private cache:{
    ships$?: Observable<any>
    people$?: Observable<any>;
    vehicle$?: Observable<any>;
  } = {};
  
  headerDict = {
    'Authorization': 'none',
    'Access-Control-Allow-Origin': '*'
  }

  requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headerDict), 
  };
  
  constructor( private http: HttpClient ) {}

  getPeople(): Observable<PeopleResponse> {
      if (!this.cache.people$) {
        this.cache.people$ = this.getRequest('people')
      }
      return this.cache.people$ as Observable<PeopleResponse>;
  }

  getShips(): Observable<ShipsResponse> {
    if (!this.cache.ships$) {
        this.cache.ships$ = this.getRequest('starships');
    }
    return this.cache.ships$ as Observable<ShipsResponse>;
  }


  getVehicles(): Observable<VehicleResponse> {
    if (!this.cache.vehicle$) {
        this.cache.vehicle$ = this.getRequest('vehicles');
    }
    return this.cache.vehicle$ as Observable<VehicleResponse>;
  }

  

  private getRequest(url: string, fullUrl =  false): Observable<any> {

    const _url = !fullUrl ? `${this.url}/${url}`:  url;

    return this.http.get<any>( _url).pipe( 
    map( data =>  data ),
    publishReplay(1), // this tells Rx to cache the latest emitted
    refCount(), // and this tells Rx to keep the Observable alive as long as there are any Subscribers
    catchError(error => (error))
  );

  } 
  public getObjId(object: Ships | Person | Vehicle ): string {
    const url = object.url;
    return url.split('/').filter(item => item !== '').slice(-1)[0];
  }

  public getObjIdFromString(url: string ): string {
    return url.split('/').filter(item => item !== '').slice(-1)[0];
  }

  

}

