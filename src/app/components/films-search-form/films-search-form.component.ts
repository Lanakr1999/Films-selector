import { Component, OnInit } from '@angular/core';
import { IFilm } from 'src/app/shared/model/films-app.model';
import { FilmsService } from 'src/app/shared/service/films.service';

@Component({
  selector: 'app-films-search-form',
  templateUrl: './films-search-form.component.html',
  styleUrls: ['./films-search-form.component.scss']
})
export class FilmsSearchFormComponent implements OnInit {

  inputValue: string = '';
  films: IFilm[] = [];

  constructor(private filmsService: FilmsService) { }

  ngOnInit(): void {
  }

  getFilms(): void {
    this.filmsService.getFilmsByTitle(this.inputValue).subscribe((films: IFilm[]) => {
      this.films = films;
    })
  }


}
