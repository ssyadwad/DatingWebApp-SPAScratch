import { Component, OnInit ,Input, Output, EventEmitter } from '@angular/core';
import { UserViewModel } from '../Models/UserViewModel';
import { collectExternalReferences } from '@angular/compiler';
import { AuthenticationService } from 'src/services/authentication.service';


@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {


  @Input() valuesFromHome:any;
  @Output() cancelRegister=new EventEmitter();
  userViewModel:UserViewModel=new UserViewModel();
  constructor(private authService:AuthenticationService) { }

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
      console.log(error);
    })
  }
}
