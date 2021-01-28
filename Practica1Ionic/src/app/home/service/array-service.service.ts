import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../course/course';

@Injectable({
  providedIn: 'root'
})
export class ArrayServiceService {
  private course:Course[];
  constructor(private htpp:HttpClient) { 
    this.course=[];
  }
  addCourse(name:string,rating:number){
    this.course.unshift(new Course(name,rating));
  }
  getCourse(){
    return this.course;
  }
}
