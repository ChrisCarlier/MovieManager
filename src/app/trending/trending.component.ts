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

  private moviesList: ApiResult;

  constructor(private movieService: MoviesService, private http: HttpClient) {  }
  // constructor(private router: Router, private movieService: MoviesService) {  }

  ngOnInit(): void {
    this.movieService.getTrending().subscribe(result => this.moviesList = result);
    // console.log(this.movies);
    // this.movieService.getTrending().subscribe(result => { console.log(result); } );
    // console.log(this.movieService.getTrending());
    // this.movieService.getTest();
  }

  getPosterImg(imgUrl: string): string {
    return 'https://image.tmdb.org/t/p/w154/' + imgUrl;
  }
  // getPosterImg(imgUrl: string): Observable<any> {
  //   return this.http.get('https://image.tmdb.org/t/p/w92/' + imgUrl);
  // }

}
