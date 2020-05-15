import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

confirm(message :string ,okcallback: () =>any){
  alertify.confirm( message,(e:any)=> {
    if(e){
      okcallback();
    }
    else{

    }
  });
}

public success(message:string){
  alertify.success(message);
}

public warning(message:string){
  alertify.warning(message);
}

error(message:string){
  alertify.error(message);
}

}
