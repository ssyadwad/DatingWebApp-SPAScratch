import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode:boolean=false;
  public values:any;
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  registerMod() : void{
    console.log("clicked Regisered!!")
    this.registerMode=true;
  }

  getValues(){
    this.httpClient.get("https://localhost:44338/api/values").subscribe(response=>{
      this.values=response
      
    },err=>{
      console.log(err);
    });
  }

  OnCancelRegister(registerMode:boolean):void{
    this.registerMode=registerMode;
  }
}
