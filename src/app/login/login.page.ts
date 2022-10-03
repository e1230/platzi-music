import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  validation_messages = {
    email: [
      {type: "required", message: "email requerido"},
      {type: "pattern", message: "email no válido"}
    ],
    password: [
      {type: "required", message: "password requerido"},
      {type: "minLength", message: "password muy corto"}
    ]
  }

  errorMessage: string = "";
  constructor(private formBuilder: FormBuilder, private authService: AuthenticateService, private navCtrl: NavController, private storage: Storage) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl("",Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),

      ])),
      password: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ]))
    })
  }

  loginUser(credentials){
    this.authService.loginUser(credentials).then(
      res => {
        this.errorMessage = "";
        this.storage.set("isUserLoggedIn",true)
        this.navCtrl.navigateForward("/menu/home");
      }
    ).catch(err=>{
      this.errorMessage = err
    });
  }

  goToRegister(){
    this.navCtrl.navigateForward("/register");
  };

  async ngOnInit() {
    await this.storage.create();
  }

}
