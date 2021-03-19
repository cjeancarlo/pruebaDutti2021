import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { ShipsResponse } from '../models/ships.response.model';
import { Ships } from '../models/ships.model';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  url: string = 'https://swapi.dev/api';
  private cache$: Observable<ShipsResponse>;

  headerDict = {
    'Authorization': 'none',
    'Access-Control-Allow-Origin': '*'
  }
  requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headerDict), 
  };
  
  constructor( private http: HttpClient ) {}


  getPeople(): Observable<any>{

    if (!this.cache$) {
      this.cache$ = this.http.get<any>(`${this.url}/people`).pipe( 
        map( data =>  data )
        );
    
  }
  return this.cache$;
}

  getShips(): Observable<ShipsResponse>{

    if (!this.cache$) {
      this.cache$ = this.http.get<ShipsResponse>(`${this.url}/starships`).pipe( 
        map( data =>  data )
        );
    
  }
  return this.cache$;
}

  public getStarshipId(ship: Ships): string {
    const url = ship.url;
    return url.split('/').filter(item => item !== '').slice(-1)[0];
  }
}
