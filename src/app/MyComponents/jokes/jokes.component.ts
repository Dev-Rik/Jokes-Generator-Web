import { Component } from '@angular/core';
import { JokesService } from 'src/app/jokes.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent {
  joke = "";

  constructor(private jokesService: JokesService){
  }

  getJoke()
  {
    this.jokesService.get().subscribe(Response => {
      this.joke = Response.joke;

    });
  }
}
