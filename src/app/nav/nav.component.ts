import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/services/authentication.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  Model : any= {}
  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    console.log(this.Model);
    this.authenticationService.login(this.Model).subscribe(response=>{
      console.log(response)
    },error=>{
      console.log(error)
    });
    
  }

}
