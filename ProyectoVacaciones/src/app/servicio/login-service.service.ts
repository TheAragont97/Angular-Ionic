import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  public validacion:any;

  constructor(){}
  
  isLogged(reciboValoracion:boolean){
    this.validacion=reciboValoracion;
    return this.validacion;
  }
  comprobacion(){
    if(this.validacion){
      return true;
    }
    else{
      return false;
    }

  }
}
