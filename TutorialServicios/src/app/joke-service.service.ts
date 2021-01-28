import { Injectable } from '@angular/core';
import { Joke } from './joke';

@Injectable({
  providedIn: 'root'
})
export class JokeServiceService {
  private jokes:Joke[];
  constructor() { 
    this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror?","Halloumi (hello me)"),
      new Joke("What kind of cheese do you use to disguise a small horse?","Mask-a-pony (Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me","I thought ‘That’s not very mature'"),
    ];
  }
  addJoke(setup:string,punchline:string){
    this.jokes.unshift(new Joke(setup,punchline));
  }
  deleteJoke(joke){
    let posicion = this.jokes.indexOf(joke);
    //console.log(posicion);
    this.jokes.splice(posicion,1);
  }
  getJoke(){
    return this.jokes;
  }
}
