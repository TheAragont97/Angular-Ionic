import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  constructor(private nav:NavController) { }

  ngOnInit() {
    setTimeout(()=>{               
      this.nav.navigateForward('/home');
    }, 3000);
  }

}
