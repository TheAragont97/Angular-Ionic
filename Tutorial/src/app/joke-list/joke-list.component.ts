import { Component, Input, OnInit, Output } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppModule } from '../app.module';
import { JokeComponent } from '../joke/joke.component';
import { Joke } from '../joke';
@Component({
  selector: 'joke-list',
  template:`
  <joke-form (jokeCreated)="addJoke($event)"></joke-form>
  <joke *ngFor="let j of jokes" [joke]="j" (jokeDeleted)="borrarJoke($event)"></joke>
  `  
})
export class JokeListComponent implements OnInit {
  jokes: Joke[];
  
  constructor() { 
    this.jokes = [
        new Joke("What did the cheese say when it looked in the mirror?","Halloumi (hello me)"),
        new Joke("What kind of cheese do you use to disguise a small horse?","Mask-a-pony (Mascarpone)"),
        new Joke("A kid threw a lump of cheddar at me","I thought ‘That’s not very mature'"),
    ];
  }
  addJoke(joke){
    this.jokes.unshift(joke);
  }
  borrarJoke(joke){
    let posicion = this.jokes.indexOf(joke);
    //console.log(posicion);
    this.jokes.splice(posicion,1);
  }

  ngOnInit(): void {
  }

}


