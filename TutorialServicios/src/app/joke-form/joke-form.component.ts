import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JokeServiceService } from '../joke-service.service';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.scss']
})
export class JokeFormComponent implements OnInit {
  public jokeForm:FormGroup;
  constructor(public joke:JokeServiceService) { }

  ngOnInit(): void {
    this.jokeForm = new FormGroup(
      {
        setup: new FormControl("",[Validators.required,Validators.minLength(6)]),
        punchline : new FormControl("",[Validators.required,Validators.minLength(6)])
      }
    )
  }

}
