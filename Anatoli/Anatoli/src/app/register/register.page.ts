import { ServiceLoginService } from './../services/service-login.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  providers:[ServiceLoginService],
})
export class RegisterPage implements OnInit {
  public loginForm:FormGroup;
  public igual_pass:boolean=true;
  @ViewChild('passwordEyeRegister') passwordEye;
  // Seleccionamos el elemento con el nombre que le pusimos con el #
  passwordTypeInput  =  'password';
  // Variable para cambiar dinamicamente el tipo de Input que por defecto sera 'password'
  iconpassword  =  'eye-off';
  @ViewChild('passwordEyeRegister') passwordEye2;
  // Seleccionamos el elemento con el nombre que le pusimos con el #
  passwordTypeInput2  =  'password';
  // Variable para cambiar dinamicamente el tipo de Input que por defecto sera 'password'
  iconpassword2  =  'eye-off';
  constructor(private nav:NavController, private auth:ServiceLoginService) { 
    this.loginForm= new FormGroup({
      email: new FormControl("",[Validators.required,Validators.email]),
      password: new FormControl("",[Validators.required,Validators.minLength(8)]),
      password2: new FormControl("",[Validators.required,Validators.minLength(8)]),
      nombre: new FormControl("",[Validators.required])
    });
  }
  

  // Esta función verifica si el tipo de campo es texto lo cambia a password y viceversa, además verificara el icono si es 'eye-off' lo cambiara a 'eye' y viceversa
  togglePasswordMode() {
      try{
        this.passwordTypeInput  =  this.passwordTypeInput  ===  'text'  ?  'password'  :  'text';
      this.iconpassword  =  this.iconpassword  ===  'eye-off'  ?  'eye'  :  'eye-off';
      this.passwordEye.el.setFocus();
      }
      catch{
        //console.log("");
      }
  }
  // Esta función verifica si el tipo de campo es texto lo cambia a password y viceversa, además verificara el icono si es 'eye-off' lo cambiara a 'eye' y viceversa
  togglePasswordMode2() {
    try{
      this.passwordTypeInput2  =  this.passwordTypeInput2  ===  'text'  ?  'password'  :  'text';
    this.iconpassword2  =  this.iconpassword2  ===  'eye-off'  ?  'eye'  :  'eye-off';
    this.passwordEye2.el.setFocus();
    }
    catch{
      //console.log("");
    }
}
  async registrar(){
    const { email, password, nombre } = this.loginForm.value;
    if(this.loginForm.controls.email.value!=undefined && 
      this.loginForm.controls.password.value!=undefined &&
      this.loginForm.controls.password2.value!=undefined &&
      this.loginForm.controls.nombre.value!=undefined && this.loginForm.controls.email.value!="" && this.loginForm.controls.password.value!="" && this.loginForm.controls.password2.value!="" && this.loginForm.controls.nombre.value!=""){
        if(this.loginForm.controls.password.value==this.loginForm.controls.password2.value){
          this.igual_pass=true;
          /*this.auth.register(this.loginForm.controls.email.value,this.loginForm.controls.password.value);*/
          const user = await this.auth.register(email, password);
          if(user){
            this.auth.nombreUser(nombre);
            this.nav.navigateForward("/home");
          }
        }
        else{
          this.igual_pass=false;
        }
    }
    else{
      //console.log("Datos erroneos");
    }
  }
  ngOnInit() {
  }

}
