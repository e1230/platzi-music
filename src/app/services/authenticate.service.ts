import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  constructor(private storage:Storage) { }

  loginUser(credentials){
    return new Promise((accept,reject) =>{
      if(
        credentials.email =="emaurobel1230@hotmail.com" &&
        credentials.password =="850518"
      ){
        accept("login correcto");
      }else{
        reject("login incorrecto");
      }
    });
  };
  register(userData){
    return this.storage.set("user",userData);
  }
}
