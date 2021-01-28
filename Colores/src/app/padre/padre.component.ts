import { NgClass } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {NgModule} from '@angular/core';
import {AppModule} from '../app.module';
@Component({
  selector: 'padre',
  template:`
  <div>
    <button type="button"
    (click)="cambioRojo()">Botón Rojo
    </button>
    <button type="button"
    (click)="cambioAzul()">Botón Azul
    </button>
    <button type="button"
    (click)="cambioVerde()">Botón Verde
    </button>
    <hijo [colorRojo]="rojo" 
          [colorAzul]="azul" 
          [colorVerde]="verde"></hijo>
  </div>
    
  `,
  styleUrls:['./padre.component.css']
})
export class PadreComponent implements OnInit {
  
  rojo=false;
  azul=false;
  verde=false;
  constructor() { 
  }

  cambioRojo(){
    this.rojo = !this.rojo;
    this.azul = false;
    this.verde = false;
  }
  cambioAzul(){
    this.azul = !this.azul;
    this.rojo = false;
    this.verde = false;
  }
  cambioVerde(){
    this.verde = !this.verde;
    this.rojo = false;
    this.azul = false;
  }
  ngOnInit(): void {
  }

}
