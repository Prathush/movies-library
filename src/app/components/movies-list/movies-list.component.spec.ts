
import { Subject, of } from 'rxjs';
import { MoviesListComponent } from './movies-list.component';
import { MoviesLibraryService } from 'src/app/services/movies-library/movies-library.service';
import { Movie } from 'src/app/models/movie';

describe('MoviesListComponent', () => {
  let component: MoviesListComponent;
  const searchSubject: Subject<string> = new Subject<string>();
  let moviesLibraryServiceMock: MoviesLibraryService = { search$: searchSubject.asObservable(), retrieveMoviesList: {} } as MoviesLibraryService;

  beforeEach(() => {
    component = new MoviesListComponent(moviesLibraryServiceMock);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve movies list', done => {
    spyOn(moviesLibraryServiceMock, 'retrieveMoviesList').and.returnValue(of([new Movie()]));
    component.moviesList$.subscribe(moviesList => {
      expect(moviesLibraryServiceMock.retrieveMoviesList).toHaveBeenCalledOnceWith(component.INITIAL_SEARCH_STRING);
      expect(moviesList.length).toEqual(1);
      done();
    });
  });

  it('should show no movies found message if list is empty', done => {
    spyOn(moviesLibraryServiceMock, 'retrieveMoviesList').and.returnValue(of([]));
    component.moviesList$.subscribe(moviesList => {
      expect(moviesLibraryServiceMock.retrieveMoviesList).toHaveBeenCalledOnceWith('box');
      expect(moviesList.length).toEqual(0);
      done();
    });
  });

  it('should unsubscribe search subscription on destroy', () => {
    spyOn(component['_seacrhSubscription'], 'unsubscribe');
    component.ngOnDestroy();
    expect(component['_seacrhSubscription'].unsubscribe).toHaveBeenCalledTimes(1);
  });
});
