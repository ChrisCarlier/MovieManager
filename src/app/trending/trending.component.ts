import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie/movie';

import { Router } from '@angular/router';
import { MoviesService } from '../movie/movies.service';
import { ApiResult } from '../movie/apiResult';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  public moviesList: ApiResult;

  constructor(private movieService: MoviesService, private router: Router, private http: HttpClient) {  }
  // constructor(private router: Router, private movieService: MoviesService) {  }

  ngOnInit(): void {
    this.movieService.getTrending().subscribe(result => this.moviesList = result);
  }

  getPosterImg(imgUrl: string): string {
    return this.movieService.getPosterImg(imgUrl, 154);
  }

  selectMovie(movie: Movie) {
    let link = ['/movie/', movie.id];
    this.router.navigate(link);
  }

}
