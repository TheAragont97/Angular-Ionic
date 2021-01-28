import { Component, Input, OnInit } from '@angular/core';
import { Course } from './course';
import { ArrayServiceService } from '../service/array-service.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  @Input('course') course:Course;
  constructor(public service:ArrayServiceService) { }

  ngOnInit() {}

}
