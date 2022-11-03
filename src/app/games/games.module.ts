import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games/games.component';


@NgModule({
  declarations: [
    GamesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    GamesRoutingModule
  ]
})

export class GamesModule {}
