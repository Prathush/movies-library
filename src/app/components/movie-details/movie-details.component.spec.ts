
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { Plot } from 'src/app/models/plot';
import { MoviesLibraryService } from 'src/app/services/movies-library/movies-library.service';
import { RouterService } from 'src/app/services/router/router.service';
import { MovieDetailsComponent } from './movie-details.component';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let routerServiceMock = { navigateBack: {} } as RouterService;
  let moviesLibraryService = { retrieveMovieDetails: {} } as MoviesLibraryService;
  const queryParamMap = new Map();
  queryParamMap.set('imdbID', '12345');
  const route = { snapshot: { queryParamMap: queryParamMap } } as unknown as ActivatedRoute;

  beforeEach(() => {
    component = new MovieDetailsComponent(route, routerServiceMock, moviesLibraryService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show field based on value passed', () => {
    expect(component.showValue('')).toBeFalsy();
    expect(component.showValue('N/A')).toBeFalsy();
    expect(component.showValue('NA')).toBeTruthy();
    expect(component.showValue('image')).toBeTruthy();
  });

  it('should call router service navigate back on back button click', () => {
    spyOn(routerServiceMock, 'navigateBack');
    component.navigateBack();
    expect(routerServiceMock.navigateBack).toHaveBeenCalledTimes(1);
  });

  it('should retrieve movie plot details based on value passed', () => {
    spyOn(moviesLibraryService, 'retrieveMovieDetails').and.returnValue(of(new Movie()));
    component.onPlotUpdated({ target: { value: Plot.FULL } });
    setTimeout(() => {
      expect(moviesLibraryService.retrieveMovieDetails).toHaveBeenCalledTimes(1);
    }, 100);
  });

  it('should retrieve movie details', done => {
    spyOn(moviesLibraryService, 'retrieveMovieDetails').and.returnValue(of(new Movie()));
    component.movieDetails$.subscribe(movieDetails => {
      expect(moviesLibraryService.retrieveMovieDetails).toHaveBeenCalledTimes(1);
      done();
    });
  });
});
