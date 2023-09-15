import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { ResponsiveOption } from 'src/app/models/responsive-option';
import { MOVIE_DETAILS_STEP } from 'src/app/models/routes';
import { RouterService } from 'src/app/services/router/router.service';

@Component({
  selector: 'app-movies-carousel',
  templateUrl: './movies-carousel.component.html',
  styleUrls: ['./movies-carousel.component.scss']
})
export class MoviesCarouselComponent {
  @Input()
  movies: Movie[];

  responsiveOptions: ResponsiveOption[];

  constructor(private routerService: RouterService) {
    this.responsiveOptions = [
      new ResponsiveOption('1024px', 5, 3), new ResponsiveOption('768px', 3, 2), new ResponsiveOption('560px', 1, 1)
    ];
  }

  onImageClick(show: Movie): void {
    this.routerService.navigateTo(MOVIE_DETAILS_STEP.url, { queryParams: { imdbID: show?.imdbID } });
  }
}
