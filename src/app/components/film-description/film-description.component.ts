import {Component, Input, OnInit} from '@angular/core';
import {FilmsService} from "../../shared/service/films.service";
import {IFilm} from "../../shared/model/films-app.model";

@Component({
  selector: 'app-film-description',
  templateUrl: './film-description.component.html',
  styleUrls: ['./film-description.component.scss']
})
export class FilmDescriptionComponent implements OnInit {

  @Input() filmId!: IFilm;

  constructor() { }


  ngOnInit(): void {
  }

}
