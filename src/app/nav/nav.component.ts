import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/services/authentication.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  Model : any= {}
  loggedin : Boolean = false;
  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    console.log(this.Model);
    this.authenticationService.login(this.Model).subscribe(response=>{
      console.log(response)
      this.loggedin=true;
    },error=>{
      console.log(error)
    });
    
  }
  loggedIn() {
    
    return this.loggedin;
 
   }
  logout(){

    this.Model.userName="";
    this.Model.password=""; 
    this.loggedin=false;
  }

}
