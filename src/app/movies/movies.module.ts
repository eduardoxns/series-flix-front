import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { MoviesComponent } from './movies/movies.component';
import { MoviesRoutingModule } from './movies-routing.module';


@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MoviesRoutingModule,
  ],
  providers: [],
  bootstrap: [MoviesComponent]
})

export class MoviesModule { }
