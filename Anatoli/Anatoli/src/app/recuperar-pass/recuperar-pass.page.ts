import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ServiceLoginService } from '../services/service-login.service';

@Component({
  selector: 'app-recuperar-pass',
  templateUrl: './recuperar-pass.page.html',
  styleUrls: ['./recuperar-pass.page.scss'],
})
export class RecuperarPassPage implements OnInit {
  public loginForm:FormGroup;
  constructor(private nav:NavController, private auth:ServiceLoginService) {
    this.loginForm= new FormGroup({
      email:new FormControl("",[Validators.required,Validators.email])
    }); 
  }

  //resetear contraseña
  async resetearPass(email){
    try{
      if(this.loginForm.controls.email.value!=undefined && this.loginForm.controls.email.value!=""){
        await this.auth.resetPassword(email.value);
        this.nav.navigateForward("/home");
      }
      else{
        //console.log("Datos erroneos");
      }
    }
    catch(error){//console.log("Error: ",error);
    }
    
  }

  async comprobar(){
    
    
  }

  ngOnInit() {
  }

}
