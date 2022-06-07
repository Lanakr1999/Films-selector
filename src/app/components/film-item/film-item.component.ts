import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IFilm} from "../../shared/model/films-app.model";
import {FilmsService} from "../../shared/service/films.service";

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit {

  @Input() film!: IFilm;
  @Output() filmId = new EventEmitter<IFilm>();

  filmById!: IFilm;

  constructor(private filmsService: FilmsService) { }

  ngOnInit(): void {
  }


  getFilmById(filmId: IFilm, id:string): void {
    this.filmsService.getFilmByID(id).subscribe((filmById: IFilm) => {
      this.filmById = filmById;
      this.filmId.emit(filmId);
    });
  }


}
