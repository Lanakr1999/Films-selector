import {Component, Input, OnInit} from '@angular/core';
import { IFilm } from './shared/model/films-app.model';
import { FilmsService } from './shared/service/films.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  films: IFilm[] = [];
  filmsGot: boolean = false;
  constructor(){}

  ngOnInit() {

  }

  getFilms(films: IFilm[]) {
    this.filmsGot = true;
    console.log(films);
    return this.films = films;
  }
}
