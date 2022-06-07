import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {IFilm, IFilmResponse} from '../model/films-app.model';

const API_URL = "http://www.omdbapi.com";
const API_KEY = "bbb03ceb";

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }

  getFilmsByTitle(title: string, type: string): Observable<IFilmResponse> {
    return this.http.get<IFilmResponse>(`${API_URL}/?&apikey=${API_KEY}&s=${title}&type=${type}`);
  }
  getFilmByID(id: string): Observable<IFilm> {
    return this.http.get<IFilm>(`${API_URL}/?apikey=${API_KEY}&i=${id}`);
  }
}
