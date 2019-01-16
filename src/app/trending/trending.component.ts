import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie/movie';

import { Router } from '@angular/router';
import { MoviesService } from '../movie/movies.service';
import { ApiResult } from '../movie/apiResult';


@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  private movies: ApiResult;

  constructor(private movieService: MoviesService) {  }
  // constructor(private router: Router, private movieService: MoviesService) {  }

  ngOnInit(): void {
    this.movieService.getTrending().subscribe(result => this.movies = result);
    // console.log(this.movies);
    // this.movieService.getTrending().subscribe(result => { console.log(result); } );
    // console.log(this.movieService.getTrending());
    // this.movieService.getTest();
  }


}
