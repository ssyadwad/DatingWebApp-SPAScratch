import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { UserViewModel } from 'src/app/Models/UserViewModel';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl : string = 'https://localhost:44338/api/'
  constructor(private http:HttpClient) { }

  login(Model:any)  {
    return this.http.post(this.baseUrl + 'Account/Login',Model).pipe(
      map((response : any)=>{
        const user=response;
        if(user){
          localStorage.setItem('user',JSON.stringify(user));
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(userViewModel:UserViewModel){
    return this.http.post(this.baseUrl + 'Account/Register',userViewModel).pipe(map((response:any)=>{
      const user=response;
      if(user){
        console.log("Registration Successful");
      }
    }))
  }
}
