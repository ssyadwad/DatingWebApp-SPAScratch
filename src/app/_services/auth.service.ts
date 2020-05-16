import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserViewModel } from '../Models/UserViewModel';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseUrl:string='https://localhost:44359/api/auth/';

jwtHelper=new JwtHelperService();
decodedToken:any;
constructor(private httpClient:HttpClient) { }

login(userViewModel:UserViewModel){
  return this.httpClient.post(this.baseUrl+'login',userViewModel)
  .pipe(
    map((response:any)=>{
        const user=response;
        if(user){
          localStorage.setItem('token',user.token);
          this.decodedToken=this.jwtHelper.decodeToken(user.token);
          console.log(this.decodedToken);
        }
    })
  )
}

register(userViewModel:UserViewModel){
  return this.httpClient.post(this.baseUrl+'Register',userViewModel);
}

loggedIn(){
  const token=localStorage.getItem('token');

  return !this.jwtHelper.isTokenExpired(token);
}

}

