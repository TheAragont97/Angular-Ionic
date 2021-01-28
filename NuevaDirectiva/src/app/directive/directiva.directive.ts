import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[directivaImagen]'
})
export class DirectivaDirective {

  constructor(private el:ElementRef) { }

  
}
