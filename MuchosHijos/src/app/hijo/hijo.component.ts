import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
    public text:string;
    public colorPrimero:boolean;
    public colorSegundo:boolean;
  constructor() { 
    this.text = "Hola Mundo";
    this.colorPrimero = true;
  }
  cambioColor1(){
    this.colorPrimero=!this.colorPrimero;
    this.colorSegundo=false;
  }
  cambioColor2(){
    this.colorSegundo=!this.colorSegundo;
    this.colorPrimero=true;
  }
  ngOnInit(): void {
  }

}
