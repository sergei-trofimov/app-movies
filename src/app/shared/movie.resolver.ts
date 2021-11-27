import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { skip, take } from 'rxjs/operators';
import { getPopularMovies } from '../main/store/main.actions';
import { getPopularMoviesSelector } from '../main/store/main.selectors';
import { AppStateI } from '../store/app.reducer';
import { MovieI } from './types/movie.type';

@Injectable({ providedIn: 'root' })
export class MovieResolver implements Resolve<MovieI[]> {
  constructor(private store: Store<AppStateI>) {}

  resolve(): Observable<MovieI[]> | Promise<MovieI[]> | MovieI[] {
    this.store.dispatch(getPopularMovies());

    return this.store.select(getPopularMoviesSelector).pipe(skip(1), take(1));
  }
}
