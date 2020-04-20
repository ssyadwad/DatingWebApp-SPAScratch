import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserViewModel } from '../Models/UserViewModel';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseUrl:string='https://localhost:44359/api/auth/';
constructor(private httpClient:HttpClient) { }

login(userViewModel:UserViewModel){
  return this.httpClient.post(this.baseUrl+'login',userViewModel)
  .pipe(
    map((response:any)=>{
        const user=response;
        if(user){
          localStorage.setItem('token',user.token);
        }
    })
  )
}

register(userViewModel:UserViewModel){
  return this.httpClient.post(this.baseUrl+'Register',userViewModel);
}

}

