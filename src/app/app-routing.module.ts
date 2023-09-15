import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorComponent } from './components/error/error.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';

const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      { path: '', component: MoviesListComponent },
      { path: 'movie-details', component: MovieDetailsComponent },
      { path: 'error', component: ErrorComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
