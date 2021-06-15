import { ServiceLoginService } from './../services/service-login.service';
import { RouterModule } from '@angular/router';
//import { FalsoBackEndService } from './../falso-back-end.service';
import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers:[ServiceLoginService],
})
export class HomePage {
  public loginForm:FormGroup;
  public user:any;
  // Importar el ViewChild para acceder a un elemento del DOM

  @ViewChild('passwordEyeRegister') passwordEye;
  // Seleccionamos el elemento con el nombre que le pusimos con el #
  passwordTypeInput  =  'password';
  // Variable para cambiar dinamicamente el tipo de Input que por defecto sera 'password'
  iconpassword  =  'eye-off';
  constructor(private nav:NavController, private auth:ServiceLoginService,/*public service:FalsoBackEndService*/) {
    this.loginForm= new FormGroup({
      email:new FormControl("",[Validators.required,Validators.email]),
      password: new FormControl("",[Validators.required])
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
    }
  }
  /*registrarse(){
    this.nav.navigateForward("/register");
  }*/
  //resetear contraseña
  resetearPass(){
    this.nav.navigateForward("/recuperar-pass");
  }
  //metodo para llamar al loginGoogle del servicio y verificar el email
  async onGoogleLogin(){
    // to the service
    try{
      const user= await this.auth.loginGoogle();
      if(user){
        const isVerified = this.auth.isEmailVerified(user);
          if(isVerified){
            this.nav.navigateForward("/tabs");
          }
          else{
            this.nav.navigateForward("/verificado-email");
          }
      }
    }
    catch(error){
      //console.log(error);
    }
  }
  //metodo para comprobar si el email y la contraseña estan correctos
  async comprobar(){
    //console.log('Form->',this.loginForm.value);
    const {email, password} = this.loginForm.value;
    try{
      if(this.loginForm.controls.email.value!=undefined && this.loginForm.controls.password.value!=undefined && this.loginForm.controls.email.value!="" && this.loginForm.controls.password.value!=""){
        const user = await this.auth.login(email,password);
        if(user){
          const isVerified = this.auth.isEmailVerified(user);
          if(isVerified){
            this.nav.navigateForward("/tabs");
          }
          else{
            this.nav.navigateForward("/verificado-email");
          }
        }else{
          /*console.log("Datos erroneos ",email,password);
          console.log("User->",user)*/
        }
        /*this.user=this.service.getUsers();
        this.user.forEach(element => {
          if(element['user']==usuario && element['pass']==password){
            this.nav.navigateForward(`/libro-id/${ element['libros'] }`);
            console.log(element['libros']);
          }
        });*/
      }
      else{
        //console.log("Datos erroneos");
      }
    }
    catch(error){//console.log("Error: ",error);
    }
  }
  //metodo para enviar mensajes
  sendMessage(){
    //mandamos el correo al usuario
  }
}
