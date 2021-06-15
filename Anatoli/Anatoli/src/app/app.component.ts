import { ServiceLoginService } from './services/service-login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers:[ServiceLoginService]
})
export class AppComponent {
  public usuario:string;
  public user:any;

  constructor(private auth:ServiceLoginService) {}

  async ngOnInit(){
    //console.log("User->",this.user);
    this.user= await this.auth.getCurrentUser();
    if(this.user){
      this.usuario=this.user.email+"";
    }
  }
  
  cerrarSesion(){
    this.auth.logout();
  }
}
