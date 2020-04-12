import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Value',
  templateUrl: './Value.component.html',
  styleUrls: ['./Value.component.css']
})
export class ValueComponent implements OnInit {

  public values:any;
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  getValues(){
    this.httpClient.get("https://localhost:44359/api/values").subscribe(response=>{
      this.values=response
      
    },err=>{
      console.log(err);
    });
  }

}
