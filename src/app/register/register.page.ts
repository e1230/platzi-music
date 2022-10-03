import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  validation_messages = {
    email: [
      {type: "required", message: "email requerido"},
      {type: "pattern", message: "email no válido"}
    ],
    password: [
      {type: "required", message: "password requerido"},
      {type: "minLength", message: "password muy corto"}
    ],
    first_name: [
      {type: "required", message: "nombre es requerido"},
      {type: "pattern", message: "nombre no válido"}
    ],
    last_name: [
      {type: "required", message: "apellido es requerido"},
      {type: "pattern", message: "apellido no válido"}
    ],
  }

  errorMessage: string = "";
  constructor(private formBuilder: FormBuilder, private authService: AuthenticateService, private navCtrl: NavController, private storage: Storage) {
    this.registerForm = this.formBuilder.group({
      email: new FormControl("",Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),

      ])),
      password: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      first_name: new FormControl("",Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-zÑñáéíóúüÁÉÍÓÚÜ\s]+'),
      ])),
      last_name: new FormControl("",Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-zÑñáéíóúüÁÉÍÓÚÜ\s]+'),
      ])),
    })
  }
  goToLogin(){
    this.navCtrl.navigateBack("/login");
  }

  register(userData){
    userData.password = btoa(userData.password); //convertir a base 64 como seguridad
    this.authService.register(userData).then(res => {
      this.navCtrl.navigateBack("/login");
    });
  }
  async ngOnInit() {
    await this.storage.create();
  };

}
