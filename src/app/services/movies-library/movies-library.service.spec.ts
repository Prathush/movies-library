
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { RouterService } from '../router/router.service';
import { MoviesLibraryService } from './movies-library.service';

describe('MoviesLibraryService', () => {
  let service: MoviesLibraryService;
  const httpClientMock: HttpClient = { get: {} } as HttpClient;
  const routerServiceMock: RouterService = { navigateToError: {} } as RouterService;

  beforeEach(() => {
    service = new MoviesLibraryService(httpClientMock, routerServiceMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve movies list', () => {
    spyOn(httpClientMock, 'get').and.returnValue(of([new Movie()]));
    service.retrieveMoviesList('');
    expect(httpClientMock.get).toHaveBeenCalledTimes(1);
  });

  it('should retrieve movie details', () => {
    spyOn(httpClientMock, 'get').and.returnValue(of(new Movie()));
    service.retrieveMovieDetails('', '');
    expect(httpClientMock.get).toHaveBeenCalledTimes(1);
  });

  it('should emit search string provided', () => {
    const searchString: string = 'test';
    service.emitSearch(searchString);
    service.search$.subscribe(search => {
      expect(search).toBe(searchString);
    });
  });
});
