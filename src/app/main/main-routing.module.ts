import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieResolver } from '../shared/movie.resolver';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full',
    resolve: {
      movies: MovieResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class MainRoutingModule {}
