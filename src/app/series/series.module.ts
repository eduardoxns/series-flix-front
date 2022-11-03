import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { SeriesRoutingModule } from './series-routing.module';
import { SeriesComponent } from './series/series.component';


@NgModule({
  declarations: [
    SeriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SeriesRoutingModule
  ],
  providers: [],
  bootstrap: [SeriesComponent]
})

export class SeriesModule { }
