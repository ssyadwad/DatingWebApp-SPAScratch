import { Component, OnInit ,Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { UserViewModel } from '../Models/UserViewModel';
import { collectExternalReferences } from '@angular/compiler';
import { AlertifyService } from '../_services/alertify.service';


@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {


  @Input() valuesFromHome:any;
  @Output() cancelRegister=new EventEmitter();
  userViewModel:UserViewModel=new UserViewModel();
  constructor(private authService:AuthService,private alertify:AlertifyService) { }

  ngOnInit() {
  }
  cancelRegisterMode(): void{
this.cancelRegister.emit(false);
  }

  register() {
    console.log(this.userViewModel);
    this.authService.register(this.userViewModel).subscribe(()=>{
      console.log('Registration Succesful!!')
    },error=>{
      this.alertify.error(error);
      this.alertify.error(error["UserName"][0]);
      this.alertify.error(error["Password"][0]);
    })
  }
}
