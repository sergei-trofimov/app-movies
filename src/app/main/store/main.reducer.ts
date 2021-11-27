import { createReducer, on } from '@ngrx/store';

import * as mainActions from './main.actions';
import { MovieI } from 'src/app/shared/types/movie.type';

export interface MainStateI {
  popularMovies: MovieI[];
  errorMessage: string;
}

const initialState: MainStateI = {
  popularMovies: [],
  errorMessage: '',
};

export const mainReducer = createReducer(
  initialState,
  on(mainActions.getPopularMovies, (state): MainStateI => ({ ...state })),
  on(
    mainActions.getPopularMoviesSuccess,
    (state, payload: { movies: MovieI[] }): MainStateI => {
      return {
        ...state,
        popularMovies: [...payload.movies],
      };
    }
  ),
  on(
    mainActions.getPopularMoviesFail,
    (state, payload: { errorMs: string }): MainStateI => {
      return {
        ...state,
        errorMessage: payload.errorMs,
      };
    }
  )
);
