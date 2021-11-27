import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MainStateI } from './main.reducer';

export const mainFeatureSelector = createFeatureSelector<MainStateI>('main');

export const getPopularMoviesSelector = createSelector(
  mainFeatureSelector,
  (state) => state.popularMovies
);

export const getErrorMessage = createSelector(
  mainFeatureSelector,
  (state) => state.errorMessage
);
