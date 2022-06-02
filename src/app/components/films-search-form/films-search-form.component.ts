import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IFilm, IFilmResponse} from 'src/app/shared/model/films-app.model';
import { FilmsService } from 'src/app/shared/service/films.service';

interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-films-search-form',
  templateUrl: './films-search-form.component.html',
  styleUrls: ['./films-search-form.component.scss']
})
export class FilmsSearchFormComponent implements OnInit {

  types: Type[] = [
    {value: 'movie', viewValue: 'Movie'},
    {value: 'series', viewValue: 'Series'},
    {value: 'episode', viewValue: 'Episode'},
  ]

  inputValue: string = '';
  selectorValue: string = '';
  films: IFilm[] = [];
  filmsResponse!: IFilmResponse;
  @Output() sendFilms = new EventEmitter<IFilm[]>();

  constructor(private filmsService: FilmsService) { }

  ngOnInit(): void {
  }

  bringFilms(value: any) {
    this.sendFilms.emit(value);
  }

  getFilms(): void {
    this.filmsService.getFilmsByTitle(this.inputValue, this.selectorValue).subscribe((filmsResponse: IFilmResponse) => {
      this.filmsResponse = filmsResponse;
      this.films = this.filmsResponse.Search;
      this.bringFilms(this.films);
    })
  }

  activeSelector(type: string){
    this.selectorValue = type;
  }




}
