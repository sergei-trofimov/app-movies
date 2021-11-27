import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { MovieI } from 'src/app/shared/types/movie.type';
import { AppStateI } from 'src/app/store/app.reducer';
import { getPopularMovies } from '../store/main.actions';
import * as mainSelectors from '../store/main.selectors';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  // public popularMovies$: Observable<MovieI[]> = this.store.select(mainSelectors.getPopularMoviesSelector);
  readonly popularMovies$: Observable<MovieI[]> = this.route.data.pipe(
    map((data) => data.movies)
  );

  constructor(private store: Store<AppStateI>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.store.dispatch(getPopularMovies());
  }
}
