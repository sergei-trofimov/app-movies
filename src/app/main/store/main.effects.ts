import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { RequestService } from 'src/app/shared/request.service';
import { MovieI } from 'src/app/shared/types/movie.type';
import * as mainActions from './main.actions';

@Injectable()
export class MainEffects {
  getPopularMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(mainActions.getPopularMovies),
      switchMap(() => {
        return this.request.getPopularMoviesFromDB(12).pipe(
          map((movies: MovieI[]) =>
            mainActions.getPopularMoviesSuccess({ movies })
          ),
          catchError((error: ErrorEvent) =>
            of(mainActions.getPopularMoviesFail({ errorMs: error.message }))
          )
        );
      })
    )
  );

  constructor(private actions$: Actions, private request: RequestService) {}
}
