import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MOVIES_LIST_STEP, MOVIE_DETAILS_STEP } from 'src/app/models/routes';
import { MoviesLibraryService } from 'src/app/services/movies-library/movies-library.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  private searchString: string;

  private readonly MIN_SEARCH_STRING_LENGTH = 3;

  constructor(private router: Router, private moviesLibraryService: MoviesLibraryService) { }

  updateSearchString(event): void {
    this.searchString = event.target.value;
  }

  search(): void {
    if (this.searchString?.length >= this.MIN_SEARCH_STRING_LENGTH) {
      this.moviesLibraryService.emitSearch(this.searchString);
    }
  }

  showSearchBox = (): boolean => this.router && this.router.url === MOVIES_LIST_STEP.url;
}
