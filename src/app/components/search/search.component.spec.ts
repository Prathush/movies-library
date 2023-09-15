
import { Router } from '@angular/router';
import { MOVIES_LIST_STEP, MOVIE_DETAILS_STEP } from 'src/app/models/routes';
import { MoviesLibraryService } from 'src/app/services/movies-library/movies-library.service';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  const moviesLibraryServiceMock: MoviesLibraryService = { emitSearch: {} } as MoviesLibraryService;
  let routerMock: Router = { url: MOVIES_LIST_STEP.url } as Router;

  beforeEach(() => {
    component = new SearchComponent(routerMock, moviesLibraryServiceMock);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit search string', () => {
    spyOn(moviesLibraryServiceMock, 'emitSearch');
    const event = {
      target: {
        value: 'test'
      }
    };
    component.updateSearchString(event);
    component.search();
    expect(moviesLibraryServiceMock.emitSearch).toHaveBeenCalledOnceWith(event.target.value);
  });

  it('should not emit search string if length of search string is smaller', () => {
    spyOn(moviesLibraryServiceMock, 'emitSearch');
    const event = {
      target: {
        value: 't'
      }
    };
    component.updateSearchString(event);
    component.search();
    expect(moviesLibraryServiceMock.emitSearch).not.toHaveBeenCalled();
  });

  it('should show search field based on router url', () => {
    expect(component.showSearchBox()).toBeTruthy();
    routerMock = { url: MOVIE_DETAILS_STEP.url } as Router;
    component = new SearchComponent(routerMock, moviesLibraryServiceMock);
    expect(component.showSearchBox()).toBeFalsy();
  });
});
