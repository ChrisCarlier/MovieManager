import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TrendingComponent } from '../trending/trending.component';
import { MoviedetailsComponent } from '../moviedetails/moviedetails.component';
import { SearchMovieComponent } from '../search-movie/search-movie.component';

// les routes du module Pokémon
const moviesRoutes: Routes = [
  { path: 'trending', component: TrendingComponent},
  { path: 'search-movie', component: SearchMovieComponent},
  { path: 'movie/:id', component: MoviedetailsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(moviesRoutes)
  ],
  exports: [
    RouterModule
]
})
export class MovieRoutingModule { }
