import { ServicioService } from './../servicios/servicio.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm:FormGroup;
  constructor(public service:ServicioService,private router:Router) { }
  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        usuario: new FormControl("",[Validators.required]),
        password: new FormControl("",[Validators.required,Validators.minLength(8)])
      }
    );
  }
  comprobador(){
    if(this.loginForm.controls.usuario.value != undefined && this.loginForm.controls.password.value != undefined){
      this.router.navigate(['/listaNoticias']);
    }
    else{
      console.log('Datos Incorrectos');
    }
  }
}
