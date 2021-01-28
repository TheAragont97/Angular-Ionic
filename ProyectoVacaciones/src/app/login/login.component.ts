import { LoginServiceService } from './../servicio/login-service.service';
import { ServicioService } from './../servicio/servicio.service';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
@Injectable()
export class LoginComponent implements OnInit {
  public loginForm:FormGroup;
  public hide:boolean;
  
  constructor(public authService:LoginServiceService ,public service:ServicioService, private router:Router) { 
    this.hide=true;
  }

  getErrorUsuarioMessage(){
    if(this.loginForm.controls.usuario.hasError('required')){
      return 'Tienes que ingresar el usuario.';
    }
  }
  getErrorPassWordMessage(){
    if(this.loginForm.controls.password.hasError('required')){
      return 'Tienes que ingresar la contraseña.';
    }
    if(this.loginForm.controls.password.hasError('minlength')){
      return 'Tienes que ingresar al menos 7 caracteres.';
    }
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        usuario: new FormControl("",[Validators.required]),
        password: new FormControl("",[Validators.required,Validators.minLength(7)])
      }
    );
  }
  
  isLogged(){
    if(!this.loginForm.controls.usuario.hasError('required') && !this.loginForm.controls.password.hasError('required') &&
    !this.loginForm.controls.password.hasError('minlength')){
      this.authService.isLogged(true);
      this.cambioPagina();
    }
    else{
      this.authService.isLogged(false);
    }
  }

  cambioPagina(){
    if(this.authService.validacion){
      this.router.navigate(['/listadoItems']);
    }
  }

  

}
