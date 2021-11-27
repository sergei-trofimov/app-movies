import { createAction, props } from '@ngrx/store';
import { MovieI } from 'src/app/shared/types/movie.type';

export enum MainActions {
  GET_POPULAR_MOVIES = '[Main Component] GET_POPULAR_MOVIES',
  GET_POPULAR_MOVIES_SUCCESS = '[Main Component] GET_POPULAR_MOVIES_SUCCESS',
  GET_POPULAR_MOVIES_FAIL = '[Main Component] GET_POPULAR_MOVIES_FAIL',
}

export const getPopularMovies = createAction(MainActions.GET_POPULAR_MOVIES);

export const getPopularMoviesSuccess = createAction(
  MainActions.GET_POPULAR_MOVIES_SUCCESS,
  props<{ movies: MovieI[]}>()
);

export const getPopularMoviesFail = createAction(
  MainActions.GET_POPULAR_MOVIES_FAIL,
  props<{ errorMs: string }>()
)
