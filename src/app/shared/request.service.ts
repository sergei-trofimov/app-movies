import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { MovieI } from "./types/movie.type";

@Injectable({ providedIn: 'root' })
export class RequestService {
  private OMDB_URL = 'https://www.omdbapi.com/?apikey=2dfeee8&';
  private DB_URL = 'http://localhost:3000/'
  constructor(private http: HttpClient) {}

  //    this.request.getMovieFromOMDB('t=', 'the_avengers').subscribe((res) => console.log(res))

  public getMovieFromOMDB(method: string, title: string): Observable<MovieI> {
    return this.http.get<MovieI>(this.OMDB_URL + method + title);
  }

  public getPopularMoviesFromDB(limit: number): Observable<MovieI[]> {
    return this.http.get<MovieI[]>(this.DB_URL + `movies/?_limit=${limit}`);
  }
}
