import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, mergeMap } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { Plot } from 'src/app/models/plot';
import { MoviesLibraryService } from 'src/app/services/movies-library/movies-library.service';
import { RouterService } from 'src/app/services/router/router.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html'
})
export class MovieDetailsComponent {

  private _plotSubject: BehaviorSubject<string> = new BehaviorSubject('short');

  plotsList: string[] = Object.keys(Plot);

  movieDetails$: Observable<Movie> = this._plotSubject.asObservable().pipe(mergeMap(plot => this.moviesLibraryService.retrieveMovieDetails(this.route.snapshot.queryParamMap?.get('imdbID'), plot)));

  constructor(
    private route: ActivatedRoute,
    private routerService: RouterService,
    private moviesLibraryService: MoviesLibraryService
  ) {
  }

  showValue(value: string): boolean {
    return value && value != 'N/A';
  }

  navigateBack(): void {
    this.routerService.navigateBack();
  }

  onPlotUpdated(event): void {
    this._plotSubject.next(event?.target?.value?.toLowerCase());
  }
}
