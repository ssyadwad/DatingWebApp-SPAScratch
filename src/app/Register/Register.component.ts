import { Component, OnInit ,Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { UserViewModel } from '../Models/UserViewModel';
import { collectExternalReferences } from '@angular/compiler';


@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() valuesFromHome:any;
  @Output() cancelRegister=new EventEmitter();
  userViewModel:UserViewModel=new UserViewModel();
  constructor(private authService:AuthService) { }

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
