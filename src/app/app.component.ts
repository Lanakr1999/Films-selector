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
  filmId!: IFilm;
  filmsGot: boolean = false;
  isDescriptionActive: boolean = false;
  constructor(){}

  ngOnInit() {

  }

  getFilms(films: IFilm[]) {
    this.filmsGot = true;
    console.log(films);
    return this.films = films;
  }

  getFilmId(filmId: IFilm) {
    this.filmId = filmId;
    this.isDescriptionActive = true;
    console.log(filmId);
  }
}
