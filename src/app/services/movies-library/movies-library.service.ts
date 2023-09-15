import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, Subject, throwError } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { SearchResponse } from 'src/app/models/search-response';
import { RouterService } from '../router/router.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesLibraryService {

  private _baseUrl: string = "https://www.omdbapi.com/?apiKey=6c3a2d45";

  private _searchSubject: Subject<string> = new Subject<string>();

  search$: Observable<string> = this._searchSubject.asObservable();

  constructor(
    private httpClient: HttpClient,
    private routerService: RouterService
  ) { }

  retrieveMoviesList(searchString: string): Observable<Movie[]> {
    return this.httpClient.get<SearchResponse>(this._baseUrl + '&s=' + searchString).pipe(map(data => {
      if (!data || data?.Error) {
        this.handleError(data);
      }
      return data?.Search;
    }), map(response => {
      response.forEach(movie => Object.assign(new Movie(), movie));
      return response;
    }), retry(3), catchError(err => this.handleError(err)));
  }

  retrieveMovieDetails(imdbID: string, plot: string): Observable<Movie> {
    return this.httpClient.get<Movie>(this._baseUrl + '&i=' + imdbID + '&plot=' + plot).pipe(map(movie => Object.assign(new Movie(), movie)),
      retry(3), catchError(err => this.handleError(err)));
  }

  emitSearch(searchString: string): void {
    this._searchSubject.next(searchString);
  }


  private handleError(error) {
    this.routerService.navigateToError(error);
    return throwError(error);
  }
}
