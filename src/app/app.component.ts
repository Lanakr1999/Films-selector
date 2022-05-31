import { Component, OnInit } from '@angular/core';
import { IFilm } from './shared/model/films-app.model';
import { FilmsService } from './shared/service/films.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(){}

  ngOnInit() {

  }
}
