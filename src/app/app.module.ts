import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesCarouselComponent } from './components/movies-carousel/movies-carousel.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CarouselModule } from 'primeng/carousel';
import { LazyImageLoaderDirective } from './directives/lazy-image-loader/lazy-image-loader.directive';
import { TranslatePipe } from './pipes/translate/translate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    MoviesCarouselComponent,
    SpinnerComponent,
    LazyImageLoaderDirective,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
