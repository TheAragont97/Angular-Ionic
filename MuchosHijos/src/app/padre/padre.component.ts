import { Component, OnInit } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  public hide:boolean;
  public hijos: HijoComponent[];
  constructor() {
    this.hide=true;
    this.hijos = [];
    this.crearHijos()
  }
  toggle(){
   this.hide = !this.hide; 
  }
  crearHijos(){
    for(let i=0;i<101;i++){
      this.hijos.push(new HijoComponent());
    }
  }
  ngOnInit(): void {
    
  }

}
