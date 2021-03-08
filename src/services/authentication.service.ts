import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl : string = 'https://localhost:44338/api/'
  constructor(private http:HttpClient) { }

  login(Model:any)  {
    return this.http.post(this.baseUrl + 'Account/Login',Model);
  }
}
