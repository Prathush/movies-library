import { Component, OnDestroy } from '@angular/core';
import { BehaviorSubject, combineLatest, map, mergeAll, mergeMap, Observable, share, shareReplay, Subject, Subscription, tap, toArray } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MoviesLibraryService } from 'src/app/services/movies-library/movies-library.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html'
})
export class MoviesListComponent implements OnDestroy {

  readonly INITIAL_SEARCH_STRING = 'box';

  private _noMoviesFoundSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private _searchStringSubject: BehaviorSubject<string> = new BehaviorSubject(this.INITIAL_SEARCH_STRING);

  moviesList$: Observable<Movie[]> = this._searchStringSubject.asObservable().pipe(mergeMap((searchString: string) => this.moviesLibraryService.retrieveMoviesList(searchString).pipe(shareReplay(1))));

  noMoviesFound$: Observable<boolean> = this._noMoviesFoundSubject.asObservable();

  private _seacrhSubscription: Subscription;

  constructor(private moviesLibraryService: MoviesLibraryService) {

    this._seacrhSubscription = this.moviesLibraryService.search$.subscribe(searchString => {
      this._searchStringSubject.next(searchString);
    });
  }

  ngOnDestroy(): void {
    this._seacrhSubscription && this._seacrhSubscription.unsubscribe();
  }
}
