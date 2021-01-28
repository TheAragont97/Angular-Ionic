import { Component, Input, OnInit } from '@angular/core';
import { PadreComponent } from '../padre/padre.component';

@Component({
  selector: 'hijo',
  template:`
    <div [ngClass]="{'rojo': colorRojo, 'azul': colorAzul, 'verde': colorVerde}"> hola
    </div>
  `,
  styleUrls:['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Input('colorRojo') colorRojo:boolean;
  @Input('colorAzul') colorAzul:boolean;
  @Input('colorVerde') colorVerde:boolean;
  constructor() { 
  }
  ngOnInit(): void {
  }

}
