import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UserModel } from '../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private APIKEY = 'AIzaSyAJEylq7byVlxqu1-QDuAABQTUnIcR1HlQ';
  private token: string;

  constructor(private http: HttpClient) {
    this.readToken();
  }

  newUser(usuario: UserModel) {

    const auth = {
      ...usuario,
      returnSecureToken: true
    }
    return this.http.post(`${this.url}signUp?key=${this.APIKEY}`, auth)
      .pipe(
        map(response => {
          this.saveToken(response['idToken'])
          return response;

        })
      );

  }

  login(usuario: UserModel) {

    const auth = {
      ...usuario,
      returnSecureToken: true
    }
    return this.http.post(`${this.url}signInWithPassword?key=${this.APIKEY}`, auth).pipe(
      map(response => {
        this.saveToken(response['idToken'])
        return response;

      })
    );
  }

  private saveToken(idToken: string) {
    this.token = idToken;
    localStorage.setItem('token', idToken);

    const today = new Date();
    today.setSeconds(3600);

    localStorage.setItem('expired', today.getTime().toString() );
    

  }

  readToken() {
    this.token = (localStorage.getItem('token')) ? localStorage.getItem('token') : '';
  }

  isAuth(): boolean {

    const expired  = Number(localStorage.getItem('expired'));
    const expiredDate = new Date();
    expiredDate.setTime(expired);

    if (this.token.length < 2 ) {
      
      return false;
    }
  console.log(expiredDate > new Date ());
    return   (expiredDate > new Date () ) ?  true : false;
    
  }

  logOut() {
      localStorage.removeItem('token');
   }

}
