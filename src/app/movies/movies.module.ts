import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRoutingModule } from '../movie-routing/movie-routing.module';
import { TrendingComponent } from '../trending/trending.component';
import { MoviedetailsComponent } from '../moviedetails/moviedetails.component';

@NgModule({
  imports: [
    CommonModule,
    MovieRoutingModule
  ],
  declarations: [
    TrendingComponent,
    MoviedetailsComponent
  ]
})
export class MoviesModule { }
