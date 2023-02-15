import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl : string = environment.baseUrl
  private _auth : Auth | undefined
  get auth(){
    return {...this._auth}
  }

  constructor( private http: HttpClient) { }

  login(){
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
        .pipe(
          tap(resp => this._auth = resp),
          tap(auth => localStorage.setItem('id', auth.id))
        );
  }
}
