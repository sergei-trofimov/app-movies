import { ActionReducerMap } from '@ngrx/store';
import * as fromMain from '../main/store/main.reducer';

export interface AppStateI {
  main: fromMain.MainStateI;
}

export const appReducer: ActionReducerMap<AppStateI> = {
  main: fromMain.mainReducer,
};
