import { Component, OnInit } from '@angular/core';
import { UserViewModel } from '../Models/UserViewModel';
import { AuthService } from '../_services/auth.service';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public userViewModel:UserViewModel=new UserViewModel();
  code:string;
  model:any={};
  constructor(private authService:AuthService) { }

  ngOnInit() {
    
    var query= "https://siemens-qa-bt-010.eu.auth0.com/authorize?client_id=KscJVBaPacz6yIY8JdSMJiEFC6Aw1jyr&response_type=code&redirect_uri=https://md2m0zpc.ad001.siemens.net:450/FlexClient/#/loginpage&scope=openid profile email&connection=main-tenant-oidc";
    let paramValue;
    if (query.includes('?')) {
      const httpParams = new HttpParams({ fromString: query.split('?')[1] });
    paramValue = httpParams.get('client_id');
    console.log(paramValue.split('&')[0]);
      console.log(window.location.href);
    }

  }

  public login(){
   
    this.authService.login(this.userViewModel).subscribe({
      next(){},error(){}
      
    });
    console.log(this.userViewModel);
  }

  loggedIn(){
   return !! localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.userViewModel.userName="";
    this.userViewModel.password="";
  }
}
