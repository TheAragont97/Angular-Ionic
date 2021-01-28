import { Course } from './course/course';
import { Component, Input } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ArrayServiceService } from './service/array-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public formulario:FormGroup;
  public courses:any;
  constructor(public service:ArrayServiceService) {}
  ngOnInit(): void {
    this.formulario= new FormGroup({
      course: new FormControl("",[Validators.required]),
      rating: new FormControl("",[Validators.required])
    });
    this.courses=this.service.getCourse();
  }
  comprobar(course:string,rating:number){
    if(this.formulario.controls.course.value!=undefined && this.formulario.controls.rating.value!=undefined){
      if(this.formulario.controls.rating.value<=5){
        this.service.addCourse(course,rating);
      }
      else{
        console.log("Datos erroneos");        
      }
    }
  }
}
